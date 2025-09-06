"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import useUTM from "../utils/useUTM";

import temple from "../../public/images/greek-temple.png";
import life from "../../public/images/life_cycle.png";
import CcardsOurInitiative from "../components/CcardsOurInitiative";

import img from "../../public/images/our-init.png";
import mahadanam from "../../public/images/poster.png";
import m from "../../public/images/core-values.png";

import mahada from "../../public/images/maha_da_mob.png";
import Heart from "../../public/images/Heart.png";

//import { GiMeditation } from "react-icons/gi";
// import AlternatingCardsLayout from "../components/AlternatingCards";

// const services = [
//   {
//     title: " Moral Values & Ethics",
//     description:
//       "Moral values and ethics guide human behavior, defining what is right, fair, and just for harmonious, respectful, and responsible living.",
//     image: "/images/moral.jpg",
//     highlight: false,
//   },
//   {
//     title: "Incredible Culture & Heritage of Bharat",
//     description:
//       "The incredible culture and heritage of Bharat reflect its rich traditions, diverse art, timeless wisdom, and unity in cultural diversity.",
//     image: "/images/bharat.jpeg",
//     highlight: true,
//   },
//   {
//     title: " Life skills for contemporary world",
//     description:
//       "Life skills for the contemporary world empower individuals to adapt, communicate, solve problems, and thrive in an ever-changing global environment.",
//     image: "/images/life_skills.jpg",
//     highlight: false,
//   },
// ];

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const { appendUTMToUrl } = useUTM();

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
    <div className="">
      {isMobile ? (
        <div className="bg-white">
          {/* Hero Section */}
          <div className="px-4 py-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Always and Forever
            </h2>
            <div className="relative rounded-2xl overflow-hidden  mb-6">
              <Image
                src={img}
                alt="AIKYA VIDYA"
                width={600}
                height={340}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Description Text */}
            <p className="text-gray-600 leading-relaxed text-center mb-6">
              AIKYA VIDYA empowers underprivileged rural children with free
              education, food, and values. We aim to anchor their lives, helping
              them find purpose and view education as a vital foundation for
              navigating life responsibly.
            </p>

            {/* Initiative Section */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-orange-500">An Initiative of </span>
                <span className="text-blue-900">Hare Krishna Movement</span>
              </h3>
              <p className="text-gray-700  leading-relaxed">
                At Harekrishnavidya, we believe that change begins with
                understanding the needs of the community. By addressing the root
                causes of challenges like hunger, education gaps, and healthcare
                disparities, we are creating sustainable and lasting impact.
              </p>
            </div>
          </div>

          {/* Curriculum Section */}
          <CcardsOurInitiative />

          <div className="relative mt-4 px-2">
            <div
              className="h-48 sm:h-74 md:h-76 bg-cover bg-center rounded-xl mx-2 mb-4 relative overflow-hidden shadow-lg"
              style={{ backgroundImage: `url(${mahada.src})` }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
          </div>
          {/* Education Categories - Mobile Layout */}

          {/* Background Image Section - Mobile */}

          {/* Call to Action Section - Mobile */}
          <div className=" px-4 py-8 m-5 flex flex-col justify-center items-center  text-center font-bold">
            <p className="text-gray-800 text-md leading-relaxed mb-6 ">
              We are providing <br />{" "}
              <span className="text-orange-400">
                Free Food, Education and Values{" "}
              </span>{" "}
              <br /> for life based on{" "}
              <span className="font-semibold">Bhagavad-Gita</span> to
              <br /> underprivileged in Rural Areas of India
            </p>

            {/* Mobile Donate Button */}
            <div className="relative flex justify-center mt-1 items-center">
              {/* Left Arrow - Mobile */}

              {/* Donate Button */}
              <Link href={appendUTMToUrl("/donation")}>
                <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white cursor-pointer font-semibold px-4 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                  <Image
                    src={Heart}
                    alt="Donate Icon"
                    width={20}
                    height={20}
                    className="w-6 h-6"
                  />
                  Donate Now
                </button>
              </Link>
              {/* Right Arrow - Mobile */}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <section className="max-w-7xl mx-auto py-1 px-1 grid md:grid-cols-2 gap-10 items-center">
            {/* Video Thumbnail */}
            <div className="relative rounded-2xl overflow-hidden ">
              <Image
                src={img} // replace with actual image path
                alt="AIKYA VIDYA"
                width={800}
                height={380}
                className="w-full h-full object-cover"
              />
              {/* Play Button */}
              {/* <button className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-[#F47514] w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:scale-105 transition">
          <Play className="text-white" />
        </button> */}
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 ">
                Always and Forever
              </h2>
              <p className="text-gray-600 leading-relaxed">
                AIKYA VIDYA empowers underprivileged rural children with free
                education, food, and values. We aim to anchor their lives,
                helping them find purpose and view education as a vital
                foundation for navigating life responsibly.
              </p>
            </div>

            {/* Bottom Section - Initiative */}
            <div className="md:col-span-2 text-center mt-2">
              <h3 className="text-2xl md:text-5xl font-semibold">
                <span className="text-orange-500">An Initiative of </span>
                <span className="text-blue-900">Hare Krishna Movement</span>
              </h3>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                At Harekrishnavidya, we believe that change begins with
                understanding the needs of the community. By addressing the root
                causes of challenges like hunger, education gaps, and healthcare
                disparities, we are creating sustainable and lasting impact.
              </p>
            </div>
          </section>

          {/* ---------------------------------image----------------- */}
          <section className="bg-white py-14 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
              {/* Heading and description */}
              <div className="flex flex-col lg:flex-row lg:items-start   lg:gap-38  mb-12">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-blue-900">
                    Curriculum <br />
                  </h2>
                </div>
                <p className="text-gray-500 mt-4 lg:mt-0 max-w-3xl">
                  The curriculum of <strong>AIKYA VIDYA</strong> is a synthesis
                  of academic and value-based learning. The post-school
                  education centres of <strong>AIKYA VIDYA</strong> cater to
                  students of Grades 1 to 10. The sessions are systematically
                  organized every evening.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className=" rounded-lg shadow-sm bg-blue-50 border border-orange-200 p-6  transition hover:scale-105 hover:shadow-lg">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                    <Image src={m} width={100} height={100} alt="My image" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Moral Values & Ethics
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Moral values and ethics guide human behavior, defining what
                    is right, fair, and just for harmonious, respectful, and
                    responsible living.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-blue-50 rounded-lg shadow-sm border border-orange-200 p-6  transition hover:scale-105 hover:shadow-lg">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                    <Image
                      src={temple}
                      width={100}
                      height={100}
                      alt="My image"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Incredible Culture & Heritage of Bharat
                  </h3>
                  <p className="text-gray-500 text-sm">
                    The incredible culture and heritage of Bharat reflect its
                    rich traditions, diverse art, timeless wisdom, and unity in
                    cultural diversity.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-blue-50 rounded-lg shadow-sm border border-orange-200 p-6  transition hover:scale-105 hover:shadow-lg">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                    <Image src={life} width={100} height={100} alt="My image" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Life skills for contemporary world
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Life skills for the contemporary world empower individuals
                    to adapt, communicate, solve problems, and thrive in an
                    ever-changing global environment..
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------box------------------------- */}
          <CcardsOurInitiative />

          {/* ---------------------------maha------------ */}
          <section
            className="hidden   lg:block relative bg-cover text-white w-full h-[693px]    rounded-xl overflow-hidden bg-black  "
            style={{ backgroundImage: `url(${mahadanam.src})` }}
          ></section>
          <div className="flex justify-center items-center  bg-gray-50 py-10 mb-16">
            <div className="text-center ">
              {/* Main text */}
              <div className="mb-5">
                <p className="text-gray-800 text-lg leading-relaxed">
                  We are providing Free Food, Education and Values for life
                  based on <span className="font-semibold">Bhagavad-Gita</span>{" "}
                  to underprivileged
                  <br />
                  in Rural Areas of India.
                </p>
              </div>
              {/* Arrows and Donate Button Container */}
              <div className="relative flex items-center justify-center ">
                {/* Left Arrow as Image */}

                {/* Button */}

                <Link href={appendUTMToUrl("/donation")}>
                  <button className="flex items-center gap-2 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 mt-2 rounded-lg shadow-md z-10 transition-transform transform hover:scale-105">
                    <Image
                      src={Heart}
                      alt="Donate Icon"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    Donate Now
                  </button>
                </Link>

                {/* Right Arrow */}
              </div>
            </div>
            {/* ----  */}
          </div>
        </div>
      )}
    </div>
  );
}
