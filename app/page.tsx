"use client";

import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import React, { useState } from "react";
import isk2 from "../public/images/isk2c.png";
import image150 from "../public/images/image-150.png";
import image160 from "../public/images/image-160.png";
import image170 from "../public/images/image-170.png";
import ik from "../public/images/ik.png";
import pic1 from "../public/images/pic1.png";

const causes = [
  {
    title: "Annadaan",
    description:
   " No child should have to study on an empty stomach. Through Annadan, we serve warm, wholesome  meals every day—bringing not just nourishment, but love, care, and the strength to dream. ",
    icon: "/icons/donation-icon.svg",
  },
  {
    title: "Teaching Moral Values",
    description:
      "In a world full of confusion, we guide young hearts with timeless values. Through simple stories, activities, and teachings from the Bhagavad Gita, we help children grow with character, faith, and urpose.",
    icon: "/icons/donation-icon.svg",
  },
  {
    title: "Vidya Daan",
    description:"Education is the light that breaks the darkness of poverty. Through free tuition, we give children the chance to learn, grow, and build a future their parents only dreamed of. ",
    icon: "/icons/donation-icon.svg",
  },
];
const cardData = [
  {
    id: 1,
    name: "Suresh Reddy,",

    location: "Hyderabad",

    text: " I am very happy to support this programme. It gives food, education, and good values to poor children. I feel proud that my small help is making a big change in their lives.",
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
];

// Image gallery data removed as it's not being used in the component

const HomePage = () => {
  const [zoomed, setZoomed] = useState<number | null>(null); // This state is used for the image zoom functionality

  const galleryImages = [
    { src: image150, alt: "Gallery 1", width: 520, height: 320 },
    { src: isk2, alt: "Gallery 3", width: 520, height: 480 },
    { src: image160, alt: "Gallery 2", width: 250, height: 480 },
    { src: image170, alt: "Gallery 3", width: 520, height: 480 },
    { src: isk2, alt: "Gallery 3", width: 520, height: 480 },
    { src: ik, alt: "Gallery 3", width: 400, height: 400 },
  ];
  return (
    <main className="bg-white  text-gray-800">
      <HeroSection />

      <section className="py-12 px-4 md:px-10 lg:px-10">
        {/* <h2 className="text-3xl md:text-4xl font-semibold text-center text-orange-600 mb-4">
          Give Nourishment, <span className="text-yellow-500">Give Knowledge</span>, Give Hope
        </h2>
        <p className="text-center text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Decide the path of your kindness — each one leads to hope and transformation
        </p> */}

        {/* ---------------------------denation form-------------------  */}
        <section className="max-w-6xl mx-auto  lg:px-4 mb-10 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {causes.map((option, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: "30px",
                  border: "1px solid #CFCFCF",
                  background:
                    "linear-gradient(135deg, #E1E6E8 100%, #F9FEFF 0%)",
                  boxShadow:
                    "1px 1px 2px 0px rgba(255, 255, 255, 0.30) inset, -1px -1px 2px 0px rgba(209, 213, 215, 0.50) inset, -15px 15px 30px 0px rgba(209, 213, 215, 0.20), 15px -15px 30px 0px rgba(209, 213, 215, 0.20), -15px -15px 30px 0px rgba(255, 255, 255, 0.90), 15px 15px 38px 0px rgba(209, 213, 215, 0.90)",
                  height: "257px",
                  maxWidth: "434px",
                  width: "100%",
                }}
                className="p-6 text-left flex flex-col justify-center items-center hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="flex justify-start w-full mb-4">
                  <div className="bg-orange-200 p-4 rounded-full">
                    <Image
                      src={pic1}
                      alt={option.title}
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <h3 className="text-3xl lg:text-lg font-semibold mb-2 text-gray-900 text-left w-full">
                  {option.title}
                </h3>
                <p className="text-md  lg:text-sm text-gray-600 text-left w-full">
                  {option.description}
                </p>
              </div>
            ))}
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
              <p className="bg-[#F7F7F8] rounded-full px-2 py-1 shadow-[0_4px_24px_rgba(0,0,0,0.15)] text-2xl lg:text-[36px] font-semibold border-none ">
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

        <section className="flex flex-col items-center justify-center lg:flex-row px-4 py-8 bg-white mx-auto lg:px-0 lg:py-0">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 w-full  ">
            {cardData.map((card) => {
              // Generate initials from name
              return (
                <div
                  key={card.id}
                  className="bg-[#FF9C5A] rounded-4xl shadow-xl w-full max-w-[340px] mx-auto h-[260px] sm:h-[400px] lg:h-[320px] flex-shrink-0 p-6 flex flex-col justify-between border border-[#F9D6C1]  transition duration-300  group"
                >
                  <div className="flex flex-col items-start ">
                    <div className="text-white font-inter text-base sm:text-lg lg:text-[18px] font-normal leading-[150%] text-left flex-grow">
                    {`"${card.text}"`}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 mt-6">
                    <div className="flex flex-col min-w-0 flex-1">
                      <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl  truncate">
                        {card.name}
                      </h3>
                      <p className="text-gray-900 font-inter text-xs sm:text-sm opacity-80 truncate flex items-center gap-1">
                        <svg
                          className="w-4 h-4 inline-block mr-1 text-[#A67C52]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                          />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {card.location}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* -------------------gallery------------------------ */}
        <div>
          <section className="py-10 px-4 md:px-10 lg:px-20">
            <div className=" flex items-center justify-center bg-white mt-8">
              <div className="flex flex-col items-center gap-4 w-[523px] text-center text-[--text-dark-charcoal] font-['Urbanist']">
                <h1 className=" text-2xl lg:text-[40px] font-extrabold leading-[120%]">
                  A glipmse into the lives you&#39;ve <br />
                  touched with your{" "}
                  <span className="text-[#FF9C5A] italic">kindness</span>
                </h1>
              </div>
            </div>
          </section>
        </div>
        <section className="flex items-center justify-center  bg-white  max-w-10xl mx-auto">
          <div className="grid grid-cols-6 grid-rows-5 gap-4">
            <div className="col-span-2 row-span-2  ">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                width={galleryImages[0].width}
                height={galleryImages[0].height}
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl cursor-pointer"
                onClick={() => setZoomed(0)}
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-1 row-start-3">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                width={galleryImages[1].width}
                height={galleryImages[1].height}
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl cursor-pointer"
                onClick={() => setZoomed(1)}
              />
            </div>
            <div className="col-span-2 row-span-4 col-start-3 row-start-1">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                width={galleryImages[2].width}
                height={galleryImages[2].height}
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl cursor-pointer"
                onClick={() => setZoomed(2)}
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-5 row-start-1">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                width={galleryImages[3].width}
                height={galleryImages[3].height}
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl cursor-pointer"
                onClick={() => setZoomed(3)}
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-5 row-start-3">
              <Image
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                width={galleryImages[4].width}
                height={galleryImages[4].height}
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl cursor-pointer"
                onClick={() => setZoomed(4)}
              />
            </div>
            <div className="col-span-2 col-start-3 row-start-5 ">
              <Image
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                width={galleryImages[5].width}
                height={galleryImages[5].height}
                className="w-full h-full object-cover hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                onClick={() => setZoomed(5)}
              />
            </div>
          </div>

          {/* Zoomed Overlay */}
          {zoomed !== null && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center transition-all duration-300">
              <button
                className="absolute top-8 right-8 text-white text-4xl bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
                onClick={() => setZoomed(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <Image
                src={galleryImages[zoomed].src}
                alt={galleryImages[zoomed].alt}
                width={galleryImages[zoomed].width}
                height={galleryImages[zoomed].height}
                className="rounded-2xl shadow-2xl object-contain max-h-[90vh] max-w-[90vw] transition-transform duration-300 scale-100"
              />
            </div>
          )}
        </section>

        {/* <div className="mt-16">
          
        </div> */}
      </section>
      {/* <section className="py-4 px-4 md:px-10 lg:px-20">
      </section> */}
      {/* <section className="py-12 px-4 md:px-10 lg:px-20">
      </section> */}
      {/* <Footer /> */}
      {/* <section>
         <AboutUs />
       </section> */}
    </main>
  );
};

export default HomePage;
