// "use client";

// import Image from "next/image";
// import { Heart } from "lucide-react";
// import { useState } from "react";
// import { ArrowLeft, Shield, CheckCircle } from "lucide-react";

// export default function educationSupportKit() {
//     const [selectedAmount, setSelectedAmount] = useState<string | null>("500");
//     const [isCustom, setIsCustom] = useState(false);
//     const [customAmount, setCustomAmount] = useState("");
//     const [phone, setPhone] = useState("");
//     const [error, setError] = useState(false);

//     const amounts = ["790", "1580", "3950"];

//     const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;

//         // Only numbers allowed
//         if (/^\d*$/.test(value)) {
//             setPhone(value);

//             setError(!(value.length === 10 || value.length === 0));
//         }
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         if (phone.length !== 10) {
//             setError(true);
//             return;
//         }

//         setError(false);
//     };
//     return (
//         <main className="bg-[#f8f6f3] min-h-screen pb-20">
//             {/* ---------------- TOP HERO SECTION ---------------- */}
//             <section className="mx-auto">
//                 <div className="relative overflow-hidden shadow-xl py-14 sm:py-20">

//                     {/* Background Image */}
//                     <img
//                         src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                         alt="General Support"
//                         className="absolute inset-0 w-full h-full object-cover"
//                     />

//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/60 to-accent/40"></div>

//                     {/* Content */}
//                     <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">

//                         {/* Top Button */}
//                         <button className="flex items-center gap-2 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base text-primary bg-white font-extrabold backdrop-blur-md border border-white/40">
//                             <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary" />
//                             MAKE AN IMPACT
//                         </button>

//                         {/* Heading */}
//                         <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mt-4 sm:mt-6 text-white">
//                             Education Support Kit
//                         </h1>

//                         {/* Subtitle */}
//                         <p className="mt-3 sm:mt-6 text-base sm:text-xl md:text-2xl max-w-xl sm:max-w-3xl text-white">
//                             Support a child's complete school education for one term
//                         </p>

//                         {/* WHITE ANIMATION LINE */}
//                         <div
//                             className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 animate-fade-in"
//                             style={{ animationDelay: "300ms" }}
//                         >
//                             <div className="h-1 w-10 sm:w-16 bg-gradient-to-r from-transparent via-white to-white rounded-full"></div>
//                             <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white animate-pulse"></div>
//                             <div className="h-1 w-10 sm:w-16 bg-gradient-to-r from-white via-white to-transparent rounded-full"></div>
//                         </div>

//                         {/* Buttons */}
//                         <div className="flex gap-4 sm:gap-6 md:gap-10 mt-6 flex-wrap justify-center font-bold">
//                             <button className="px-4 py-2 sm:px-6 sm:py-3 bg-white/20 rounded-xl text-xs sm:text-sm border border-white/40">₹790</button>
//                             <button className="px-4 py-2 sm:px-6 sm:py-3 bg-white/20 rounded-xl text-xs sm:text-sm border border-white/40">1 Child</button>
//                             <button className="px-4 py-2 sm:px-6 sm:py-3 bg-white/20 rounded-xl text-xs sm:text-sm border border-white/40">Full term</button>
//                         </div>

//                     </div>
//                 </div>
//             </section>

//             {/* ---------------- DETAILS SECTION ---------------- */}
//             <section className="max-w-6xl mx-auto mt-10 ">
//                 <div className="grid md:grid-cols-2 gap-6 rounded-2xl shadow-lg bg-white p-6 sm:p-8">

//                     {/* LEFT IMAGE CARD */}
//                     <div className="relative rounded-xl overflow-hidden min-h-[300px]">
//                         <Image
//                             src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                             width={700}
//                             height={500}
//                             alt="Donation Card"
//                             className="w-full h-full object-cover"
//                         />

//                         <div className="absolute text-start justify-start top-0 left-5 mt-4 bg-white text-primary px-6 sm:px-10 py-3 rounded-xl border border-primary/30 shadow-lg">
//                             <p className="text-xs sm:text-xs font-semibold tracking-wide text-[#847062]">
//                                 DONATION AMOUNT
//                             </p>

//                             <span className="text-lg sm:text-xl font-extrabold block mt-1">
//                                 ₹ 790
//                             </span>
//                         </div>


//                         <div className="absolute bottom-4 left-4 bg-white px-4 py-5 border  rounded-xl shadow-md flex items-center space-x-2">
//                             <span className="text-lg bg-primary p-2 rounded-xl">📚</span>
//                             <div className="flex flex-col text-left">
//                                 <p className="font-black text-xl">General Support</p>
//                                 <p className="text-sm text-[#847062]">
//                                     Support our mission to reach 1000 villages by 2030
//                                 </p>
//                             </div>
//                         </div>

//                     </div>

//                     {/* RIGHT DETAILS */}
//                     <div className="">
//                         <p className="text-primary/100 text-xs font-bold py-3 px-3 w-40 rounded-full bg-primary/20">COMPLETE PACKAGE</p>
//                         <h2 className="text-2xl sm:text-3xl font-extrabold mt-4">
//                             What’s Included
//                         </h2>

//                         <p className="text-[#847062] mt-3 text-[15px] leading-loose">
//                             Our Education Support Kit provides all essential stationery and learning materials, enabling underprivileged children to attend school without worrying about supplies. Part of our post-school education initiative providing 2 hours daily support.
//                         </p>

//                         {/* FEATURES GRID */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 font-bold">
//                             {[
//                                 "3-5 Recycled Notebooks (200 pages each)",
//                                 "2 Blue Pens & 2 Pencils",
//                                 "Eraser & Sharpener",
//                                 "Complete Geometry Box",
//                                 "12-Color Pencil Set",
//                                 "15cm Scale & Pencil Pouch",
//                             ].map((item, idx) => (
//                                 <div
//                                     key={idx}
//                                     className="flex items-start gap-3 p-5 rounded-xl border-2 border-gray-100 
//                  group hover:border-primary transition-colors duration-300"
//                                 >
//                                     {/* Icon (same size for all) */}
//                                     <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-primary to-accent 
//                       rounded-xl flex items-center justify-center shadow-md 
//                       group-hover:scale-110 transition-transform">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="white"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             className="w-5 h-5"
//                                         >
//                                             <circle cx="12" cy="12" r="10" />
//                                             <path d="M8 12l3 3 5-6" />
//                                         </svg>

//                                     </div>

//                                     {/* Text */}
//                                     <p className="text-sm font-medium leading-tight group-hover:text-primary transition-colors">
//                                         {item}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>


//                         <hr className="mt-4 text-[#847062]" />
//                         <p className="text-[14px] font-bold text-[#847062] mt-4">
//                             All items are quality-checked and part of our program since 2021.
//                         </p>
//                     </div>
//                 </div>
//             </section>
//             <section className="max-w-6xl mx-auto mt-10 bg-primary/5 border-2 border-primary/20 rounded-xl px-4 sm:px-6">
//                 {/* Container */}
//                 <div className="text-center py-8 sm:py-12">

//                     {/* Section Heading */}
//                     <span className="inline-flex items-center bg-white text-orange-600 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
//                         <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 mr-2 fill-current" />
//                         MAKE AN IMPACT
//                     </span>

//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-4">
//                         How Your Donation Helps
//                     </h2>

//                     <p className="text-[#847062] mt-2 text-sm sm:text-base">
//                         Every contribution creates lasting change in children's lives
//                     </p>

//                     {/* Impact Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-10">
//                         {[
//                             "Enables homework completion and doubt clarification",
//                             "Prevents dropouts due to lack of basic materials",
//                             "Supports 2 hours daily post-school education",
//                             "Boosts confidence and academic performance",
//                         ].map((text, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white p-5 sm:p-8 rounded-xl shadow-sm border flex gap-3 sm:gap-4 items-start hover:shadow-md transition-shadow duration-300 font-bold"
//                             >
//                                 <div className="bg-orange-500 text-white w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center font-bold text-sm sm:text-base">
//                                     {index + 1}
//                                 </div>
//                                 <p className="text-gray-700 text-sm sm:text-base font-medium">{text}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Real Impact Story Box */}
//                     <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md border border-orange-100 flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-6xl mx-auto">

//                         {/* Icon */}
//                         <div className="flex-shrink-0 mx-auto sm:mx-0">
//                             <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-400 rounded-xl flex items-center justify-center text-white text-2xl">
//                                 💝
//                             </div>
//                         </div>

//                         {/* Content */}
//                         <div className="flex-1 text-start">
//                             {/* Label */}
//                             <span className="bg-orange-100 text-primary px-3 sm:px-4 py-1 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold">
//                                 SUCCESS STORY
//                             </span>

//                             {/* Heading */}
//                             <h3 className="text-lg sm:text-xl md:text-2xl font-black mt-2 text-gray-900">
//                                 Real Impact Story
//                             </h3>

//                             {/* Paragraph with vertical line */}
//                             <div className="flex mt-4 gap-3 sm:gap-4">
//                                 <div className="w-1 bg-orange-400 rounded"></div>
//                                 <p className="text-[#847062] text-sm sm:text-base italic leading-relaxed">
//                                     Through our Aikya Vidya program, we've seen students improve their examination scores by 40%. Your Education Kit ensures children can focus on learning rather than worrying about supplies.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>
//             {/* Donation Form Section */}
//             <section className="max-w-6xl mx-auto mt-10 bg-primary/5 border-2 border-primary/20 rounded-xl px-4 sm:px-6">

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8  py-8 sm:py-12">

//                     {/* Left Form */}
//                     <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-xl shadow-sm border">

//                         {/* Donation Details */}
//                         <h3 className="text-lg font-semibold mb-4">Donation Details</h3>
//                         <p className="text-sm font-medium text-gray-700 mb-2">Select Amount (₹)</p>

//                         {/* Amount Buttons */}
//                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
//                             {amounts.map((amount) => (
//                                 <button
//                                     key={amount}
//                                     onClick={() => {
//                                         setSelectedAmount(amount);
//                                         setIsCustom(false);
//                                     }}
//                                     className={`border rounded-lg py-2 sm:py-3 text-sm sm:text-base font-semibold transition 
//                         ${selectedAmount === amount && !isCustom
//                                             ? "bg-orange-50 border-orange-500 text-orange-600"
//                                             : "hover:bg-orange-50 hover:border-orange-500"
//                                         }`}
//                                 >
//                                     ₹{amount}
//                                 </button>
//                             ))}
//                         </div>

//                         {/* Custom Amount */}
//                         <label
//                             className="flex items-center gap-2 mb-2 cursor-pointer"
//                             onClick={() => {
//                                 setIsCustom(true);
//                                 setSelectedAmount(null);
//                             }}
//                         >
//                             <input
//                                 type="radio"
//                                 name="amount"
//                                 checked={isCustom}
//                                 onChange={() => {
//                                     setIsCustom(true);
//                                     setSelectedAmount(null);
//                                 }}
//                                 className="w-4 h-4"
//                             />
//                             <span className="text-sm text-gray-700">Custom Amount</span>
//                         </label>

//                         {isCustom && (
//                             <div className="mb-6 animate-fadeIn">
//                                 <label className="text-sm text-gray-700 font-medium">Enter Custom Amount</label>
//                                 <input
//                                     type="number"
//                                     placeholder="Enter amount"
//                                     value={customAmount}
//                                     onChange={(e) => setCustomAmount(e.target.value)}
//                                     className="mt-2 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
//                                 />
//                             </div>
//                         )}

//                         {/* Personal Info */}
//                         <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
//                         <form onSubmit={handleSubmit}>
//                             <div className="grid sm:grid-cols-2 gap-4 mb-4">
//                                 <div className="flex flex-col">
//                                     <label className="mb-1 text-sm font-semibold">
//                                         First Name <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="First Name"
//                                         className="p-2 rounded border border-gray-300 focus:border-primary focus:outline-none"
//                                     />
//                                 </div>

//                                 <div className="flex flex-col">
//                                     <label className="mb-1 text-sm font-semibold">
//                                         Last Name <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         placeholder="Last Name"
//                                         className="p-2 rounded border border-gray-300 focus:border-primary focus:outline-none"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="flex flex-col mb-4">
//                                 <label className="mb-1 text-sm font-semibold">
//                                     Email Address <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     placeholder="Email Address"
//                                     className="p-2 rounded border border-gray-300 focus:border-primary focus:outline-none"
//                                 />
//                             </div>

//                             <div className="flex flex-col mb-4">
//                                 <label className="mb-1 text-sm font-semibold">
//                                     Phone Number <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Phone number"
//                                     className={`p-2 rounded border ${error
//                                         ? "border-red-500"
//                                         : "border-gray-300 focus:border-primary"
//                                         } focus:outline-none`}
//                                     value={phone}
//                                     onChange={handlePhoneChange}
//                                     maxLength={10}
//                                 />
//                                 {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
//                             </div>

//                             <div className="flex flex-col mb-6">
//                                 <label className="mb-1 text-sm font-semibold">Message (Optional)</label>
//                                 <textarea
//                                     placeholder="Message (Optional)"
//                                     className="p-2 rounded border border-gray-300 focus:border-primary focus:outline-none min-h-[90px] resize-none"
//                                 ></textarea>
//                             </div>

//                             <button className="w-full bg-orange-500 text-white py-3 sm:py-4 rounded-xl font-semibold shadow-md hover:bg-orange-600 transition text-sm sm:text-base">
//                                 Proceed to Payment: ₹
//                                 {isCustom && customAmount
//                                     ? customAmount
//                                     : selectedAmount
//                                         ? selectedAmount
//                                         : "0"}
//                             </button>
//                         </form>
//                     </div>

//                     {/* Right Impact Card */}
//                     <div className="flex flex-col gap-6 ">

//                         {/* Impact Card */}
//                         <div className="py-8 px-4 sm:px-6 bg-gradient-to-b from-[#FF7F2A] to-[#F96D2F] rounded-2xl text-center">
//                             <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white" />
//                             </div>

//                             <h3 className="text-2xl sm:text-3xl font-bold text-white">Your Impact</h3>
//                             <p className="text-white text-xs sm:text-sm mt-1">
//                                 Supports our mission to reach 1000 villages
//                             </p>

//                             <div className="border-2 border-white/30 rounded-xl mt-6 text-white py-2 px-4 max-w-xs sm:max-w-sm mx-auto">
//                                 <h1 className="font-extrabold text-xl sm:text-2xl">1 Child</h1>
//                                 <p className="text-[10px] sm:text-[12px] mt-1">Will be Supported</p>
//                             </div>
//                         </div>

//                         {/* Trust Indicators */}
//                         <div className="bg-white rounded-3xl border-2 border-border p-5 sm:p-6 space-y-4 shadow-sm">
//                             <h3 className="font-bold text-lg mb-2">Why Donate With Us?</h3>

//                             <div className="flex items-start gap-3">
//                                 <CheckCircle className="w-5 h-5 text-primary mt-1" />
//                                 <div>
//                                     <p className="font-semibold text-sm">100% Secure</p>
//                                     <p className="text-xs text-muted-foreground">Your payment is encrypted and secure</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-3">
//                                 <Shield className="w-5 h-5 text-primary mt-1" />
//                                 <div>
//                                     <p className="font-semibold text-sm">Tax Deductible</p>
//                                     <p className="text-xs text-muted-foreground">Get 80G certificate for tax benefits</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-3">
//                                 <CheckCircle className="w-5 h-5 text-primary mt-1" />
//                                 <div>
//                                     <p className="font-semibold text-sm">Direct Impact</p>
//                                     <p className="text-xs text-muted-foreground">100% of donation goes to beneficiaries</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Stats */}
//                         <div className="bg-white rounded-3xl border-2 border-border p-5 sm:p-6 shadow-sm">
//                             <h3 className="font-bold mb-3">Our Impact</h3>
//                             <div className="space-y-3">
//                                 <div className="flex justify-between">
//                                     <span className="text-xs sm:text-sm text-muted-foreground">Students Empowered</span>
//                                     <span className="text-lg font-bold text-primary">2,500+</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="text-xs sm:text-sm text-muted-foreground">Villages Reached</span>
//                                     <span className="text-lg font-bold text-primary">108</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span className="text-xs sm:text-sm text-muted-foreground">Working Hours</span>
//                                     <span className="text-lg font-bold text-primary">2,28,000+</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }
