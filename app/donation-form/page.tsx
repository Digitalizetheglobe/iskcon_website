"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, User, Mail, Phone, Globe, CreditCard, ChevronRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Script from "next/script";
import { DONATION_CONFIG, getApiUrl } from "../config/donation";
import { formatPhoneNumber, validatePhoneNumber } from "../utils/phoneUtils";
import DonationSuccess from "../components/DonationSuccess";

// --- Types ---
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  citizenType: "indian" | "foreign";
  amount: string;
  sevaName: string;
  sevaType: string;
  description: string;
  wants80G: boolean;
  panNumber: string;
}

// --- Icons / Assets ---
const SevaIcon = ({ type }: { type: string }) => {
  if (type.toLowerCase().includes("food") || type.toLowerCase().includes("anna")) return <div className="text-3xl">🍲</div>;
  if (type.toLowerCase().includes("edu") || type.toLowerCase().includes("vidya")) return <div className="text-3xl">📚</div>;
  return <div className="text-3xl">🙏</div>;
};

// --- Loading Component ---
const FormLoading = () => (
  <div className="min-h-screen bg-[#FBF7F5] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-12 h-12 text-[#F96D2F] animate-spin" />
      <p className="text-gray-500 font-medium">Preparing Seva Form...</p>
    </div>
  </div>
);

const DonationFormContent = () => {
  const searchParams = useSearchParams();
  const initialPurpose = searchParams.get("purpose") || "General Donation";
  const initialAmount = searchParams.get("amount") || "";

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    citizenType: "indian",
    amount: initialAmount,
    sevaName: initialPurpose,
    sevaType: initialPurpose.toLowerCase().includes("annadan") ? "ANNADAN SEVA" : "VIDHYA DANA",
    description: `Donation for ${initialPurpose}`,
    wants80G: false,
    panNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [donationDetails, setDonationDetails] = useState<any>(null);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Handle Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Form Validation
  const validateForm = () => {
    if (!formData.fullName.trim()) return "Please enter your full name";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email";
    if (!formData.phone.trim()) return "Please enter your phone number";
    if (!formData.amount || parseFloat(formData.amount) <= 0) return "Please enter a valid donation amount";
    if (formData.wants80G && !formData.panNumber.trim()) return "PAN Number is required for 80G tax exemption";
    return null;
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Prepare payload exactly as requested by backend
      const payload = {
        sevaName: formData.sevaName,
        sevaType: formData.sevaType,
        sevaAmount: parseFloat(formData.amount),
        donorName: formData.fullName,
        donorEmail: formData.email,
        donorPhone: formatPhoneNumber(formData.phone, formData.citizenType),
        donorType: formData.citizenType === "indian" ? "Indian Citizen" : "Foreign Citizen",
        description: formData.description,
        campaign: formData.sevaName,
        wants80G: formData.wants80G,
        panNumber: formData.wants80G ? formData.panNumber : null,
      };

      console.log("Submitting donation form to:", getApiUrl("/submit-form"));
      
      const response = await fetch(getApiUrl("/submit-form"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit donation form");
      }

      if (data.success && data.order) {
        // Initialize Razorpay
        const options = {
          key: DONATION_CONFIG.RAZORPAY.KEY_ID,
          amount: data.order.amount,
          currency: data.order.currency,
          name: DONATION_CONFIG.ORGANIZATION.NAME,
          description: payload.sevaName,
          order_id: data.order.id,
          handler: (res: any) => verifyPayment(res, data.donation.id),
          prefill: {
            name: payload.donorName,
            email: payload.donorEmail,
            contact: payload.donorPhone,
          },
          theme: { color: DONATION_CONFIG.ORGANIZATION.THEME_COLOR },
          modal: { ondismiss: () => setIsSubmitting(false) },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else {
        throw new Error("Could not initialize payment gateway");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  const verifyPayment = async (paymentResponse: any, donationId: string) => {
    try {
      const response = await fetch(getApiUrl("/verify-payment-form"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          razorpay_order_id: paymentResponse.razorpay_order_id,
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_signature: paymentResponse.razorpay_signature,
          donationId: donationId,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setDonationDetails({
          sevaName: result.donation.sevaName,
          amount: result.donation.amount,
          donorName: result.donation.donorName,
          paymentId: result.donation.paymentId,
          donorEmail: result.donation.donorEmail,
        });
        setShowSuccess(true);
      } else {
        throw new Error(result.message || "Payment verification failed");
      }
    } catch (err: any) {
      console.error(err);
      setError("Payment verification failed. Please contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF7F5] py-12 px-4 selection:bg-[#F96D2F] selection:text-white">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setRazorpayLoaded(true)}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Side: Summary & Aesthetics */}
            <div className="md:w-5/12 bg-gradient-to-br from-[#F96D2F] to-[#FF8C5A] p-8 text-white relative flex flex-col justify-between overflow-hidden">
               {/* Decorative Circles */}
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-8">
                   <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                     <Heart className="w-6 h-6 fill-white" />
                   </div>
                   <h2 className="text-xl font-bold tracking-tight">Divine Offering</h2>
                 </div>

                 <div className="space-y-6">
                   <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                     <p className="text-sm opacity-80 mb-1">Seva Category</p>
                     <div className="flex items-center gap-3">
                       <SevaIcon type={formData.sevaType} />
                       <span className="text-lg font-semibold">{formData.sevaName}</span>
                     </div>
                   </div>

                   <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                     <p className="text-sm opacity-80 mb-1">Contribution Amount</p>
                     <div className="text-3xl font-extrabold">₹ {parseFloat(formData.amount || "0").toLocaleString("en-IN")}</div>
                   </div>
                 </div>
               </div>

               <div className="relative z-10 mt-12 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 italic text-sm leading-relaxed">
                 "That which we give from our heart, becomes spiritualized and nourishes the world."
               </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-7/12 p-8 md:p-12">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-[#1F2937] mb-2">Donor Information</h1>
                <p className="text-gray-500 text-sm">Please provide your details for the donation record and 80G receipt.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 group-focus-within:text-[#F96D2F] transition-colors">
                    <User className="w-4 h-4" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#F96D2F] focus:outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 group-focus-within:text-[#F96D2F] transition-colors">
                      <Mail className="w-4 h-4" /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#F96D2F] focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 group-focus-within:text-[#F96D2F] transition-colors">
                      <Phone className="w-4 h-4" /> Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#F96D2F] focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Citizen Type & Amount */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 group-focus-within:text-[#F96D2F] transition-colors">
                      <Globe className="w-4 h-4" /> Citizenship
                    </label>
                    <select
                      name="citizenType"
                      value={formData.citizenType}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#F96D2F] focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="indian">Indian Citizen</option>
                      <option value="foreign">Foreign Citizen</option>
                    </select>
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 group-focus-within:text-[#F96D2F] transition-colors">
                      <CreditCard className="w-4 h-4" /> Amount (₹)
                    </label>
                    <input
                      type="number"
                      name="amount"
                      required
                      value={formData.amount}
                      onChange={handleInputChange}
                      placeholder="500"
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#F96D2F] focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* 80G Checkbox */}
                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="wants80G"
                      checked={formData.wants80G}
                      onChange={handleInputChange}
                      className="w-5 h-5 rounded border-orange-300 text-[#F96D2F] focus:ring-[#F96D2F]"
                    />
                    <span className="text-sm font-semibold text-orange-900">Request 80G Tax Exemption Receipt</span>
                  </label>
                  
                  <AnimatePresence>
                    {formData.wants80G && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-orange-200">
                          <input
                            type="text"
                            name="panNumber"
                            value={formData.panNumber}
                            onChange={handleInputChange}
                            placeholder="Enter PAN Number (e.g. ABCDE1234F)"
                            className="w-full px-4 py-3 bg-white border border-orange-200 rounded-xl focus:border-[#F96D2F] focus:outline-none uppercase text-sm"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting || !razorpayLoaded}
                  className="w-full py-5 bg-[#F96D2F] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:bg-[#FF8C5A] disabled:bg-gray-400 disabled:shadow-none transition-all"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Confirm & Pay ₹{parseFloat(formData.amount || "0").toLocaleString("en-IN")}
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Messages */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-medium border border-red-100"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    {error}
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center text-gray-400 text-sm flex items-center justify-center gap-4">
          <div className="flex items-center gap-1"><CreditCard className="w-4 h-4" /> Secure Payment</div>
          <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 80G Tax Benefit</div>
          <div className="flex items-center gap-1"><Heart className="w-4 h-4" /> Blessed Offering</div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <DonationSuccess
            donationDetails={donationDetails}
            onClose={() => setShowSuccess(false)}
            emailSent={true}
            emailMessage="Your receipt will be sent shortly."
          />
        </div>
      )}
    </div>
  );
};

const NewDonationFormPage = () => {
  return (
    <Suspense fallback={<FormLoading />}>
      <DonationFormContent />
    </Suspense>
  );
};

export default NewDonationFormPage;
