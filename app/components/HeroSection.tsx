"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

// const donations = [
//   {
//     name: "Rohit",
//     city: "Mumbai",
//     amount: "₹1,000",
//     children: 40,
//     image: "/images/om.png",
//   },
//   {
//     name: "Priya",
//     city: "Delhi",
//     amount: "₹3,500",
//     children: 70,
//     image: "/images/om.png",
//   },
//   {
//     name: "yogesh",
//     city: "Mumbai",
//     amount: "₹1,000",
//     children: 40,
//     image: "/images/om.png",
//   },
//   {
//     name: "Priya",
//     city: "Delhi",
//     amount: "₹2,500",
//     children: 100,
//     image: "/images/om.png",
//   },
//   {
//     name: "Bhavik",
//     city: "Mumbai",
//     amount: "₹1,000",
//     children: 40,
//     image: "/images/om.png",
//   },
//   {
//     name: "yogesh",
//     city: "Delhi",
//     amount: "₹2,500",
//     children: 100,
//     image: "/images/om.png",
//   },
//   {
//     name: "Dimple",
//     city: "Delhi",
//     amount: "₹2,500",
//     children: 100,
//     image: "/images/om.png",
//   },
//   {
//     name: "krutika",
//     city: "Delhi",
//     amount: "₹2,070",
//     children: 100,
//     image: "/images/om.png",
//   },
//   // Add more donation objects as needed
// ];

export default function HeroSection() {
  // Removed unused 'current' state
  const [isMobile, setIsMobile] = useState(false);

  // Removed unused interval effect for 'current'

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // adjust breakpoint if needed
    };

    handleResize(); // initial check

    window.addEventListener("resize", handleResize); // listener for resize

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return (
    <>
      {/* Hero Section */}
      {isMobile ? (
        <div className="flex flex-col gap-2 ">
          <div
            className=" bg-cover bg-center text-white    rounded-xl overflow-hidden h-[60vh] "
            style={{ backgroundImage: "url('/images/homeImg.png')" }}
          ></div>
          {/* Container for cards */}
          <div className=" mb:bottom-10 left-0 right-0 flex flex-col-reverse  px-4  gap-4">
            {/* Karma Insights Box */}
            <div className="text-black p-4 md:p-6 shadow-xl w-full md:w-[400px] lg:w-[420px] flex flex-col gap-4 border border-orange-500 rounded-3xl bg-[rgba(237,242,247,0.80)] backdrop-blur-md">
              <div className="flex items-center justify-between flex-wrap  gap-2">
                <div className="flex items-center  gap-2 px-3 py-2 bg-[#F9F9F9] rounded-full shadow-md  text-black font-semibold text-base ">
                  <Image
                    src="/images/img9.png"
                    alt="Star Icon"
                    width={20}
                    height={20}
                    className="inline-block"
                  />
                  Welfare Insights
                </div>
                <span className="text-[#2C2C2C] font-medium text-sm md:text-md ml-auto hidden md:block">
                  Click here
                </span>
              </div>

              <div className="flex items-center justify-between gap-6 md:gap-10">
                <div className="text-center">
                  <p className="text-2xl md:text-[32px] font-bold leading-[120%] text-[#2C2C2C] m-0">
                    800K
                  </p>
                  <p className="text-sm md:text-[16px] font-medium leading-[120%] text-[#2C2C2C] m-0">
                    Meals <br /> Served
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-[32px] font-bold leading-[120%] text-[#2C2C2C] m-0">
                    50K
                  </p>
                  <p className="text-sm md:text-[16px] font-medium leading-[120%] text-[#2C2C2C] m-0">
                    Children&#39;s <br /> Educated
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-2 flex-wrap gap-2">
                <div className="flex -space-x-3">
                  {[
                    "/images/k3.png",
                    "/images/k1.png",
                    "/images/k4.png",
                    "/images/k5.png",
                    "/images/k2.png",
                  ].map((src, idx) => (
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
                <span className="ml-2 text-gray-700 font-semibold italic text-xs md:text-sm">
                  5000+ Donors around the world
                </span>
              </div>
            </div>

            {/* CTA Box */}
            <div className="text-white shadow-xl flex w-full md:w-[400px] lg:w-[515px] px-4 md:px-[35px] py-4 md:py-[26px] justify-center items-center rounded-3xl border border-orange-600 bg-gray-400 backdrop-blur-md">
              <div className="w-full text-center md:text-left">
                <h3 className="text-lg  font-semibold mb-2">
                  Nourish a Life. Uplift a Soul.
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Your support delivers food, education, and
                  <br className="hidden md:block" />
                  hope to those who need it most.
                </p>
                <div className="flex justify-evenly    gap-2 ">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition">
                    Donate Now
                  </button>
                  <button className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-full transition">
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section
          className="relative bg-cover bg-top text-white w-full max-w-6xl mx-auto rounded-xl overflow-hidden h-[70vh] md:h-[80vh] lg:h-[120vh]"
          style={{ backgroundImage: "url('/images/img1.png')" }}
        >
          {/* Container for cards */}
          <div className="absolute bottom-4 md:bottom-10 left-0 right-0 flex flex-col md:flex-row md:justify-between px-4 md:px-10 lg:px-16 gap-4">
            {/* Karma Insights Box */}
            <div className="text-black p-4 md:p-6 shadow-xl w-full md:w-[400px] lg:w-[420px] flex flex-col gap-4 rounded-3xl bg-[rgba(237,242,247,0.80)] backdrop-blur-md">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-[#F9F9F9] rounded-full shadow-md text-black font-semibold text-base md:text-lg">
                  <Image
                    src="/images/img9.png"
                    alt="Star Icon"
                    width={20}
                    height={20}
                    className="inline-block"
                  />
                  Welfare Insights
                </div>
                <span className="text-[#2C2C2C] font-medium text-sm md:text-md ml-auto hidden md:block">
                  Click here
                </span>
              </div>

              <div className="flex items-center justify-between gap-6 md:gap-10">
                <div className="text-center">
                  <p className="text-2xl md:text-[32px] font-bold leading-[120%] text-[#2C2C2C] m-0">
                    800K
                  </p>
                  <p className="text-sm md:text-[16px] font-medium leading-[120%] text-[#2C2C2C] m-0">
                    Meals <br /> Served
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-[32px] font-bold leading-[120%] text-[#2C2C2C] m-0">
                    50K
                  </p>
                  <p className="text-sm md:text-[16px] font-medium leading-[120%] text-[#2C2C2C] m-0">
                    Children&#39;s <br /> Educated
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-2 flex-wrap gap-2">
                <div className="flex -space-x-3">
                  {[
                    "/images/k3.png",
                    "/images/k1.png",
                    "/images/k4.png",
                    "/images/k5.png",
                    "/images/k2.png",
                  ].map((src, idx) => (
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
                <span className="ml-2 text-gray-700 font-semibold italic text-xs md:text-sm">
                  5000+ Donors around the world
                </span>
              </div>
            </div>

            {/* CTA Box */}
            <div className="text-white shadow-xl flex w-full md:w-[400px] lg:w-[515px] px-4 md:px-[35px] py-4 md:py-[26px] justify-center items-center rounded-3xl border border-black bg-black/10 backdrop-blur-md">
              <div className="w-full text-center md:text-left">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Nourish a Life. Uplift a Soul.
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Your support delivers food, education, and
                  <br className="hidden md:block" />
                  hope to those who need it most.
                </p>
                <div className="flex flex-col md:flex-row md:space-x-4 gap-2 md:gap-0">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition">
                    Donate Now
                  </button>
                  <button className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-full transition">
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section Below Hero */}
      <section className="flex flex-col   items-center md:items-start w-full lg:mx-24 p-4">
        <div>
          <h2 className="mb-1  text-[42px] lg:text-[40px] italic font-extrabold leading-[120%] font-['Urbanist'] text-[#2C2C2C] drop-shadow-md">
            Give Nourishment,{" "}
            <span className="text-[#FFA850]">Give Knowledge</span>, Give Hope
          </h2>
          <p className="text-[18px] italic font-bold leading-[160%] text-gray-600 font-['Urbanist'] mt-2 drop-shadow">
            <span className="text-[#232323] font-extrabold">
              Decide the path
            </span>{" "}
            of your kindness — each one leads to hope and transformation
          </p>
        </div>
      </section>
    </>
  );
}
