"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
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
  // const [showSuccess, setShowSuccess] = useState(false);

  // const getCurrencySymbol = () => {
  //   return formData.citizenType === 'indian' ? '₹' : '$';
  // };

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

  // Helper to format amount for display with currency symbol
  // const formatAmountWithCurrency = (value: string | number) => {
  //   const symbol = formData.citizenType === 'indian' ? '₹' : '$';
  //   const formattedAmount = formatAmount(value);
  //   return `${symbol} ${formattedAmount}`;
  // };

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
    } else if (formData.phoneNumber.toString().length !== 10) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
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
        } else if (amountValue < 1) {
          const minAmount = formData.citizenType === "indian" ? "₹1" : "$1";
          newErrors.customAmount = `Minimum donation amount is ${minAmount}`;
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

  // const handlePhoneChange = (phoneNumber: string, isValid: boolean) => {
  //   setFormData(prev => ({ ...prev, phoneNumber, isPhoneValid: isValid }));
  //   if (errors.phoneNumber) {
  //     setErrors(prev => ({ ...prev, phoneNumber: undefined }));
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validateForm()) {
      setTimeout(() => {
        const finalAmount = isAnyAmountDonation
          ? formData.customAmount
          : amount;
        console.log("Form submitted:", {
          formData,
          purpose,
          amount: finalAmount,
          isCustomAmount: isAnyAmountDonation,
          currency: getCurrencyName(),
        });
        // setShowSuccess(true);
        setIsSubmitting(false);
        // setTimeout(() => {
        //   setShowSuccess(false);
        // }, 5000);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  // Helper to get formatted display value for custom amount input

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

  // Helper function to determine background color based on seva type

  const sevaType = getSevaType(purpose);

  return (
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
            {/* <PhoneInput
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none "
        /> */}
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

          {/* Success Message */}
          {/* {showSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          <p>Thank you for your donation! We will contact you shortly.</p>
        </div>
      )} */}

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
