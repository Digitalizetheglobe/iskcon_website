"use client";
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import upi_qr from "../../public/images/upi_qr 1.png";
import PhoneInput from '../components/PhoneInput';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
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
                  <div key={i} className="h-8 bg-gray-200 rounded animate-pulse"></div>
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
  const purpose = searchParams.get('purpose');
  const amount = searchParams.get('amount');

  const isAnyAmountDonation = !amount && purpose && purpose.includes('Any Amount');

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    isPhoneValid: false,
    citizenType: '',
    customAmount: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const getCurrencySymbol = () => {
    return formData.citizenType === 'indian' ? '₹' : '$';
  };

  const getCurrencyName = () => {
    return formData.citizenType === 'indian' ? 'INR' : 'USD';
  };

  // Improved helper to format amounts with correct commas
  const formatAmount = (value: string | number) => {
    // Convert to string and remove any existing formatting
    const cleanValue = String(value).replace(/[^\d.]/g, '');
    const num = parseFloat(cleanValue);
    
    // Return original value if not a valid number
    if (isNaN(num) || cleanValue === '') return value;
    
    // Format based on citizen type
    if (formData.citizenType === 'indian') {
      // Indian numbering system (lakhs and crores)
      return num.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 0
      });
    } else {
      // International numbering system (thousands, millions)
      return num.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 0
      });
    }
  };

  // Helper to format amount for display with currency symbol
  const formatAmountWithCurrency = (value: string | number) => {
    const symbol = formData.citizenType === 'indian' ? '₹' : '$';
    const formattedAmount = formatAmount(value);
    return `${symbol} ${formattedAmount}`;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!formData.isPhoneValid) {
      newErrors.phoneNumber = 'Please enter a valid phone number for the selected country';
    }
    if (!formData.citizenType) {
      newErrors.citizenType = 'Please select citizen type';
    }
    if (isAnyAmountDonation) {
      if (!formData.customAmount || !formData.customAmount.trim()) {
        newErrors.customAmount = 'Please enter the amount you want to donate';
      } else {
        const amountValue = parseFloat(formData.customAmount.replace(/[^\d.]/g, ''));
        if (isNaN(amountValue) || amountValue <= 0) {
          newErrors.customAmount = 'Please enter a valid amount greater than 0';
        } else if (amountValue < 1) {
          const minAmount = formData.citizenType === 'indian' ? '₹1' : '$1';
          newErrors.customAmount = `Minimum donation amount is ${minAmount}`;
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'customAmount') {
      // Allow only numbers and one decimal point
      const numericValue = value.replace(/[^\d.]/g, '');
      const parts = numericValue.split('.');
      // Ensure only one decimal point
      const formattedValue = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : numericValue;
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePhoneChange = (phoneNumber: string, isValid: boolean) => {
    setFormData(prev => ({ ...prev, phoneNumber, isPhoneValid: isValid }));
    if (errors.phoneNumber) {
      setErrors(prev => ({ ...prev, phoneNumber: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validateForm()) {
      setTimeout(() => {
        const finalAmount = isAnyAmountDonation ? formData.customAmount : amount;
        console.log('Form submitted:', {
          formData,
          purpose,
          amount: finalAmount,
          isCustomAmount: isAnyAmountDonation,
          currency: getCurrencyName()
        });
        setShowSuccess(true);
        setIsSubmitting(false);
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  const getDisplayAmount = () => {
    if (amount) {
      // For predefined amounts, always show with ₹ symbol
      const cleanAmount = String(amount).replace(/[^\d.]/g, '');
      const num = parseFloat(cleanAmount);
      if (!isNaN(num)) {
        return `₹ ${num.toLocaleString('en-IN', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 0
        })}`;
      }
      return `₹ ${amount}`;
    } else if (isAnyAmountDonation && formData.customAmount && formData.citizenType) {
      return formatAmountWithCurrency(formData.customAmount);
    }
    return null;
  };

  // Helper to get formatted display value for custom amount input
  const getCustomAmountDisplayValue = () => {
    if (!formData.customAmount) return '';
    
    // If user is typing, show the raw value to allow natural input
    const numValue = parseFloat(formData.customAmount.replace(/[^\d.]/g, ''));
    if (isNaN(numValue)) return formData.customAmount;
    
    // For display in input, don't format while typing to avoid cursor jumps
    return formData.customAmount;
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto bg-orange-50 py-8 px-4">
      <div className="">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 pt-2">
            Donation for: <span className="text-blue-900">{purpose || 'General Donation'}</span>
          </h1>
          {getDisplayAmount() && (
            <p className="text-xl text-gray-600">
              {isAnyAmountDonation ? 'Your Amount: ' : 'Suggested Amount: '}
              <span className="font-semibold">{getDisplayAmount()}</span>
            </p>
          )}
          {isAnyAmountDonation && (!formData.customAmount || !formData.citizenType) && (
            <p className="text-lg text-orange-600 mt-2">
              Please select your citizen type and enter your desired donation amount
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Donation Details</h2>
            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <strong>Success!</strong> Form submitted successfully. You will be redirected to payment soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Phone */}
              <PhoneInput value={formData.phoneNumber} onChange={handlePhoneChange} error={errors.phoneNumber} />

              {/* Citizen Type */}
              <div>
                <label htmlFor="citizenType" className="block text-sm font-medium text-gray-700 mb-2">
                  Citizen Type *
                </label>
                <select
                  id="citizenType"
                  name="citizenType"
                  value={formData.citizenType}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.citizenType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Citizen Type</option>
                  <option value="indian">Indian Citizen</option>
                  <option value="foreign">Foreign Citizen</option>
                </select>
                {errors.citizenType && <p className="mt-1 text-sm text-red-600">{errors.citizenType}</p>}
              </div>

              {/* Custom Amount */}
              {isAnyAmountDonation && formData.citizenType && (
                <div className="p-4 rounded-lg ">
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Donation Amount ({getCurrencyName()}) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                      {getCurrencySymbol()}
                    </span>
                    <input
                      type="text"
                      id="customAmount"
                      name="customAmount"
                      value={getCustomAmountDisplayValue()}
                      onChange={handleInputChange}
                      className={`w-full pl-8 pr-3 py-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg font-semibold ${
                        errors.customAmount ? 'border-red-500' : 'border-orange-300'
                      }`}
                      placeholder="0"
                    />
                  </div>
                  {errors.customAmount && <p className="mt-1 text-sm text-red-600">{errors.customAmount}</p>}
                  {formData.customAmount && (
                    <p className="mt-2 text-sm text-blue-600">
                      Formatted amount: <strong>{formatAmountWithCurrency(formData.customAmount)}</strong>
                    </p>
                  )}
                  <p className="mt-2 text-xs text-gray-600">
                    Enter the amount you wish to donate. Minimum amount is {getCurrencySymbol()}1
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || showSuccess}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 cursor-pointer"
              >
                {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </form>
          </div>

          {/* Payment Methods */}
          <div className="space-y-6">
            {/* QR Code */}
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Scan to Donate via UPI</h3>
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <Image src={upi_qr} alt="UPI QR Code for Donation" width={200} height={200} className="rounded-lg" />
                </div>
              </div>
              <p className="text-sm text-gray-600">Scan this QR code with any UPI app to make instant donation</p>
              {isAnyAmountDonation && formData.customAmount && formData.citizenType && (
                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-sm text-orange-800">
                    <strong>Remember:</strong> Enter {formatAmountWithCurrency(formData.customAmount)} when making the UPI payment
                    {formData.citizenType === 'foreign' && (
                      <span className="block mt-1 text-xs">
                        (Note: UPI payments are typically in INR. Please check conversion rates.)
                      </span>
                    )}
                  </p>
                </div>
              )}
            </div>

            {/* Bank Details */}
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Bank Transfer Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Bank Name:</span>
                  <span className="text-sm font-semibold"> KOTAK MAHINDRA BANK</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Account Name:</span>
                  <span className="text-sm font-semibold">HARE KRISHNA MOVEMENT</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Account Number:</span>
                  <span className="text-sm font-semibold font-mono">0449364305</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-600">IFSC Code:</span>
                  <span className="text-sm font-semibold font-mono">KKBK0007478</span>
                </div>
              </div>
              {isAnyAmountDonation && formData.customAmount && formData.citizenType && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Transfer Amount:</strong> {formatAmountWithCurrency(formData.customAmount)}
                    <br />
                    <strong>Reference:</strong> Include your name and &quot;{purpose}&quot; in the transfer description
                    {formData.citizenType === 'foreign' && (
                      <span className="block mt-2 text-xs">
                        <strong>Note for Foreign Citizens:</strong> This is an Indian bank account. Please check with
                        your bank for international transfer procedures and conversion rates.
                      </span>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
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