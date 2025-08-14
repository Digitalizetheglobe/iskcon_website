"use client";
// import { motion } from "framer-motion";
import Link from "next/link";

import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import React from "react";
//import isk2 from "../public/images/isk2c.png";
//import image150 from "../public/images/image-150.png";
//import image160 from "../public/images/image-160.png";
//import image170 from "../public/images/image-170.png";
//import ik from "../public/images/ik.png";
import edu1 from "../public/galleryection/edu1.jpg";
import fest1 from "../public/galleryection/fest1.jpg";
import value from "../public/galleryection/val1.jpg";
import yoga1 from "../public/galleryection/yoga.jpg";
import edu2 from "../public/galleryection/edu2.jpg";
import fest2 from "../public/galleryection/fest2.jpg";
import cul1 from "../public/galleryection/cul1.jpg";
import edu3 from "../public/galleryection/edu3.jpg";

//import MobileTestimonial from "../app/components/MobileTestimonial";

import CardCarousel from "./components/CardCarousel";
import CausesSection from "./components/CauseSection";

const cardData = [
  {
    id: 1,
    name: "Suresh Reddy,",

    location: "Hyderabad",

    text: "I am very happy to support this programme. It gives food, education, and good values to poor children. I feel proud that my small help is making a big change in their lives.",
  },
  {
    id: 2,
    name: "Anita Sharma",

    location: " Mumbai",

    text: "This is a very good cause. The children are learning not only school subjects but also how to be good human beings. I thank the team for giving me a chance to be part of this service.",
  },
  {
    id: 3,
    name: "Rajesh Iyer",

    location: "Bangalore",
    text: "I have seen the work of this programme closely. The kids are well fed, study daily, and learn about moral values. It gives me peace and joy to donate for such a beautiful mission.",
  },
  {
    id: 4,
    name: "Lakshmi Narayanan",

    location: " Coimbatore",
    text: "I donated to this programme because it takes care of children’s food, studies, and values. I feel very happy to see them growing in the right path. This is real service to society.",
  },
  {
    id: 4,
    name: "Lakshmi Narayanan",

    location: " Coimbatore",
    text: "I donated to this programme because it takes care of children’s food, studies, and values. I feel very happy to see them growing in the right path. This is real service to society.",
  },
  {
    id: 4,
    name: "Lakshmi Narayanan",

    location: " Coimbatore",
    text: "I donated to this programme because it takes care of children’s food, studies, and values. I feel very happy to see them growing in the right path. This is real service to society.",
  },
];

// Image gallery data removed as it's not being used in the component

const HomePage = () => {
  // const [zoomed, setZoomed] = useState<number | null>(null); // This state is used for the image zoom functionality

  const galleryImages = [
    { src: fest1, alt: "Gallery 1" },
    { src: edu1, alt: "Gallery 3" },
    { src: fest2, alt: "Gallery 2" },
    { src: edu3, alt: "Gallery 3" },
    { src: value, alt: "Gallery 3" },
    { src: yoga1, alt: "Gallery 3" },
    { src: edu2, alt: "Gallery 3" },
    { src: cul1, alt: "Gallery 3" },
  ];

  return (
    <main className="bg-white max-w-7xl mx-auto text-gray-800">
      <HeroSection />

      <section className="py-1 px-4 md:px-10 lg:px-10">
        {/* ---------------------------denation form-------------------  */}
        <section className="max-w-7xl mx-auto">
          <div className=" bg-blue-50 rounded-lg shadow-sm p-2 lg:p-16 relative overflow-hidden">
            {/* Decorative small star / scribble at top center */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:items-center item-start  px-4 sm:px-6 md:px-8">
              {/* Left content */}
              <div className="lg:pr-10 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#07133a] leading-tight mb-4 sm:mb-6">
                  Donate for cause
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm w-[300px] sm:text-base">
                  Support our mission to provide food, education, and care to
                  those in need. Your contribution brings hope and changes lives
                </p>

                <Link href="/donation">
                  <button
                    aria-label="View More"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-white font-medium shadow-md bg-[#1C398E] hover:bg-[#fb923c] hover:scale-[1.01] transition-transform cursor-pointer"
                  >
                    Donate now
                  </button>
                </Link>
              </div>

              {/* Right testimonial stack */}
              <CausesSection className="my-4 sm:my-1 px-2 sm:px-4" />
            </div>
          </div>
        </section>
        {/* ---------------------------phn -------------------  */}
        <section
          style={{
            display: "flex",
            width: "1100px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            margin: "0 auto",
          }}
        >
          {/* <Image
            src={pic2}
            alt="Donation Journey Layout"
            width={1337}
            height={768}
            style={{ borderRadius: "40px", width: "100%", height: "auto" }}
          /> */}
        </section>
        {/* ------------------------impact------------------ */}

        <section className="py-6 px-4 md:px-10 lg:px-20">
          <div className=" flex items-center justify-center bg-white py-6">
            <div className="flex flex-col items-center gap-4 w-[523px] text-center text-[--text-dark-charcoal] font-['Urbanist']">
              <p className="bg-[#F7F7F8] rounded-full px-2 py-1  text-2xl lg:text-[36px] font-semibold border-none ">
                ✦ Testimonials
              </p>
              <h1 className="text-2xl lg:text-[40px] font-extrabold leading-[120%]">
                Your <span className="text-[#FF9C5A] italic">Impact</span> in
                Their Words
              </h1>
              <p className="text-[20px] text-[#4F4F4F] leading-[1.5]">
                Real voices. Real change. Hear from those whose lives have{" "}
                <br />
                been transformed by your kindness.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- */}
        {/* <div className="block xl:hidden">
          <MobileTestimonial />
        </div> */}

        {/* {desktop testimonials} */}
        <CardCarousel cardData={cardData} />

        {/* -------------------gallery------------------------ */}
        <section className="mt-5 px-4 md:px-10 lg:px-20">
          <div className=" flex items-center justify-center bg-white mt-2">
            <div className="flex flex-col items-center gap-4 w-[523px] text-center text-[--text-dark-charcoal] font-['Urbanist']">
              <h1 className=" text-2xl lg:text-[40px] font-extrabold leading-[120%]">
                A glimpse into the lives you&#39;ve <br />
                touched with your{" "}
                <span className="text-[#FF9C5A] italic">kindness</span>
              </h1>
            </div>
          </div>
        </section>
        <section className="px-4 py-6 bg-white flex justify-center">
          <div className="max-w-6xl w-full text-center">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-md "
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="  transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* 🔁 Inverted overlay logic: starts dark, fades on hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 bg-opacity-60 group-hover:bg-opacity-0 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <div className="mt-16">
          
        </div> */}
      </section>
    </main>
  );
};

export default HomePage;
