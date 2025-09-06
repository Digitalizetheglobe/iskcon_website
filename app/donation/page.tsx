"use client";
import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useMediaQuery } from "react-responsive";
import useUTM from "../utils/useUTM";
import mobileImg from "../../public/images/donation.png";
import tabletImg from "../../public/images/donation.png";
import desktopImg from "../../public/images/emoj.png";

import k3 from "../../public/images/k3.png";
import k1 from "../../public/images/k1.png";
import k4 from "../../public/images/k4.png";
import k5 from "../../public/images/k5.png";
import k2 from "../../public/images/k2.png";
import phn from "../../public/images/phn.png";
import upi_qr from "../../public/images/upi_qr 1.png";

import edu1 from "../../public/galleryection/edu1.jpg";
import fest1 from "../../public/galleryection/fest1.jpg";
import value from "../../public/galleryection/val1.jpg";
import yoga1 from "../../public/galleryection/yoga.jpg";
import edu2 from "../../public/galleryection/edu2.jpg";
import fest2 from "../../public/galleryection/fest2.jpg";
import cul1 from "../../public/galleryection/cul1.jpg";
import edu3 from "../../public/galleryection/edu3.jpg";
import Link from "next/link";

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


const donationOptions = [
  { children: 100, amount: 1 },
  { children: 200, amount: 5400 },
  { children: 300, amount: 8100 },
  { children: 500, amount: 13500 },
  { children: 1000, amount: 27000 },
  { children: 1500, amount: 40500 },
  { children: 3000, amount: 81000 },
  { children: 5000, amount: 135000 },
  { children: 10000, amount: 270000 },
];

const sponsorshipOptions = [
  { children: 1, amount: 1 },
  { children: 2, amount: 24000 },
  { children: 4, amount: 48000 },
  { children: 8, amount: 98000 },
  { children: 9, amount: 108000 },
];

const academicYearOptions = [
  { children: 1, amount: 5000 },
  { children: 3, amount: 15000 },
  { children: 5, amount: 25000 },
];

const monthlyOptions = [
  
  { children: 5, amount: 2500 },
  { children: 10, amount: 5000 },
  { children: 25, amount: 12500 },
  { children: 50, amount: 25000 },
  { children: 75, amount: 37500 },
  { children: 100, amount: 50000 },
  { children: 150, amount: 75000 },
  { children: 200, amount: 100000 },
];

const specialOptions = [
  {
    title: "Sponsor Education of 1 Entire Village for 1 Whole Year",
    amount: 150000,
  },
  {
    title: "Sponsor Education of 1 Entire Village for 1 Month",
    amount: 12500,
  },
];

// Helper function to format numbers in Indian style
const formatIndianCurrency = (amount: number) => {
  return amount.toLocaleString("en-IN");
};

function AnnadanCard({
  childrenCount,
  amount,
}: {
  childrenCount: number;
  amount: number;
}) {
  const { appendUTMToUrl } = useUTM();
  
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-orange-500">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-500"></div>
      <div className="p-8 text-center">
        <h3 className="font-bold text-xl mb-3 text-gray-800 leading-tight">
          Serve {childrenCount} Children
        </h3>
        <div className="mb-6">
          <span className="text-3xl font-extrabold text-blue-900">
            ₹ {formatIndianCurrency(amount)}
          </span>
        </div>
        <Link
          href={appendUTMToUrl(`/donate?purpose=${encodeURIComponent(
            `Serve ${childrenCount} Children - Annadan Seva`
          )}&amount=${amount}`)}
        >
          <button className="bg-gradient-to-r from-orange-500 to-orange-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
}

function AnnadanSpecialCard({
  title,
  amount,
}: {
  title: string;
  amount: number;
}) {
  const { appendUTMToUrl } = useUTM();
  
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-orange-500">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-500"></div>
      <div className="p-5 text-center">
        <h3 className="font-bold text-xl mb-3 text-gray-800 leading-tight">
          {title}
        </h3>
        <div className="mb-6">
          <span className="text-3xl font-extrabold text-blue-900">
            ₹ {formatIndianCurrency(amount)}
          </span>
        </div>
        <Link
          href={appendUTMToUrl(`/donate?purpose=${encodeURIComponent(title)}&amount=${amount}`)}
        >
          <button className="bg-gradient-to-r from-orange-500 to-orange-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
}

function AnnadanAnyAmountCard() {
  const { appendUTMToUrl } = useUTM();
  
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-orange-500">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-500"></div>
      <div className="p-8 text-center">
        <h3 className="font-bold text-xl mb-3 text-gray-800 leading-tight">
          Donate Any Amount
        </h3>
        <div className="mb-6">
          <span className="text-2xl font-semibold text-gray-500">
            ------------
          </span>
        </div>
        <Link
          href={appendUTMToUrl(`/donate?purpose=${encodeURIComponent(
            "Annadan Seva - Any Amount"
          )}`)}
        >
          <button className="bg-gradient-to-r from-orange-500 to-orange-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function DonationPage() {
  const router = useRouter();
  const { appendUTMToUrl } = useUTM();

  const vidyaDaanHandleClick = () => {
    const url = `/donate?purpose=${encodeURIComponent(
      "Vidhya Daan - Any Amount"
    )}`;
    router.push(appendUTMToUrl(url));
  };

  const anadanHandleClick = () => {
    const purpose = "Annadan Seva - Any Amount";
    const url = `/donate?purpose=${encodeURIComponent(purpose)}`;
    router.push(appendUTMToUrl(url));
  };

  const TeachingHandleClick = () => {
    const url = `/donate?purpose=${encodeURIComponent(
      "Sponsor a Child - Any Amount"
    )}`;
    router.push(appendUTMToUrl(url));
  };
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  // const isDesktop = useMediaQuery({ minWidth: 1024 });

  const backgroundImage = isMobile
    ? mobileImg.src
    : isTablet
    ? tabletImg.src
    : desktopImg.src;

  return (
    <>
      <div
        className="relative  rounded-xl h-[65vh] w-full xl:w-full sm:h-[120vh] xl:h-[130vh] xl:max-w-7xl xl:mx-auto   bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 lg:mt-6">
          {/* Top Stats Bar */}
          <div className="hidden  lg:flex items-center justify-center gap-6 bg-white/60 backdrop-blur rounded-full px-6 py-3 mx-auto w-fit shadow-md text-black">
            <div className="flex items-center gap-2">
              <button className="bg-orange-500 hover:bg-orange-500 text-white px-3 py-1 rounded-full shadow">
                🌟 Welfare Insights
              </button>
            </div>
            <div className="font-bold">800K</div>
            <div className="text-sm">Meals Served</div>
            <div className="font-bold">50K</div>
            <div className="text-sm">Children&apos;s Educated</div>
            <div className="flex -space-x-3">
              {[k3, k1, k4, k5, k2].map((src, idx) => (
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
            <div className="text-sm">5000+ Donors around the world</div>
          </div>

          {/* Main Text */}
          <div className="relative flex flex-col items-center text-center px-3 xl:px-4 py-16 max-w-xl mx-auto">
            <div className="absolute top-4/5  xl:top-3/6 mt-18 sm:mt-40 xl:mt-28 ">
              <h1 className="text-3xl xl:text-4xl font-bold leading-tight">
                Make a Lasting Difference. One{" "}
                <span className="text-orange-500 italic">Act of Giving</span> at
                a Time.
              </h1>
              <p className=" mt-4 text-lg text-gray-200">
                Support a cause that speaks to your soul.
                <br />
                Your donation fuels real, lasting impact.
              </p>
            </div>
          </div>

          {/* Options Cards Section */}
          <div className="hidden md:block bg-white/80 rounded-3xl p-2 mx-6 mt-60 xl:mb-10 shadow-lg text-black backdrop-blur-md">
            <div className="flex justify-center gap-6 flex-wrap p-4">
              <div
                onClick={anadanHandleClick}
                className="bg-[#FDF6EF] rounded-2xl shadow p-6 w-80 text-center hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/foodDonation.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-semibold">Annadaan</h3>
                <p className="text-sm mt-2">
                  No child should have to study on an empty stomach. Through
                  Annadan, we serve warm, wholesome meals every day—bringing not
                  just nourishment, but love, care, and the strength to dream.
                </p>
              </div>

              {/* Card 2 */}
              <div
                onClick={TeachingHandleClick}
                className="bg-[#FDF6EF] rounded-2xl shadow p-6 w-80 text-center hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/ethics.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>

                <h3 className="text-xl font-semibold">Teaching Moral Values</h3>
                <p className="text-sm mt-2">
                  In a world full of confusion, we guide young hearts with
                  timeless values. Through simple stories, activities, and
                  teachings from the Bhagavad Gita, we help children grow with
                  character, faith, and purpose.
                </p>
              </div>

              {/* Card 3 */}
              <div onClick={vidyaDaanHandleClick}>
                <div className="bg-[#FDF6EF] rounded-2xl shadow p-6 w-80 text-center hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/images/bookDonation.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Vidya Daan</h3>
                  <p className="text-sm mt-2">
                    Education is the light that breaks the darkness of poverty.
                    Through free tuition, we give children the chance to learn,
                    grow, and build a future their parents only dreamed of.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------Sponsor a child------------------- */}
      <div className="bg-white text-center py-8 px-4 text-black ">
        <button className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-full mb-6">
          ✧ Sponsor a Child
        </button>

        <h2 className="text-3xl md:text-4xl font-semibold italic mb-2">
          Gift a <span className="text-[#002A42]">Future</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          &quot;Gift a child a future filled with wisdom and opportunity.&quot;
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <>
            {/* First 2 cards - always visible */}
            {sponsorshipOptions.slice(0, 2).map(({ children, amount }) => (
              <div
                key={children}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-[#002A42]"
              >
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#002A42]"></div>

                <div className="p-8">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Sponsor {children} Child{children > 1 ? "ren" : ""}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Food and Education for 1 Year
                  </p>
                  <p className="text-2xl font-bold text-black mb-6">
                    ₹ {formatIndianCurrency(amount)}
                  </p>
                  <Link
                    href={appendUTMToUrl(`/donate?purpose=${encodeURIComponent(
                      `Sponsor ${children} Child${
                        children > 1 ? "ren" : ""
                      } - Food and Education`
                    )}&amount=${amount}`)}
                  >
                    <button className="bg-[#002A42] text-white font-semibold px-6 py-3 rounded-xl hover:[#002A42]/20 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 w-fit cursor-pointer">
                      Donate Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            {/* Remaining cards - visible only on md+ */}
            <div className="hidden md:contents">
              {sponsorshipOptions.slice(2).map(({ children, amount }) => (
                <div
                  key={children}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-[#002A42]"
                >
                  {/* Decorative top accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#002A42]"></div>

                  <div className="p-8">
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Sponsor {children} Child{children > 1 ? "ren" : ""}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Food and Education for 1 Year
                    </p>
                    <p className="text-2xl font-bold text-black mb-6">
                      ₹ {formatIndianCurrency(amount)}
                    </p>
                    <Link
                      href={appendUTMToUrl(`/donate?purpose=${encodeURIComponent(
                        `Sponsor ${children} Child${
                          children > 1 ? "ren" : ""
                        } - Food and Education`
                      )}&amount=${amount}`)}
                    >
                      <button className="bg-[#002A42] text-white font-semibold px-6 py-3 rounded-xl hover:from-orange-500 hover:to-orange-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 w-fit cursor-pointer">
                        Donate Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>

          <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-[#002A42]">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#002A42]"></div>

            <div className="p-8">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                Donate Any amount
              </h3>
              <p className="text-2xl font-bold text-black mb-6">---------</p>
              <Link
                href={appendUTMToUrl(`/donate?purpose=${encodeURIComponent(
                  "Sponsor a Child - Any Amount"
                )}`)}
              >
                <button className="bg-[#002A42] text-white font-semibold px-6 py-3 rounded-xl hover:from-orange-500 hover:to-orange-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 w-fit cursor-pointer">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*------------- Annadan ----------------*/}
      {/*------------- Annadan ----------------*/}
      {/*------------- Annadan ----------------*/}
      <div className="bg-white text-center py-8 px-4">
        <button className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-full mb-4">
          ✧ Annadan Seva
        </button>

        <h2 className="text-2xl md:text-4xl font-semibold italic">
          Serve Love Through <span className="text-orange-500">Food</span>
        </h2>

        <p className="text-gray-600 mt-2 mb-10 max-w-xl mx-auto">
          &quot;Join our sacred mission to feed hungry souls. Every meal you
          fund is prasadam — blessed, nourishing, and life-changing.&quot;
        </p>

        {/* First row: only 4 cards on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {donationOptions.slice(0, 4).map(({ children, amount }) => (
            <AnnadanCard
              key={children}
              childrenCount={children}
              amount={amount}
            />
          ))}

          {/* Remaining cards - desktop only */}
          <div className="hidden md:contents">
            {donationOptions.slice(4).map(({ children, amount }) => (
              <AnnadanCard
                key={children}
                childrenCount={children}
                amount={amount}
              />
            ))}
          </div>
        </div>

        {/* Special Section Centered */}
        <div className="mt-16 flex flex-col items-center gap-12">
          {/* Donate Any Amount - Center */}
          <div className="max-w-sm w-full">
            <AnnadanAnyAmountCard />
          </div>

          {/* Sponsor Village block */}
          <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
            <div className="flex-1">
              <AnnadanSpecialCard
                title="Sponsor Anna-Daan of 1 Entire Village for 1 Whole Year"
                amount={270000}
              />
            </div>
            <div className="flex-1">
               <AnnadanSpecialCard
                title="Sponsor Anna-Daan of 1 Entire Village for 1 Month"
                amount={18000}
              />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------Vidhya Dan--------------------------- */}

      <div className="bg-white text-center py-8 px-4 text-black">
        <button className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-full mb-6">
          ✧ Vidhya Dana Seva
        </button>

        <h2 className="text-3xl md:text-4xl font-semibold italic mb-2">
          Gift the Light of <span className="text-blue-900">Learning</span>
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          &quot;Through your support, children gain not just education, but
          purpose and inner strength.&quot;
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* First 2 Academic Year Options */}
          <>
            {academicYearOptions.slice(0, 2).map(({ children, amount }) => (
              <div
                key={`year-${children}`}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-blue-900 hover:border-blue-900"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900"></div>

                <div className="p-8">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Sponsor {children} Child{children > 1 ? "ren" : ""}{" "}
                    Education
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    for 1 Academic Year
                  </p>
                  <p className="text-2xl font-bold text-black mb-6">
                    ₹ {formatIndianCurrency(amount)}
                  </p>
                  <Link
                    href={appendUTMToUrl(`/donate?purpose=${encodeURIComponent(
                      `Sponsor ${children} Child${
                        children > 1 ? "ren" : ""
                      } Education for 1 Academic Year`
                    )}&amount=${amount}`)}
                  >
                    <button className="bg-gradient-to-r from-blue-900 to-blue-900 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-900 hover:to-blue-900 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 w-fit cursor-pointer">
                      Donate Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            {/* Remaining Academic Year Options - only shown on lg+ */}
            <div className="hidden lg:contents">
              {academicYearOptions.slice(2).map(({ children, amount }) => (
                <div
                  key={`year-${children}`}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-blue-900 hover:border-blue-900"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900"></div>

                  <div className="p-8">
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Sponsor {children} Child{children > 1 ? "ren" : ""}{" "}
                      Education
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      for 1 Academic Year
                    </p>
                    <p className="text-2xl font-bold text-black mb-6">
                      ₹ {formatIndianCurrency(amount)}
                    </p>
                    <Link
                      href={appendUTMToUrl(`/donate?purpose=${encodeURIComponent(
                        `Sponsor ${children} Child${
                          children > 1 ? "ren" : ""
                        } Education for 1 Academic Year`
                      )}&amount=${amount}`)}
                    >
                      <button className="bg-gradient-to-r from-blue-900 to-blue-900 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-900 hover:to-blue-900 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 w-fit cursor-pointer">
                        Donate Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>

          {/* Monthly Options */}
          {monthlyOptions.slice(0).map(({ children, amount }) => (
            <div
              key={`month-${children}`}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-blue-900 hover:border-blue-900"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900"></div>

              <div className="p-8">
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  Sponsor {children} Child{children > 1 ? "ren" : ""} Education
                </h3>
                <p className="text-sm text-gray-600 mb-4">for 1 Month</p>
                <p className="text-2xl font-bold text-black mb-6">
                  ₹ {formatIndianCurrency(amount)}
                </p>
                <Link
                  href={appendUTMToUrl(`/donate?purpose=${encodeURIComponent(
                    `Sponsor ${children} Child${
                      children > 1 ? "ren" : ""
                    } Education for 1 Month`
                  )}&amount=${amount}`)}
                >
                  <button className="bg-gradient-to-r from-blue-900 to-blue-900 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-900 hover:to-blue-900 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 w-fit cursor-pointer">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          ))}

          {/* Special Options */}
          {specialOptions.map(({ title, amount }, index) => (
            <div
              key={`special-${index}`}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-blue-900 hover:border-blue-900"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900"></div>

              <div className="p-8">
                <h3 className="font-semibold text-lg text-center text-gray-800 mb-6">
                  {title}
                </h3>
                <p className="text-2xl font-bold text-black mb-6">
                  ₹ {formatIndianCurrency(amount)}
                </p>
                <Link
                  href={appendUTMToUrl(`/donate?purpose=${encodeURIComponent(
                    title
                  )}&amount=${amount}`)}
                >
                  <button className="bg-gradient-to-r from-blue-900 to-blue-900 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-900 hover:to-blue-900 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 w-fit cursor-pointer">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -----------------donation details------------------------ */}
      <div className="bg-white text-black py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Section - Text & UPI Icons */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">
              Donation Through Bank (NEFT/ RTGS)
            </h2>

            <p className="mb-2">
              <span className="font-bold">Beneficiary Name:</span> HARE KRISHNA
              MOVEMENT
            </p>
            <p className="mb-2">
              <span className="font-bold">Bank Name:</span> KOTAK MAHINDRA BANK.
            </p>
            <p className="mb-2">
              <span className="font-bold">A/c No:</span> 0449364305
            </p>
            <p className="mb-6">
              <span className="font-bold">IFSC code:</span> KKBK0007478
            </p>

            <h3 className="text-lg font-semibold mb-2">Pay by UPI ID</h3>

            <div className="mb-4">
              <Image
                src={phn}
                alt="UPI Options"
                width={260}
                height={260}
                className="inline-block"
              />
            </div>

            <p className="text-md">
              <span className="font-bold">Mob No:</span> 8919035202
            </p>
          </div>

          {/* Right Section - QR Code */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-center">
            <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
            <Image
              src={upi_qr}
              alt="QR Code"
              width={280}
              height={280}
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      {/* -------------------Gallery Section--------------------- */}
      <div className="bg-[#EDF2F7]">
      <section className="mt-5 px-4 md:px-10 lg:px-20">
        <div className=" flex items-center justify-center  mt-2">
          <div className="flex flex-col items-center gap-4 w-[523px] text-center text-[--text-dark-charcoal] font-['Urbanist']">
            <h1 className=" text-2xl mt-2 lg:text-[40px] font-extrabold leading-[120%]">
              A glimpse into the lives you&#39;ve <br />
              touched with your{" "}
              <span className="text-[#FF9C5A] italic">kindness</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="px-4 py-6  flex justify-center">
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
      </div>
    </>
  );
}
