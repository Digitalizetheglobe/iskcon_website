// app/donate/page.tsx
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
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  citizenType?: string;
}

// Loading component for Suspense fallback
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

// Main component content
function DonatePageContent() {
  const searchParams = useSearchParams();
  const purpose = searchParams.get('purpose');
  const amount = searchParams.get('amount');
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    isPhoneValid: false,
    citizenType: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!formData.isPhoneValid) {
      newErrors.phoneNumber = 'Please enter a valid phone number for the selected country';
    }

    // Citizen type validation
    if (!formData.citizenType) {
      newErrors.citizenType = 'Please select citizen type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handlePhoneChange = (phoneNumber: string, isValid: boolean) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber,
      isPhoneValid: isValid
    }));
    
    // Clear phone error when user starts typing
    if (errors.phoneNumber) {
      setErrors(prev => ({
        ...prev,
        phoneNumber: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', { formData, purpose, amount });
        setShowSuccess(true);
        setIsSubmitting(false);
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 pt-2">
            Donation for: <span className="text-blue-900">{purpose || 'General Donation'}</span>
          </h1>
          {amount && (
            <p className="text-xl text-gray-600">
              Suggested Amount: <span className="font-semibold">₹ {Number(amount).toLocaleString()}</span>
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Form */}
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
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
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
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <PhoneInput
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                error={errors.phoneNumber}
              />

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
                {errors.citizenType && (
                  <p className="mt-1 text-sm text-red-600">{errors.citizenType}</p>
                )}
              </div>

              {/* Submit Button */}
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
            {/* QR Code Section */}
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Scan to Donate via UPI
              </h3>
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <Image
                    src={upi_qr}
                    alt="UPI QR Code for Donation"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Scan this QR code with any UPI app to make instant donation
              </p>
            </div>

            {/* Bank Details Section */}
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Bank Transfer Details
              </h3>
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
              {/* <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-800">
                  <strong>Note:</strong> Please include your name and purpose in the transfer description for proper tracking.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main exported component with Suspense wrapper
const DonatePage = () => {
  return (
    <Suspense fallback={<DonatePageLoading />}>
      <DonatePageContent />
    </Suspense>
  );
};

export default DonatePage;