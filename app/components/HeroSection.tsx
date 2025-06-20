'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const donations = [
  {
    name: "Rohit",
    city: "Mumbai",
    amount: "₹1,000",
    children: 40,
    image: "/images/om.png",
  },
  {
    name: "Priya",
    city: "Delhi",
    amount: "₹3,500",
    children: 70,
    image: "/images/om.png",
  },
  {
    name: "yogesh",
    city: "Mumbai",
    amount: "₹1,000",
    children: 40,
    image: "/images/om.png",
  },
  {
    name: "Priya",
    city: "Delhi",
    amount: "₹2,500",
    children: 100,
    image: "/images/om.png",
  },
  {
    name: "Bhavik",
    city: "Mumbai",
    amount: "₹1,000",
    children: 40,
    image: "/images/om.png",
  },
  {
    name: "yogesh",
    city: "Delhi",
    amount: "₹2,500",
    children: 100,
    image: "/images/om.png",
  },
   {
    name: "Dimple",
    city: "Delhi",
    amount: "₹2,500",
    children: 100,
    image: "/images/om.png",
  },
   {
    name: "krutika",
    city: "Delhi",
    amount: "₹2,070",
    children: 100,
    image: "/images/om.png",
  },
  // Add more donation objects as needed
];


export default function HeroSection() {
 const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % donations.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     
      {/* Hero Section */}
  <section
  className="relative bg-cover bg-center text-white w-full h-[90vh] md:h-[884px] max-w-6xl mx-auto rounded-xl overflow-hidden"
  style={{ backgroundImage: "url('/images/img1.png')" }}
>
  {/* Live Update */}
 {donations.map((donation) => (
  <motion.div
        key={current}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
        className="absolute top-8 right-6 md:right-16 bg-white text-black px-4 py-2 rounded-full text-sm shadow flex items-center mb-2"
      >
        <span
          className="mr-2 w-6 h-6 bg-cover bg-center rounded-full"
          style={{ backgroundImage: `url('${donation.image}')` }}
        ></span>
    <strong>{donation.name}</strong>&nbsp;from {donation.city} just donated&nbsp;
        <strong>{donation.amount}</strong>&nbsp;to feed&nbsp;
        <strong>{donation.children} children</strong>.
      </motion.div>
))}

  {/* Karma Insights Box */}
  <div className="absolute bottom-10 left-6 md:left-16 text-black p-6 shadow-xl w-[90%] md:w-[400px] flex flex-col gap-4 rounded-[40px] bg-[rgba(237,242,247,0.80)] backdrop-blur-md">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#F9F9F9] rounded-full shadow-md text-black font-semibold text-lg mb-6 md:mb-0">
        <Image
          src="/images/img9.png"
          alt="Star Icon"
          width={20}
          height={20}
          className="inline-block"
        />
        Karma Insights
      </div>
      <span className="text-[#F9F9F9] font-medium text-md ml-auto hidden md:block">Click here</span>
    </div>

    <div className="flex items-center gap-10">
      <div className="text-center">
        <p className="text-[32px] font-bold leading-[120%] text-[#2C2C2C] m-0">800K</p>
        <p className="text-[16px] font-medium leading-[120%] text-[#2C2C2C] m-0">
          Meals<br />Served
        </p>
      </div>
      <div className="text-center">
        <p className="text-[32px] font-bold leading-[120%] text-[#2C2C2C] m-0">50K</p>
        <p className="text-[16px] font-medium leading-[120%] text-[#2C2C2C] m-0">
          Children&apos;s<br />Educated
        </p>
      </div>
    </div>

    <div className="flex items-center mt-2">
      <div className="flex -space-x-3">
        {["/images/k3.png", "/images/k1.png", "/images/k4.png", "/images/k5.png", "/images/k2.png"].map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`donor-${idx}`}
            width={32}
            height={32}
            className="rounded-full border-2 border-white"
          />
        ))}
      </div>
      <span className="ml-4 text-gray-700 font-semibold italic text-sm">
        300+ Donors around the world
      </span>
    </div>
  </div>

  {/* CTA Box */}
  <div className="absolute bottom-10 right-6 md:right-16 text-white shadow-xl flex w-[515px] px-[35px] py-[26px] pb-[30px] justify-center items-center aspect-[515/249] rounded-[40px] border border-black bg-black/10 backdrop-blur-md">
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-2">Nourish a Life. Uplift a Soul.</h3>
      <p className="text-sm text-white/80 mb-4">
        Your support delivers food, education, and<br />
        hope to those who need it most.
      </p>
      <div className="flex space-x-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition">
          Donate Now
        </button>
        <button className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-full transition">
          About Us
        </button>
      </div>
    </div>
  </div>
</section>

{/* Section Below Hero */}
<section className="flex flex-col md:flex-row items-center md:items-start w-full max-w-6xl mx-auto pt-4 pb-4">
  <div>
    <h2 className="mb-2 text-[40px] italic font-extrabold leading-[120%] font-['Urbanist'] text-[#2C2C2C] drop-shadow-md">
      Give Nourishment, <span className="text-[#FFA850]">Give Knowledge</span>, Give Hope
    </h2>
    <p className="text-[28px] italic font-bold leading-[160%] text-[#505051] font-['Urbanist'] mt-2 drop-shadow">
      <span className="text-[#232323] font-extrabold">Decide the path</span> of your kindness — each one leads to hope and transformation
    </p>
  </div>
</section>


    </>
    
  );
}

