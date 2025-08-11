"use client";
import { motion } from "framer-motion";

import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import React from "react";
//import isk2 from "../public/images/isk2c.png";
//import image150 from "../public/images/image-150.png";
import image160 from "../public/images/image-160.png";
//import image170 from "../public/images/image-170.png";
//import ik from "../public/images/ik.png";
import edu02 from "../public/GalleryImages/Education/edu02.jpg";
import fest19 from "../public/GalleryImages/Culture/fest (19).jpg";
import value2 from "../public/GalleryImages/Values/value (2).jpg";
import yoga from "../public/GalleryImages/Yoga & Wellness/yoga.jpg";
import edu03 from "../public/GalleryImages/Education/edu03.jpg";
import fest10 from "../public/GalleryImages/Culture/fest (10).jpg";
import fest20 from "../public/GalleryImages/Culture/fest (20).jpg";
//import foodDonation from "../public/images/foodDonation.png"

//import edu from "../public/images/education.png";

//import MobileTestimonial from "../app/components/MobileTestimonial";

import CardCarousel from "./components/CardCarousel";

// const cardVariants = {
//   hiddenLeft: { opacity: 0, x: -80 },
//   hiddenRight: { opacity: 0, x: 80 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

const causes = [
  {
    title: "Annadaan",
    description:
      " No child should have to study on an empty stomach. Through Annadan, we serve warm, wholesome  meals every day—bringing not just nourishment, but love, care, and the strength to dream. ",
    icon: "/images/foodDonation.png",
  },
  {
    title: "Teaching Moral Values",
    description:
      "In a world full of confusion, we guide young hearts with timeless values. Through simple stories, activities, and teachings from the Bhagavad Gita, we help children grow with character, faith, and urpose.",
    icon: "/images/education.png",
  },
  {
    title: "Vidya Daan",
    description:
      "Education is the light that breaks the darkness of poverty. Through free tuition, we give children the chance to learn, grow, and build a future their parents only dreamed of. ",
    icon: "/images/bookDonation.png",
  },
];
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
    { src: fest20, alt: "Gallery 1", width: 520, height: 320 },
    { src: edu02, alt: "Gallery 3", width: 520, height: 480 },
    { src: fest19, alt: "Gallery 2", width: 250, height: 480 },
    { src: image160, alt: "Gallery 3", width: 520, height: 480 },
    { src: value2, alt: "Gallery 3", width: 520, height: 480 },
    { src: yoga, alt: "Gallery 3", width: 400, height: 400 },
    { src: edu03, alt: "Gallery 3", width: 520, height: 480 },
    { src: fest10, alt: "Gallery 3", width: 400, height: 400 },
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
        <section className="max-w-7xl mx-auto  lg:px-1 mb-10 lg:mb-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {causes.map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: idx * 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  borderRadius: "30px",
                  border: "1px solid #CFCFCF",
                  background:
                    "linear-gradient(135deg, #E1E6E8 100%, #F9FEFF 0%)",
                  height: "257px",
                  maxWidth: "434px",
                  width: "100%",
                }}
                className="p-6 text-left flex flex-col justify-center items-center hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="flex justify-start w-full mb-4">
                  <div className="bg-orange-200 p-4 rounded-full text-2xl">
                    {option.icon.startsWith("/") ? (
                      <Image
                        src={option.icon}
                        alt="icon"
                        width={32}
                        height={32}
                      />
                    ) : (
                      <span>{option.icon}</span>
                    )}
                  </div>
                </div>
                <h3 className="text-3xl lg:text-lg font-semibold mb-2 text-gray-900 text-left w-full">
                  {option.title}
                </h3>
                <p className="text-md lg:text-sm text-gray-600 text-left w-full">
                  {option.description}
                </p>
              </motion.div>
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
        <section className="px-4 py-12 bg-white flex justify-center">
          <div className="max-w-6xl w-full text-center">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-md "
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-105"
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
