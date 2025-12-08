'use client'
import Image from "next/image";
import { MapPin } from "lucide-react";

const BuildSchool = () => {
  return (
    <>
      <section className="py-8 bg-gradient-to-br from-[#F96D2F] via-[#FA6F30] to-[#F1872B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-10rem)]">

            {/* LEFT CONTENT */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">

              <span className="bg-black/20 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Education Campaign
              </span>

              <h1 className="text-white text-6xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                Build a School in <br /> Rural Telangana
              </h1>

              <p className="text-white/90 text-lg sm:text-xl max-w-xl leading-relaxed">
                Give 200+ children a safe place to learn and grow in a permanent school building
              </p>

              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Komarolu, Telangana</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-10 rounded-3xl" />

                  <Image
                    src="/donation-section/stacked-books.jpg"
                    width={800}
                    height={400}
                    alt="Books"
                    className="object-cover"
                    priority
                  />

                  {/* Outer Glow */}
                  <div className="absolute -inset-4 bg-white/10 rounded-3xl -z-10 blur-xl" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-8 flex flex-col lg:flex-row gap-12 ">

          {/* LEFT CARD */}
          <div className="bg-white shadow-md rounded-2xl p-8 w-full lg:w-2/3 border border-orange-100 
                    lg:sticky lg:top-24 h-fit">
            <div className="grid grid-cols-2  ">
              {/* Column 1 */}
              <div className="">
                <p className="text-sm font-semibold text-[#847062]">AMOUNT RAISED</p>
                <div className="text-5xl font-bold text-[#FA6B2E] mt-2">
                  ₹32.50L
                </div>
              </div>

              {/* Column 2 */}
              <div className="text-end justify-end">
                <p className="text-sm font-semibold text-[#847062]">Goal</p>
                <div className="text-2xl font-bold mt-2">
                  ₹50.00L
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="w-full h-5 bg-gray-200 rounded-full">
                <div className="h-5 bg-orange-500 rounded-full w-[65%]"></div>
              </div>
            </div>

            {/* <p className="text-sm font-bold text-primary mt-6">65% Funded</p> */}
            <div className="grid grid-cols-2  ">
              {/* Column 1 */}
              <div className="">
                {/* <p className="text-sm font-semibold text-[#847062]">AMOUNT RAISED</p> */}
                <p className="text-sm font-bold text-primary mt-6">65% Funded</p>
              </div>

              {/* Column 2 */}
              <div className="text-end justify-end mt-6">
                <p className="text-sm font-semibold text-[#847062] ">₹17.50L to go</p>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6 flex gap-6">
              {/* Supporters */}
              <div className="bg-orange-50 p-4 rounded-xl flex items-center gap-4 w-1/2">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                  👥
                </div>
                <div>
                  <p className="text-xl font-semibold">124</p>
                  <p className="text-gray-600 text-sm">Supporters</p>
                </div>
              </div>

              {/* Days Left */}
              <div className="bg-orange-50 p-4 rounded-xl flex items-center gap-4 w-1/2">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                  📅
                </div>
                <div>
                  <p className="text-xl font-semibold">0</p>
                  <p className="text-gray-600 text-sm">Days Left</p>
                </div>
              </div>
            </div>

            {/* Bottom icons */}
            <div className="mt-8 flex gap-10  justify-center text-sm text-gray-700">
              <span className="flex items-center gap-2">🛡 Verified Campaign</span>
              <span className="flex items-center gap-2">✔ 80G Tax Benefit</span>
            </div>
          </div>

          {/* RIGHT DONATION BOX */}
          <div className="bg-white shadow-md rounded-2xl p-8 w-full lg:w-1/3 border border-orange-100 
                    max-h-[80vh] overflow-y-hidden ">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              ❤️
            </div>

            <h2 className="text-center text-3xl font-bold mt-4">
              Make Your Donation
            </h2>
            <p className="text-center text-gray-500 mt-2">
              Every contribution counts
            </p>

            <p className="font-semibold text-gray-700 mt-6">Select Amount</p>

            {/* Option 1 */}
            <div className="mt-4 border rounded-xl p-4 cursor-pointer hover:border-orange-500">
              <p className="font-semibold text-lg">₹500</p>
              <p className="text-gray-600 text-sm">10 bricks for construction</p>
            </div>

            {/* Option 2 */}
            <div className="mt-4 border border-orange-500 bg-orange-50 rounded-xl p-4 cursor-pointer">
              <p className="font-semibold text-lg">₹2,500</p>
              <p className="text-gray-600 text-sm">One desk and bench set</p>
            </div>
            <div className="mt-4 border border-orange-500 bg-orange-50 rounded-xl p-4 cursor-pointer">
              <p className="font-semibold text-lg">₹2,500</p>
              <p className="text-gray-600 text-sm">One desk and bench set</p>
            </div><div className="mt-4 border border-orange-500 bg-orange-50 rounded-xl p-4 cursor-pointer">
              <p className="font-semibold text-lg">₹2,500</p>
              <p className="text-gray-600 text-sm">One desk and bench set</p>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default BuildSchool;
