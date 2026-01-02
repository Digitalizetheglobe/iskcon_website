// "use client";

// import Image from "next/image";
// import { Heart } from "lucide-react";
// import { useState } from "react";
// import { ArrowLeft, Shield, CheckCircle } from "lucide-react";

// export default function nutritiousMealKit() {
//     const [selectedAmount, setSelectedAmount] = useState<string | null>("500");
//     const [isCustom, setIsCustom] = useState(false);
//     const [customAmount, setCustomAmount] = useState("");
//     const [phone, setPhone] = useState("");
//     const [error, setError] = useState(false);

//     const amounts = ["35,000", "70,000", "175,000"];

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
//             <section className=" mx-auto ">
//                 <div className="relative overflow-hidden shadow-xl py-20">

//                     {/* Background Image */}
//                     <Image
//                         src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                         // src="https://id-preview--5e580ca9-18ce-4097-9a35-a4ab6127c02a.lovable.app/donate?__lovable_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM04wQUJyR0RNUmZoR21CNXBmM25mVzVvbGhaMiIsInByb2plY3RfaWQiOiI1ZTU4MGNhOS0xOGNlLTQwOTctOWEzNS1hNGFiNjEyN2MwMmEiLCJub25jZSI6IjRhMDBmOWNmYWRlYTUyNTE3M2ZiZThjN2U3NWRkMTc2IiwiaXNzIjoibG92YWJsZS1hcGkiLCJzdWIiOiI1ZTU4MGNhOS0xOGNlLTQwOTctOWEzNS1hNGFiNjEyN2MwMmEiLCJhdWQiOlsibG92YWJsZS1hcHAiXSwiZXhwIjoxNzY1OTUzMTY0LCJuYmYiOjE3NjUzNDgzNjQsImlhdCI6MTc2NTM0ODM2NH0.dKYXr_pPoftlBeufEVH0sD2ZP3swZAg7xvx8tOidoW8"
//                         alt="General Support"
//                         fill
//                         className="object-cover"
//                     />

//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/50 to-accent/60"></div>
//                     {/* Content */}
//                     <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">

//                         <button className="flex items-center gap-2 px-10 py-4 rounded-full text-base bg-white text-primary font-extrabold backdrop-blur-md border border-white/40">
//                             <Heart className="w-5 h-5 text-primary fill-primary" />
//                             MAKE AN IMPACT
//                         </button>

//                         <h1 className="text-2xl sm:text-2xl md:text-7xl font-extrabold mt-6 text-white">
//                             Aikya Vidya <br /> Center Kit
//                         </h1>

//                         <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl text-white">
//                             Establish an Aikya Vidya learning center serving 50+ children
//                         </p>

//                         {/* Animation Line */}
//                         <div
//                             className="flex items-center justify-center gap-3 sm:gap-4 mt-6 animate-fade-in"
//                             style={{ animationDelay: "300ms" }}
//                         >
//                             <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent via-white to-white rounded-full"></div>
//                             <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
//                             <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white via-white to-transparent rounded-full"></div>
//                         </div>

//                         {/* Buttons */}
//                         <div className="flex gap-10 mt-6 flex-wrap justify-center font-bold">
//                             <button className="px-6 py-3 bg-white/20 rounded-xl text-sm border border-white/40">
//                                 ₹35000 per kit
//                             </button>
//                             <button className="px-6 py-3 bg-white/20 rounded-xl text-sm border border-white/40">
//                                 50+ children
//                             </button>
//                             <button className="px-6 py-3 bg-white/20 rounded-xl text-sm border border-white/40">
//                                 2 hrs daily
//                             </button>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//             {/* ---------------- DETAILS SECTION ---------------- */}
//             <section className="max-w-6xl mx-auto mt-10">
//                 <div className="grid md:grid-cols-2 gap-6 rounded-2xl shadow-lg bg-white p-6 sm:p-8">

//                     {/* LEFT IMAGE CARD */}
//                     <div className="relative rounded-xl overflow-hidden min-h-[300px]">
//                         <Image
//                             src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"

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
//                                 ₹35,000
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
//                             Our Aikya Vidya Center Kit provides everything needed to set up a complete post-school learning center. These centers provide 2 hours daily education, value education, life skills training, and wellness support to underprivileged children from 1st to 10th class.
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
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             className="w-5 h-5 text-white"
//                                         >
//                                             <circle cx="12" cy="12" r="10"></circle>
//                                             <path d="m9 12 2 2 4-4"></path>
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
//             <section className="max-w-6xl mx-auto mt-10 p-8 bg-primary/5  border-2 border-primary/20 rounded-xl">
//                 {/* Container */}
//                 <div className="  text-center py-12">
//                     {/* Section Heading */}
//                     <span className="inline-flex items-center bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
//                         <Heart className="w-5 h-5 text-orange-600 mr-2 fill-current" />
//                         MAKE AN IMPACT
//                     </span>

//                     <h2 className="text-3xl sm:text-4xl font-extrabold mt-4">
//                         How Your Donation Helps
//                     </h2>

//                     <p className="text-[#847062] mt-2">
//                         Every contribution creates lasting change in children's lives
//                     </p>

//                     {/* Impact Grid */}
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-10">
//                         {[
//                             "Creates a learning space for 50+ children",
//                             "Provides 2 hours daily post-school education",
//                             "Includes evening meals and value education",
//                             "Employs 80 Aikya Vidya teachers across village",
//                         ].map((text, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white p-8 rounded-xl shadow-sm border flex gap-4 items-start hover:shadow-md transition-shadow duration-300 font-bold"
//                             >
//                                 <div className="bg-orange-500 text-white w-9 h-9 rounded-md flex items-center justify-center font-bold">
//                                     {index + 1}
//                                 </div>
//                                 <p className="text-gray-700 text-sm">{text}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Real Impact Story Box */}
//                     <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100 flex flex-col sm:flex-row gap-6 mt-16 max-w-6xl mx-auto">
//                         {/* Icon */}
//                         <div className="flex-shrink-0">
//                             <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center text-white text-2xl">
//                                 💝
//                             </div>
//                         </div>

//                         {/* Content */}
//                         <div className="flex-1 text-start">
//                             {/* Label */}
//                             <span className="bg-orange-100 text-primary px-4 py-2 rounded-full text-xs font-bold">
//                                 SUCCESS STORY
//                             </span>

//                             {/* Heading */}
//                             <h3 className="text-xl sm:text-2xl font-black mt-2 text-gray-900">
//                                 Real Impact Story
//                             </h3>

//                             {/* Paragraph with vertical line */}
//                             <div className="flex mt-4 gap-4">
//                                 <div className="w-1 bg-orange-400 rounded "></div>
//                                 <p className="text-[#847062] text-sm sm:text-base italic">
//                                     We've established centers in 108 villages across 2 states, serving 2,500+ students. Each center becomes a beacon of hope, providing education, food, and values to transform young lives.
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
//                     <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border">

//                         {/* Donation Details */}
//                         <h3 className="text-lg font-semibold mb-4">Donation Details</h3>
//                         <p className="text-sm font-medium text-gray-700 mb-2">Select Amount (₹)</p>

//                         {/* Amount Buttons */}
//                         <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4">
//                             {amounts.map((amount) => (
//                                 <button
//                                     key={amount}
//                                     onClick={() => {
//                                         setSelectedAmount(amount);
//                                         setIsCustom(false);
//                                     }}
//                                     className={`border rounded-lg py-3 font-semibold transition ${selectedAmount === amount && !isCustom
//                                         ? "bg-orange-50 border-orange-500 text-orange-600"
//                                         : "hover:bg-orange-50 hover:border-orange-500"
//                                         }`}
//                                 >
//                                     ₹{amount}
//                                 </button>
//                             ))}
//                         </div>

//                         {/* Custom Amount Checkbox */}
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

//                         {/* Custom Amount Input (Visible Only When Selected) */}
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
//                                     className={`p-2 rounded border ${error ? "border-red-500" : "border-gray-300 focus:border-primary"
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

//                             <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold shadow-md hover:bg-orange-600 transition">
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
//                     <div className="flex flex-col gap-6">
//                         <div className="py-8 sm:py-8 px-3 sm:px-6 
//     bg-gradient-to-b from-[#FF7F2A] to-[#F96D2F] 
//     relative overflow-hidden rounded-2xl" style={{ animationDelay: '300ms' }}>
//                             <div className="text-center px-4 sm:px-6 lg:px-8">
//                                 {/* Icon Circle */}
//                                 <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <Heart className="w-8 h-8 text-white fill-white" />
//                                 </div>

//                                 {/* Heading */}
//                                 <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
//                                     Your Impact
//                                 </h3>

//                                 {/* Subtitle */}
//                                 <p className="text-white text-sm sm:text-base">
//                                     Supports our mission to reach 1000 villages
//                                 </p>

//                                 {/* Card */}
//                                 <div className="border-2 border-white/30 rounded-xl mt-6 text-white py-2 px-4 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
//                                     <h1 className="font-extrabold text-xl sm:text-2xl">
//                                         1 Child
//                                     </h1>
//                                     <p className="text-[10px] sm:text-[12px] mt-1">
//                                         Will be Supported
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Trust Indicators */}
//                         <div className="bg-white rounded-3xl border-2 border-border p-6 space-y-4">
//                             <h3 className="font-bold text-foreground text-lg mb-4">Why Donate With Us?</h3>
//                             <div className="flex items-start gap-3">
//                                 <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                                 <div>
//                                     <p className="font-semibold text-sm">100% Secure</p>
//                                     <p className="text-xs text-muted-foreground">Your payment is encrypted and secure</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-3">
//                                 <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                                 <div>
//                                     <p className="font-semibold text-sm">Tax Deductible</p>
//                                     <p className="text-xs text-muted-foreground">Get 80G certificate for tax benefits (Reg: AABTH4550PF20216)</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-3">
//                                 <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                                 <div>
//                                     <p className="font-semibold text-sm">Direct Impact</p>
//                                     <p className="text-xs text-muted-foreground">100% of donation goes to beneficiaries</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Stats */}
//                         <div className="bg-white rounded-3xl border-2 border-border p-6">
//                             <h3 className="font-bold text-foreground mb-4">Our Impact</h3>
//                             <div className="space-y-3">
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-sm text-muted-foreground">Students Empowered</span>
//                                     <span className="text-lg font-bold text-primary">2,500+</span>
//                                 </div>
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-sm text-muted-foreground">Villages Reached</span>
//                                     <span className="text-lg font-bold text-primary">108</span>
//                                 </div>
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-sm text-muted-foreground">Working Hours</span>
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
