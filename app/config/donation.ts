// Donation API Configuration
export const DONATION_CONFIG = {
  // API Base URL - Change this based on your environment  // https://api.harekrishnavidya.org/ //https://api.harekrishnavidya.org
  API_BASE_URL: process.env.NEXT_PUBLIC_DONATION_API_URL || 'https://api.harekrishnavidya.org/api/donations',
  
  // Razorpay Configuration
  RAZORPAY: {
    // Live keys from environment variables
    KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_R7u0ddNSZ7PFCB',
    // Secret key should only be used on the server side
    SECRET_KEY: process.env.RAZORPAY_SECRET_KEY || 'pRsEm4Gp7Qk7J7Sj4AC8A8Es',
    // Webhook secret for payment verification
    WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET || 'https://harekrishnavidya.org/monthly-donation/verify-webhook.php',
  },
  
  // Organization Details
  ORGANIZATION: {
    NAME: 'ISKCON',
    DESCRIPTION: 'International Society for Krishna Consciousness',
    THEME_COLOR: '#FF6800',
  },
  
  // Payment Settings
  PAYMENT: {
    CURRENCY: 'INR',
    MIN_AMOUNT: 1, // Minimum donation amount in INR
    MAX_AMOUNT: 1000000, // Maximum donation amount in INR
  },
  
  // Seva Types Mapping
  SEVA_TYPES: {
    ANNADAN: 'ANNADAN SEVA',
    VIDHYA_DANA: 'VIDHYA DANA',
    GENERAL: 'GENERAL DONATION',
    SPONSOR_CHILD: 'SPONSOR A CHILD',
    TEACHING_VALUES: 'TEACHING MORAL VALUES',
  },
  
  // Error Messages
  ERRORS: {
    NETWORK_ERROR: 'Network error. Please check your connection and try again.',
    PAYMENT_FAILED: 'Payment failed. Please try again or contact support.',
    VERIFICATION_FAILED: 'Payment verification failed. Please contact support if the amount was deducted.',
    INVALID_AMOUNT: 'Please enter a valid amount between ₹1 and ₹10,00,000.',
    FORM_VALIDATION: 'Please fill in all required fields correctly.',
  },
  
  // Success Messages
  SUCCESS: {
    PAYMENT_COMPLETED: '🎉 Thank you for your donation! Your payment has been processed successfully.',
    FORM_SUBMITTED: 'Form submitted successfully. Redirecting to payment...',
  },
};

// Helper function to get API URL
export const getApiUrl = (endpoint: string): string => {
  return `${DONATION_CONFIG.API_BASE_URL}${endpoint}`;
};

// Helper function to validate donation amount
export const validateDonationAmount = (amount: number): boolean => {
  return amount >= DONATION_CONFIG.PAYMENT.MIN_AMOUNT && 
         amount <= DONATION_CONFIG.PAYMENT.MAX_AMOUNT;
};

// Helper function to format amount for display
export const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Helper function to get seva type from purpose
export const getSevaType = (purpose: string | null): string => {
  if (!purpose) return DONATION_CONFIG.SEVA_TYPES.GENERAL;
  
  const purposeLower = purpose.toLowerCase();
  
  if (purposeLower.includes('annadan')) return DONATION_CONFIG.SEVA_TYPES.ANNADAN;
  if (purposeLower.includes('vidhya') || purposeLower.includes('education')) {
    return DONATION_CONFIG.SEVA_TYPES.VIDHYA_DANA;
  }
  if (purposeLower.includes('sponsor') && purposeLower.includes('child')) {
    return DONATION_CONFIG.SEVA_TYPES.SPONSOR_CHILD;
  }
  if (purposeLower.includes('teaching') || purposeLower.includes('moral')) {
    return DONATION_CONFIG.SEVA_TYPES.TEACHING_VALUES;
  }
  
  return DONATION_CONFIG.SEVA_TYPES.GENERAL;
};
