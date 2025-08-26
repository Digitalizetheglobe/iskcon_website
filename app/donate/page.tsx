"use client";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
// import Image from 'next/image';
// import upi_qr from "../../public/images/upi_qr 1.png";
// import PhoneInput from '../components/PhoneInput';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: number;
  isPhoneValid: boolean;
  citizenType: string;
  customAmount?: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  citizenType?: string;
  customAmount?: string;
}

import { 
  DONATION_CONFIG, 
  getApiUrl, 
  validateDonationAmount, 
  formatAmount as formatAmountConfig, 
  getSevaType as getSevaTypeConfig 
} from '../config/donation';
import { formatPhoneNumber, validatePhoneNumber } from '../utils/phoneUtils';
import DonationSuccess from '../components/DonationSuccess';

function DonatePageLoading() {
  return (
    <div className="min-h-screen bg-orange-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-6"></div>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i}>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
              <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="h-48 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 bg-gray-200 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DonatePageContent() {
  const searchParams = useSearchParams();
  const purpose = searchParams.get("purpose");
  const amount = searchParams.get("amount");

  const isAnyAmountDonation =
    !amount && purpose && purpose.includes("Any Amount");

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: 0,
    isPhoneValid: false,
    citizenType: "",
    customAmount: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [donationDetails, setDonationDetails] = useState<any>(null);

  // Load Razorpay script
  useEffect(() => {
    // Razorpay script is loaded via Next.js Script component
  }, []);

  const getCurrencyName = () => {
    return formData.citizenType === "indian" ? "INR" : "USD";
  };

  // Improved helper to format amounts with correct commas
  const formatAmount = (value: string | number) => {
    // Convert to string and remove any existing formatting
    const cleanValue = String(value).replace(/[^\d.]/g, "");
    const num = parseFloat(cleanValue);

    // Return original value if not a valid number
    if (isNaN(num) || cleanValue === "") return value;

    // Format based on citizen type
    if (formData.citizenType === "indian") {
      // Custom Indian numbering system (lakhs and crores)
      const [integerPart, decimalPart] = cleanValue.split('.');
      const lastThree = integerPart.slice(-3);
      const remaining = integerPart.slice(0, -3);
      const formattedRemaining = remaining ? remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',') : '';
      const formattedInteger = formattedRemaining ? `${formattedRemaining},${lastThree}` : lastThree;
      return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
    } else {
      // International numbering system (thousands, millions)
      return num.toLocaleString("en-US", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
      });
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phoneNumber || formData.phoneNumber === 0) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!validatePhoneNumber(formData.phoneNumber, formData.citizenType as 'indian' | 'foreign')) {
      newErrors.phoneNumber = formData.citizenType === 'indian' 
        ? "Please enter a valid 10-digit Indian phone number" 
        : "Please enter a valid phone number";
    }

    if (!formData.citizenType) {
      newErrors.citizenType = "Please select citizen type";
    }
    if (isAnyAmountDonation) {
      if (!formData.customAmount || !formData.customAmount.trim()) {
        newErrors.customAmount = "Please enter the amount you want to donate";
      } else {
        const amountValue = parseFloat(
          formData.customAmount.replace(/[^\d.]/g, "")
        );
        if (isNaN(amountValue) || amountValue <= 0) {
          newErrors.customAmount = "Please enter a valid amount greater than 0";
        } else if (!validateDonationAmount(amountValue)) {
          newErrors.customAmount = DONATION_CONFIG.ERRORS.INVALID_AMOUNT;
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      // Only allow valid phone numbers
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      const numValue = numericValue ? parseInt(numericValue) : 0;
      setFormData((prev) => ({ ...prev, [name]: numValue }));
    } else if (name === "customAmount") {
      // Allow only numbers and one decimal point
      const numericValue = value.replace(/[^\d.]/g, "");
      const parts = numericValue.split(".");
      // Ensure only one decimal point
      const formattedValue =
        parts.length > 2
          ? parts[0] + "." + parts.slice(1).join("")
          : numericValue;
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Helper function to determine seva type from purpose
  const getSevaType = (purpose: string | null) => {
    if (!purpose) return "VIDHYA DANA";
    if (purpose.toLowerCase().includes("annadan")) return "ANNADAN SEVA";
    if (
      purpose.toLowerCase().includes("vidhya") ||
      purpose.toLowerCase().includes("education")
    )
      return "VIDHYA DANA";
    return "GENERAL DONATION";
  };

  // Function to verify payment with Razorpay
  const verifyPayment = async (paymentResponse: any, donationId: string) => {
    try {
      console.log('Verifying payment...');
      
      const response = await fetch(getApiUrl('/verify-payment-form'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          razorpay_order_id: paymentResponse.razorpay_order_id,
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_signature: paymentResponse.razorpay_signature,
          donationId: donationId
        })
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('Payment verified successfully:', result);
        setDonationDetails({
          sevaName: result.donation.sevaName,
          amount: result.donation.amount,
          donorName: result.donation.donorName,
          paymentId: result.donation.paymentId
        });
        setShowSuccess(true);
        setShowError(false);
        
      } else {
        throw new Error(result.message || DONATION_CONFIG.ERRORS.VERIFICATION_FAILED);
      }
      
    } catch (error) {
      console.error('Error verifying payment:', error);
      setErrorMessage(DONATION_CONFIG.ERRORS.VERIFICATION_FAILED);
      setShowError(true);
      setShowSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    setErrorMessage("");

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare donation data
      const finalAmount = isAnyAmountDonation
        ? parseFloat(formData.customAmount?.replace(/[^\d.]/g, "") || "0")
        : parseFloat(amount || "0");

      const donationData = {
        sevaName: purpose || "General Donation",
        sevaType: getSevaType(purpose),
        sevaAmount: finalAmount,
        donorName: formData.fullName,
        donorEmail: formData.email,
        donorPhone: formatPhoneNumber(formData.phoneNumber, formData.citizenType as 'indian' | 'foreign'),
        donorType: formData.citizenType === "indian" ? "Indian Citizen" : "Foreign Citizen",
        description: `Donation for ${purpose || "General Donation"}`,
        campaign: purpose || "General Campaign"
      };

      console.log('Submitting donation form:', donationData);
      
      // Submit form to backend
      const response = await fetch(getApiUrl('/submit-form'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData)
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('Form submitted successfully:', result);
        
        // Initialize Razorpay payment
        const options = {
          key: DONATION_CONFIG.RAZORPAY.KEY_ID,
          amount: result.order.amount,
          currency: result.order.currency,
          name: DONATION_CONFIG.ORGANIZATION.NAME,
          description: result.donation.sevaName,
          order_id: result.order.id,
          handler: function (paymentResponse: any) {
            console.log('Payment successful:', paymentResponse);
            verifyPayment(paymentResponse, result.donation.id);
          },
          prefill: {
            name: result.donation.donorName,
            email: result.donation.donorEmail,
            contact: donationData.donorPhone
          },
          theme: {
            color: DONATION_CONFIG.ORGANIZATION.THEME_COLOR
          },
          modal: {
            ondismiss: function() {
              setIsSubmitting(false);
            }
          }
        };

        // Check if Razorpay is loaded
        if (typeof window !== 'undefined' && (window as any).Razorpay) {
          const rzp = new (window as any).Razorpay(options);
          rzp.open();
        } else {
          throw new Error('Razorpay not loaded. Please refresh the page and try again.');
        }
        
              } else {
          throw new Error(result.message || DONATION_CONFIG.ERRORS.FORM_VALIDATION);
        }
        
      } catch (error: any) {
        console.error('Error submitting form:', error);
        setErrorMessage(DONATION_CONFIG.ERRORS.NETWORK_ERROR + ' ' + error.message);
        setShowError(true);
      } finally {
        setIsSubmitting(false);
      }
    };

  const sevaType = getSevaTypeConfig(purpose);

  return (
    <>
      {/* Load Razorpay Script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />
      
      <div className="min-h-screen bg-white flex items-center justify-center pt-4 pb-9 px-4">
        <div
          className={`bg-[#FF6800] max-w-xl w-full rounded-lg px-6 py-10 shadow-xl text-center`}
        >
          {/* Seva Tags */}
          <div className="flex flex-col items-center justify-center mb-1">
            {/* SEVA NAME */}
            <div className="mb-4 text-center">
              <div className="bg-blue-900 text-white text-sm font-semibold px-4 py-2 rounded-lg inline-block">
                SEVA NAME
              </div>
              <h2 className="text-lg font-semibold text-black mt-2">
                {purpose || "General Donation"}
              </h2>
            </div>

            {/* SEVA TYPE */}
            <div className="mb-4 text-center">
              <div className="bg-blue-900 text-white text-sm font-semibold px-4 py-2 rounded-lg inline-block mb-2">
                SEVA TYPE
              </div>
              <p className="text-lg font-bold text-black">{sevaType}</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-blue-900 text-white text-sm font-semibold px-4 py-2 rounded-lg inline-block mb-2">
              SEVA AMOUNT
            </div>
            <p className="text-xl font-bold text-black">
              {isAnyAmountDonation ? (
                <input
                  type="text"
                  name="customAmount"
                  value={formData.customAmount}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                  className="w-32 text-center bg-transparent border-b border-black focus:outline-none"
                />
              ) : (
                `₹ ${amount ? formatAmount(amount) : "0"}`
              )}
            </p>
            {errors.customAmount && (
              <p className="text-red-600 text-sm mt-1">{errors.customAmount}</p>
            )}
          </div>

          {/* Success Message */}
          {showSuccess && (
            <DonationSuccess 
              donationDetails={donationDetails}
              onClose={() => {
                setShowSuccess(false);
                setDonationDetails(null);
                // Reset form
                setFormData({
                  fullName: "",
                  email: "",
                  phoneNumber: 0,
                  isPhoneValid: false,
                  citizenType: "",
                  customAmount: "",
                });
              }}
            />
          )}

          {/* Error Message */}
          {showError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              <p className="font-semibold">❌ Error</p>
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Donor Name */}
            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Donor Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your Name"
                required={true}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none bg-white"
              />
              {errors.fullName && (
                <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Mobile Number<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber === 0 ? "" : formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                min={1000000000}
                max={9999999999}
                required={true}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none bg-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {errors.phoneNumber && (
                <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-black mb-1">
                E-Mail ID<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required={true}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none bg-white"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Payment Option */}
            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Payment Option<span className="text-red-600">*</span>
              </label>
              <div className="flex items-center gap-4 text-sm">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="citizenType"
                    value="indian"
                    checked={formData.citizenType === "indian"}
                    onChange={handleInputChange}
                    className="accent-blue-700"
                  />
                  Indian Citizen
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="citizenType"
                    value="foreign"
                    checked={formData.citizenType === "foreign"}
                    onChange={handleInputChange}
                    className="accent-blue-700"
                  />
                  Foreign Citizen
                </label>
              </div>
              {errors.citizenType && (
                <p className="text-red-600 text-sm mt-1">{errors.citizenType}</p>
              )}
            </div>

            {/* Checkboxes */}
            <div className="text-sm space-y-2">
              {formData.citizenType === "indian" && (
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-700" />I would
                  like to receive Maha Prasadam (Only within India)
                </label>
              )}
              <label className="flex items-start gap-2">
                <input type="checkbox" className="accent-blue-700 mt-1" />
                <span>
                  I wish to receive 80G Tax Exemption
                  <p className="text-[11px] text-black font-semibold mt-1">
                    Finance Act 2021 has made it mandatory to upload the details
                    of donations collected by all those organisations collecting
                    donations which qualify for 80G deduction in Form No. 10BD.
                    The PAN and Address are mandatory details to be uploaded.
                  </p>
                </span>
              </label>
            </div>

            {/* Donate Now Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full cursor-pointer ${
                isSubmitting ? "bg-gray-400" : "bg-[#0B3954] hover:bg-[#0B3954]/90"
              } text-white font-bold py-2 rounded-md transition-colors`}
            >
              {isSubmitting ? "Processing..." : "DONATE NOW"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const DonatePage = () => {
  return (
    <Suspense fallback={<DonatePageLoading />}>
      <DonatePageContent />
    </Suspense>
  );
};

export default DonatePage;
