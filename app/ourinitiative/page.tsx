import React from 'react'
import { Play } from 'lucide-react';
import Image from 'next/image';
import { FaPrayingHands, FaTheaterMasks, FaHeartbeat, FaTree, FaChalkboardTeacher } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';
import { MdOutlineEventNote } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';
import { FaDonate } from 'react-icons/fa';

export default function Page() { 
     return (
     <>
        <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-10 items-center">
      {/* Video Thumbnail */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-blue-400">
        <Image
          src="/images/image.png" // replace with actual image path
          alt="AIKYA VIDYA"
          width={600}
          height={340}
          className="w-full h-full object-cover"
        />
        {/* Play Button */}
        {/* <button className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-[#F47514] w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:scale-105 transition">
          <Play className="text-white" />
        </button> */}
      </div>

      {/* Text Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          Always and Forever
        </h2>
        <p className="text-gray-600 leading-relaxed">
          AIKYA VIDYA empowers underprivileged rural children with free education, food, and values. We aim to anchor their lives, helping them find purpose and view education as a vital foundation for navigating life responsibly.
        </p>
      </div>

      {/* Bottom Section - Initiative */}
      <div className="md:col-span-2 text-center mt-10">
        <h3 className="text-2xl md:text-3xl font-semibold">
          <span className="text-orange-500">An Initiative of </span>
          <span className="text-blue-900">Hare Krishna Movement</span>
        </h3>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          At Harekrishnavidya, we believe that change begins with understanding the needs of the community. By addressing the root causes of challenges like hunger, education gaps, and healthcare disparities, we are creating sustainable and lasting impact.
        </p>
      </div>
    </section>

{/* ---------------------------------image----------------- */}
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center justify-center px-4 py-10 mb-10">
      <h2 className="text-3xl font-semibold text-orange-500 mb-4">Curriculum</h2>
      <p className="text-center text-gray-700 max-w-2xl mb-8">
        The curriculum of <strong>AIKYA VIDYA</strong> is a synthesis of academic and value-based learning.
        The post-school education centres of <strong>AIKYA VIDYA</strong> cater to students of Grades 1 to 10.
        The sessions are systematically organized every evening.
      </p>

      <div className="space-y-4 flex flex-col items-center">
  {/* Block 1 */}
  <div className="relative group w-[350px]">
    <div className="bg-[#ec6d4e] rounded-xl px-4 py-4 flex items-center space-x-4 shadow-md w-[350px] h-[80px] transform transition-transform duration-300 group-hover:scale-105">
      <div className="bg-white p-3 rounded-lg">
        <Image
          src="/images/m.png"
          alt="Star Icon"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>
      <span className="text-white text-lg font-semibold">Moral Values & Ethics</span>
    </div>
  </div>

  {/* Block 2 */}
  <div className="relative group w-[430px]">
    <div className="bg-[#ec6d4e] rounded-xl px-4 py-4 flex items-center space-x-4 shadow-md w-[430px] h-[80px] transform transition-transform duration-300 group-hover:scale-105">
      <div className="bg-white p-3 rounded-lg">
        <Image
          src="/images/v.png"
          alt="Star Icon"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>
      <span className="text-white text-lg font-semibold">Incredible Culture & Heritage of Bharat</span>
    </div>
  </div>

  {/* Block 3 */}
  <div className="relative group w-[400px]">
    <div className="bg-[#ec6d4e] rounded-xl px-6 py-4 flex items-center space-x-4 shadow-md w-[400px] h-[80px] transform transition-transform duration-300 group-hover:scale-105">
      <div className="bg-white p-3 rounded-lg">
        <Image
          src="/images/fans.png"
          alt="Star Icon"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>
      <span className="text-white text-lg font-semibold">Life skills for contemporary world</span>
    </div>
  </div>
</div>

    </div>
 {/* ------------------------box------------------------- */}
       <div className="flex flex-col items-center p-4 bg-gray-50 mb-5 ">
  <div className="grid grid-cols-2 gap-8 mb-7">
    {/* Spiritual Education */}
    <div className="relative p-6 bg-[#EDF2F7] shadow-lg rounded-xl w-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="absolute -top-6 left-4 bg-orange-200 p-2 rounded-full">
        <GiMeditation className="text-2xl text-orange-700" />
      </div>
      <h2 className="text-lg font-semibold text-blue-900 mt-4">Spiritual Education</h2>
      <ul className="text-gray-600 mt-6 text-sm space-y-1 ">
        <li>Yoga & Meditation</li>
        <li>Prayers</li>
        <li>Philosophy</li>
      </ul>
    </div>

    {/* Arts */}
    <div className="relative p-6 bg-[#EDF2F7] shadow-md rounded-xl w-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="absolute -top-6 left-4 bg-orange-200 p-2 rounded-full">
        <FaTheaterMasks className="text-2xl text-orange-700" />
      </div>
      <h2 className="text-lg font-semibold text-blue-900 mt-4">Arts</h2>
      <ul className="text-gray-600 mt-2 text-sm space-y-1">
        <li>Singing</li>
        <li>Dancing</li>
        <li>Music Instruments</li>
      </ul>
    </div>
  </div>

  {/* Center Line to Leadership */}
  <div className="w-0.5 h-8 bg-gray-400"></div>

  {/* Leadership */}
  <div className="relative p-6 bg-[#EDF2F7] shadow-md rounded-xl w-64 mb-3 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
    <div className="absolute -top-6 left-4 bg-orange-200 p-2 rounded-full">
      <FaChalkboardTeacher className="text-2xl text-orange-700" />
    </div>
    <h2 className="text-lg font-semibold text-blue-900 mt-4">Leadership</h2>
    <ul className="text-gray-600 mt-2 text-sm space-y-1">
      <li>Public Speaking</li>
      <li>Event Management</li>
      <li>Financial Management</li>
    </ul>
  </div>

  {/* Bottom Line to two cards */}
  <div className="w-0.5 h-8 bg-gray-400"></div>

  <div className="grid grid-cols-2 gap-8">
    {/* Health & Hygiene */}
    <div className="relative p-6 bg-[#EDF2F7] shadow-md rounded-xl w-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="absolute -top-6 left-4 bg-orange-200 p-2 rounded-full">
        <FaHeartbeat className="text-2xl text-orange-700" />
      </div>
      <h2 className="text-lg font-semibold text-blue-900 mt-4">Health & Hygiene</h2>
      <ul className="text-gray-600 mt-2 text-sm space-y-1">
        <li>Healthcare</li>
        <li>Basic Hygiene</li>
        <li>Cleanliness</li>
      </ul>
    </div>

    {/* Base */}
    <div className="relative p-6 bg-[#EDF2F7] shadow-md rounded-xl w-64 transform transition-transform duration-400 hover:scale-105 cursor-pointer">
      <div className="absolute -top-6 left-4 bg-orange-200 p-2 rounded-full">
        <FaTree className="text-2xl text-orange-700" />
      </div>
      <h2 className="text-lg font-semibold text-blue-900 mt-4">Base</h2>
      <ul className="text-gray-600 mt-2 text-sm space-y-1">
        <li>Kitchen Gardening</li>
        <li>Promoting Horticulture</li>
        <li>Waste Management</li>
      </ul>
    </div>
  </div>
</div>


    {/* ---------------------------maha------------ */}
   <section 
  className="relative bg-cover bg-center text-white w-[1441px] h-[693px]  max-w-6xl mx-auto rounded-xl overflow-hidden bg-black opacity-70 mb-14"
  style={{ backgroundImage: "url('/images/ii.png')" }}
>
</section>
    <div className="flex justify-center items-center  bg-gray-50 p-4 mb-16">
      <div className="text-center ">
        {/* Main text */}
        <div className="mb-5">
          <p className="text-gray-800 text-lg leading-relaxed">
            We are providing Free Food, Education and Values for<br />
            life based on <span className="font-semibold">Bhagavad-Gita</span> to underprivileged<br />
            in Rural Areas of India
          </p>
        </div>
        {/* Arrows and Donate Button Container */}
        <div className="relative flex items-center justify-center mt-10">
        {/* Left Arrow as Image */}
        <div className="absolute -left-2 top-3663px ">
          <Image
            src="/images/arr.png"
            alt="Left Arrow"
            width={60}
            height={50}
          />
        </div>

        {/* Button */}
  <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-full shadow-md z-1 transition-transform transform hover:scale-105">
  <Image
    src="/images/Heart.png"
    alt="Donate Icon"
    width={24}
    height={24}
    className="w-6 h-6"
  />
  Donate Now
</button>
        {/* Right Arrow */}
        <div className="absolute -right-5 top-3663px ">
          <Image
    src="/images/aro.png"
    alt="Left Arrow"
    width={60}
    height={50}
  />
        </div>
      </div>
    </div>
       {/* ----  */}
      </div>
    
    </>
  )
}

