"use client";
import React from "react";
import Image from "next/image";
import emoj from "../../public/images/emoj.png";
import k3 from "../../public/images/k3.png";
import k1 from "../../public/images/k1.png";
import k4 from "../../public/images/k4.png";
import k5 from "../../public/images/k5.png";
import k2 from "../../public/images/k2.png";
import phn from "../../public/images/phn.png";
import upi_qr from "../../public/images/upi_qr 1.png";

const donationOptions = [
  { children: 100, amount: 2700 },
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
  { children: 1, amount: 12000 },
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
  { children: 1, amount: 500 },
  { children: 5, amount: 2500 },
  { children: 10, amount: 5000 },
  { children: 25, amount: 12000 },
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
    amount: 12000,
  },
];

export default function DonationPage() {
  return (
    <>
      <div
        className="relative min-h-screen rounded-xl w-full max-w-6xl mx-auto bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${emoj.src})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 lg:mt-6">
          {/* Top Stats Bar */}
          <div className="hidden  lg:flex items-center justify-center gap-6 bg-white/60 backdrop-blur rounded-full px-6 py-3 mx-auto w-fit shadow-md text-black">
            <div className="flex items-center gap-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full shadow">
                🌟 Welfare Insights
              </button>
            </div>
            <div className="font-bold">800K</div>
            <div className="text-sm">Meals Served</div>
            <div className="font-bold">50K</div>
            <div className="text-sm">Children’s Educated</div>
            <div className="flex -space-x-3">
              {[
                k3,
                k1,
                k4,
                k5,
                k2,
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
            <div className="text-sm">5000+ Donors around the world</div>
          </div>

          {/* Main Text */}
          <div className="flex flex-col items-center text-center px-4 py-16 max-w-xl mx-auto">
            <h1 className="text-4xl font-bold leading-tight">
              Make a Lasting Difference. One{" "}
              <span className="text-orange-400 italic">Act of Giving</span> at a
              Time.
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Support a cause that speaks to your soul.
              <br />
              Your donation fuels real, lasting impact.
            </p>
          </div>

          {/* Options Cards Section */}
          <div className="bg-white/80 rounded-3xl p-2 mx-6 mb-16 shadow-lg text-black backdrop-blur-md">
            <h2 className="text-center text-2xl font-semibold mb-4">Choose</h2>
            <div className="flex justify-center gap-6 flex-wrap">
              {/* Card 1 */}
              <div className="bg-[#FDF6EF] rounded-2xl shadow p-6 w-80 text-center">
                <div className="text-orange-500 text-4xl mb-4">🍱</div>
                <h3 className="text-xl font-semibold">Annadaan</h3>
                <p className="text-sm mt-2">
                  Provide freshly cooked, sanctified meals to those in need.
                  Your kindness fills plates and hearts.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FDF6EF] rounded-2xl shadow p-6 w-80 text-center">
                <div className="text-orange-500 text-4xl mb-4">🎒</div>
                <h3 className="text-xl font-semibold">Sponsor a Child</h3>
                <p className="text-sm mt-2">
                  Support a child’s education, nutrition, and wellbeing. Change
                  one life forever.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FDF6EF] rounded-2xl shadow p-6 w-80 text-center">
                <div className="text-orange-500 text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold">Vidya Daan</h3>
                <p className="text-sm mt-2">
                  Help light the lamp of learning. Your support shares sacred
                  teachings and education with young hearts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-center py-10 px-4">
        <button className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-full mb-4">
          ✧ Annadan Seva
        </button>

        <h2 className="text-2xl md:text-4xl font-semibold italic">
          Serve Love Through <span className="text-orange-500">Food</span>
        </h2>

        <p className="text-gray-600 mt-2 mb-10 max-w-xl mx-auto">
          “Join our sacred mission to feed hungry souls. Every meal you fund is
          prasadam — blessed, nourishing, and life-changing.”
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {donationOptions.map(({ children, amount }) => (
            <div
              key={children}
              className="border rounded-xl overflow-hidden shadow-md"
            >
              <div className="bg-gradient-to-t from-orange-200 to-orange-100 p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Serve {children} Children
                </h3>
                <p className="text-2xl font-bold text-black">
                  ₹ {amount.toLocaleString()}
                </p>
              </div>
              <div className="bg-white p-4">
                <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-orange-500 transition">
                  Donate Now
                </button>
              </div>
            </div>
          ))}

          <div className="border rounded-xl overflow-hidden shadow-md">
            <div className="bg-gradient-to-t from-orange-200 to-orange-100 p-6">
              <h3 className="font-semibold text-lg mb-2">Donate Any amount</h3>
              <p className="text-xl text-gray-600">------------</p>
            </div>
            <div className="bg-white p-4">
              <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-orange-500 transition">
                Donate Now
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md">
            <div className="bg-gradient-to-t from-orange-200 to-orange-100 p-6">
              <h3 className="font-semibold text-lg mb-2">
                Sponsor Anna-Daan of 1 entire village for 1 month
              </h3>
              <p className="text-2xl font-bold text-black">₹ 2,70,000</p>
            </div>
            <div className="bg-white p-4">
              <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-orange-500 transition">
                Donate Now
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md">
            <div className="bg-gradient-to-t from-orange-200 to-orange-100 p-6">
              <h3 className="font-semibold text-lg mb-2">
                Sponsor Anna-Daan of 1 entire village for 1 month
              </h3>
              <p className="text-2xl font-bold text-black">₹ 2,70,000</p>
            </div>
            <div className="bg-white p-4">
              <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-orange-500 transition">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      <div className="bg-white text-center py-12 px-4 text-black">
        <button className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-full mb-6">
          ✧ Sponsor a Child
        </button>

        <h2 className="text-3xl md:text-4xl font-semibold italic mb-2">
          Gift a <span className="text-green-500">Future</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          “Gift a child a future filled with wisdom and opportunity.”
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sponsorshipOptions.map(({ children, amount }) => (
            <div
              key={children}
              className="border border-green-500 rounded-xl overflow-hidden shadow-md"
            >
              <div className="bg-white p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  Sponsor {children} Child{children > 1 ? "ren" : ""}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Food and Education for 1 Years
                </p>
                <p className="text-2xl font-bold text-black mb-4">
                  ₹ {amount.toLocaleString()}
                </p>
                <button className="bg-green-600 lg:w-full text-white font-semibold px-3 py-1 lg:px-4 lg:py-2 rounded-full hover:bg-green-700 transition">
                  Donate Now
                </button>
              </div>
            </div>
          ))}

          <div className="border border-green-500 rounded-xl overflow-hidden shadow-md">
            <div className="bg-white p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                Donate Any amount
              </h3>
              <p className="text-2xl font-bold text-black mb-4">---------</p>
              <button className="bg-green-600 lg:w-full text-white font-semibold px-3 py-1 lg:px-4 lg:py-2 rounded-full hover:bg-green-700 transition">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- */}

      <div className="bg-white text-center py-12 px-4 text-black">
        <button className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-full mb-6">
          ✧ Vidhya Dana Seva
        </button>

        <h2 className="text-3xl md:text-4xl font-semibold italic mb-2">
          Gift the Light of <span className="text-blue-500">Learning</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          “Through your support, children gain not just education, but purpose
          and inner strength.”
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Academic Year Options */}
          {academicYearOptions.map(({ children, amount }) => (
            <div
              key={`year-${children}`}
              className="border border-blue-300 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="bg-white p-6 h-40 flex flex-col justify-center items-center">
                <h3 className="font-semibold text-lg mb-1">
                  Sponsor {children} Child{children > 1 ? "ren" : ""} Education
                </h3>
                <p className="text-sm mb-2">for 1 Academic Year</p>
                <p className="text-2xl font-bold">
                  ₹ {amount.toLocaleString()}
                </p>
              </div>
              <div className="bg-white p-4 border-t border-blue-300">
                <button className="bg-blue-500  lg:w-full text-white font-semibold px-3 py-1 lg:px-4 lg:py-2 rounded-full hover:bg-blue-600 transition ">
                  Donate Now
                </button>
              </div>
            </div>
          ))}

          {/* Monthly Options */}
          {monthlyOptions.map(({ children, amount }) => (
            <div
              key={`month-${children}`}
              className="border border-blue-300 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="bg-white p-6 h-40 flex flex-col justify-center items-center">
                <h3 className="font-semibold text-lg mb-1">
                  Sponsor {children} Child{children > 1 ? "ren" : ""} Education
                </h3>
                <p className="text-sm mb-2">for 1 Month</p>
                <p className="text-2xl font-bold">
                  ₹ {amount.toLocaleString()}
                </p>
              </div>
              <div className="bg-white p-4 border-t border-blue-300">
                <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition lg:w-full">
                  Donate Now
                </button>
              </div>
            </div>
          ))}

          {/* Special Options */}
          {specialOptions.map(({ title, amount }, index) => (
            <div
              key={`special-${index}`}
              className="border border-blue-300 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="bg-white p-6 h-40 flex flex-col justify-center items-center">
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-2xl font-bold">
                  ₹ {amount.toLocaleString()}
                </p>
              </div>
              <div className="bg-white p-4 border-t border-blue-300">
                <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition lg:w-full">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------- */}
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

      {/* ---------------------------------------- */}
    </>
  );
}
