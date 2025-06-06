'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
 import CountUp from 'react-countup';
import Link from 'next/link';

export default function Page() {
  console.log("About Us Page Rendered");
    const [activeTab, setActiveTab] = useState('mission');

  const missionContent = {
    title: "Our Mission",
    description: "At Aikya Vidya, our mission is to empower underprivileged children from rural communities by nurturing not just their minds, but their hearts and hopes too. We believe that every child, regardless of their socio-economic background, deserves the chance to thrive and that education, nourishment, and values are the pillars of true empowerment.",
    subtitle: "Here's how we bring this mission to life:",
    points: [
      "Providing Free Post-School Education",
      "Ensuring Nutritious Meals",
      "Instilling Core Values for Life",
      "Creating a Safe, Nurturing Environment"
    ]
  };

  const visionContent = {
    title: "Our Vision",
    description: "Our vision is to create a world where every child, regardless of their background, has access to quality education, proper nutrition, and the opportunity to develop strong moral values. We envision communities where children are empowered to break the cycle of poverty through holistic development.",
    subtitle: "Our vision encompasses:",
    points: [
      "Educational Excellence for All",
      "Sustainable Community Development",
      "Character Building and Moral Growth",
      "Breaking Barriers to Success"
    ]
  };

  const currentContent = activeTab === 'mission' ? missionContent : visionContent;
// --------------------
const stats = [
    {
      id: 1,
      icon: "🎯",
      number: "10",
      label: "Years Of Foundation"
    },
    {
      id: 2,
      icon: "😊",
      number: "5000+",
      label: "Monthly Donors"
    },
    {
      id: 3,
      icon: "😍",
      number: "1.5k",
      label: "Incredible Volunteers"
    },
    {
      id: 4,
      icon: "😄",
      number: "785",
      label: "Successful Campaigns"
    }
  ];

  return (
    <>
      {/* Fixed slide-in labels */}

      {/* Hero Section */}
   <section 
      className="relative bg-cover bg-center text-white w-full h-[90vh] md:h-[884px] max-w-6xl mx-auto rounded-xl overflow-hidden"
      style={{ backgroundImage: "url('/images/img1.png')" }}
    >
      {/* Optional: Content inside hero section */}
      
      {/* Sticky Button - positioned relative to this section only */}
      <div className='flex flex-col'>
        <button
  className="absolute top-1/2 right-0 transform -translate-y-1/2 z-50 hidden md:block"
  style={{ right: '0px' }}
>
  <Link
    href="/"
    className="bg-[#d84a48] text-white text-base px-2 py-6 hover:bg-black hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
    style={{
      writingMode: 'vertical-rl',
      animation: 'pulse 1s linear infinite',
    }}
  >
    EMI Calculator
  </Link>
</button>
<button
  className="absolute top-1/2 right-0 transform -translate-y-1/2 z-50 hidden md:block"
  style={{ right: '60px' }} // 10px gap + button width (50px) = 60px
>
  <Link
    href="/"
    className="bg-[#d84a48] text-white text-base px-2 py-6 hover:bg-black hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
    style={{
      writingMode: 'vertical-rl',
      animation: 'pulse 1s linear infinite',
    }}
  >
    EMI Calculator
  </Link>
</button>
      </div>
    </section>
         <div className=" relative overflow-hidden p-7 items-center justify-center min-h-screen ">
      {/* Vertical Text on Right */}
      {/* <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 origin-center z-10">
        <h2 className="text-4xl font-bold text-orange-500 tracking-wider whitespace-nowrap">
          Stories that Ignite Change
        </h2>
      </div> */}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-7 grid-rows-6 gap-3 h-screen max-w-6xl mx-auto">
        
        {/* Top Description Box - Position 1 */}
        <div 
  className="col-span-3 row-span-3 p-6 rounded-2xl shadow-lg flex items-center text-white"
  style={{ background: '#E76F51' }}
>
          <div>
            <p className="text-base leading-relaxed">
              Hare Krishna Movement (HKM) was founded by His Divine Grace{' '}
              <span className="font-bold italic">A.C. Bhaktivedanta Prabhupada</span>, also called{' '}
              <span className="font-bold italic">Srila Prabhupada</span> by devotees affectionately; 
              a man of many facets, a versatile personality, and more. He has been called 
              a scholar, a philosopher, a cultural ambassador, a prolific author, a social critic, 
              and a holy man at various times. In truth, he was all these things and more.
            </p>
          </div>
        </div>

        {/* Center Image - Position 2 (Ready for your image) */}
        <div className="col-span-4 row-span-6 col-start-4 relative flex items-center ">
          {/* This div is ready for your image */}
         
             <Image
      src="/images/p.png"
      alt="Srila Prabhupada"
      width={530}
      height={470}
      className="object-contain  "
      priority
    />
            
            {/* Decorative Elements */}

         
        </div>

        {/* Bottom Description Box - Position 3 */}
        <div className="col-span-3 col-start-5 row-start-7  text-white p-6 rounded-2xl shadow-lg flex items-center mt-1"
        style={{ background: '#E76F51' }}>
          
          <p className="text-base leading-relaxed">
            On his order HKM is carrying out massive food distribution programs with the 
            support from respective governments and CSR funding from corporates.
          </p>
         
        </div>
        
        {/* Title Section with Quote - Position 4 */}
        <div className="col-span-3 col-start-1 row-start-4 flex flex-col justify-center ">
          {/* Decorative Line */}
          <div className="flex items-center mt-38">
            <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
            <div className="flex-1 h-0.5 bg-gray-800 ml-2"></div>
          </div>

          {/* Title */}
          <div className="space-y-1 space-x-2 text-center mt-10">
            <h1 className="text-3xl font-bold text-orange-500 leading-tight">
              AC Bhaktivedanta Swami Prabhupada
            </h1>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Founder-Acharya of the worldwide<br />
              Hare Krishna Movement
            </p>
          </div>

          {/* Quote Box */}
         

          {/* Bottom Decorative Line */}
          {/* <div className="flex items-center">
            <div className="flex-1 h-0.5 bg-gray-800 mr-2"></div>
            <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
          </div> */}
        </div>

      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-32 w-40 h-40 bg-white rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full opacity-10 blur-lg"></div>
    </div>
    {/* =============mission=============== */}


 <div className="w-full max-w-6xl mx-auto bg-white  overflow-hidden shadow-lg">
     
<div className="relative flex w-1/2 max-w-[500px]  bg-[#F4A261]"  style={{
      borderTopRightRadius: '150px',
    }}>
  {/* Our Mission */}
  <button
    onClick={() => setActiveTab('mission')}
    className={`relative z-20 flex-1 py-2 px-6 text-2xl font-medium italic transition-all rounded-tl-[12px] ${
      activeTab === 'mission'
        ? 'bg-[#E76F51] text-white'
        : 'bg-[#F4A261] text-white/80 hover:text-white'
    }`}
    style={{
      borderTopRightRadius: '150px',
    }}
  >
    Our Mission
  </button>

  {/* Our Vision */}
  <button
    onClick={() => setActiveTab('vision')}
    className={`relative z-10 flex-1 py-2 px-6 text-2xl font-medium italic transition-all rounded-tr-[40px] ${
      activeTab === 'vision'
        ? 'bg-[#E76F51] text-white'
        : 'bg-[#F4A261] text-white/80 hover:text-white'
    }`}
    style={{
      borderTopRightRadius: '150px',
    }}
  >
    Our Vision
  </button>
</div>


      {/* Content Section */}
      <div className="flex min-h-[600px]">
        {/* Left Content */}
        <div className="flex-1 bg-[#E76F51] p-12 flex flex-col justify-center">
          <div className="text-white space-y-8">
            <p className="text-lg leading-relaxed">
              {currentContent.description}
            </p>
            
            <div className="space-y-6">
              <p className="text-lg font-medium">
                {currentContent.subtitle}
              </p>
              
              <div className="space-y-4">
                {currentContent.points.map((point, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-white rounded-full p-2 flex-shrink-0">
                      <svg className="w-4 h-4 text-[#E76F51]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <Image
            src="/images/i.png"
            alt="Children learning in classroom"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          {/* Optional: Add overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </div>
 
{/* =============================emoji */}

 <div className="w-full max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-3 bg-gray-100 px-8 py-4 rounded-full shadow-lg">
          <span className="text-2xl">✨</span>
          <h2 className="text-2xl font-bold text-gray-800">Our Impact in Numbers</h2>
        </div>
      </div>

      {/* Stats Container - Converting the specified CSS to Tailwind */}
    

<div className="inline-flex p-10 lg:px-20 lg:py-10 justify-center items-center content-center gap-y-11 gap-x-8 flex-wrap rounded-[40px] border border-orange-300 bg-white shadow-sm w-full">
  {stats.map((stat) => (
    <div key={stat.id} className="flex items-center gap-6 min-w-[280px]">
      {/* Icon */}
      <div className="text-5xl">
        {stat.icon}
      </div>
      {/* Number and Label */}
      <div className="flex flex-col">
        <span className="text-4xl lg:text-5xl font-bold text-gray-800 leading-none">
          <CountUp
            end={parseFloat(stat.number.replace(/[^\d.]/g, ''))}
            duration={2}
            separator=","
            suffix={stat.number.replace(/[\d.,]/g, '')}
            decimals={stat.number.includes('.') ? 1 : 0}
          />
        </span>
        <span className="text-lg text-gray-600 mt-1 font-medium">
          {stat.label}
        </span>
      </div>
    </div>
  ))}
</div>
    </div>

 {/* <div className="col-span-4 row-span-6 col-start-4 relative flex items-center justify-center px-14">
  <Image
    src="/images/pic3.png"
    alt="Teaching Session"
    width={700}
    height={450}
    className="object-cover rounded-4xl shadow-lg w-full h-full "
    priority
  />
</div> */}
 <div className="min-h-screen bg-gray-50 p-8 mx-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm border mb-8">
<span className="text-orange-500 mr-1">
  <Image
    src="/images/img9.png"
    alt="Icon"
    width={24}
    height={24}
    className="inline-block align-middle"
  />
</span>
            <span className="font-medium text-gray-700">From Need to Nurture</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Why We <span className="text-orange-500">Exists?</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Because every child deserves a chance to learn, grow, and thrive — no matter where they come from.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="relative">
          {/* Connecting Lines SVG */}
          <div className="absolute inset-0 pointer-events-none flex justify-center">
           <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 465 360"  // Smaller viewBox (was 765 579)
  fill="none"
  className="w- h-"
>
  <path 
    d="M10 10H390L395 150H400H130V290H80" 
    stroke="#F4A261" 
    strokeWidth="1"  // Thinner line
    strokeLinecap="round" 
    stroke-dasharray="9 12 " // Smaller dashes
    fill="none"
  />
</svg>
          </div>

          {/* The Need Section */}
          <div className="relative mb-20">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full mt-2 mr-6"></div>
              <div className="flex-1 max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">The Need</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The purpose of education is to develop all round and well-balanced students. 
                    This is achieved by integrated curriculum of aikya vidya, which puts value education 
                    and life skills into the curriculum along with school subjects.
                  </p>
                <p className="font-bold text-[18px] leading-[160%] text-[#656565] font-inter">
  "AIKYA VIDYA" is designed for students of classes 1st to 10th, especially in rural areas.
</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Cause Section */}
          <div className="relative mb-20 flex justify-end">
            <div className="flex items-start max-w-lg">
              <div className="flex-1 text-right">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">The Cause</h2>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    AIKYA VIDYA affiliated to Hare Krishna Movement Hyderabad 
                    which is a non-profit organization on a mission to empower every 
                    single child from rural areas, through free education.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full mt-2 ml-6"></div>
            </div>
          </div>

          {/* The Tuition Format Section */}
          <div className="relative">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full mt-2 mr-6"></div>
              <div className="flex-1 max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 ">The Tuition Format</h2>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    AIKYA VIDYA organizes evening tuitions under the care of trained teachers, systematically. 
                    Teacher focuses on teaching life skills, values to children, and organizes study programs to 
                    complete homework, read subjects and doubts will be clarified through teacher and peer learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* ------------------------------------ */}




{/* ---------------------gallery----------------------- */}
<div >
<div className="h-[50vh]  flex items-center justify-center">
  <section className="flex w-[561px] flex-col items-center gap-[10px]">
    <img
      src="/images/ik3.png"
      alt="Descriptive Alt Text"
      width={400}
      height={300}
      className="rounded-xl object-cover"
    />
  </section>
</div>

</div>
<section className="flex items-center justify-center  bg-white mb-16">



<div className="grid grid-cols-6 grid-rows-5 gap-4 max-w-6xl">
    <div className="col-span-2 row-span-2 ">
      <Image
        src="/images/image-150.png"
        alt="Gallery 1"
        width={520}
        height={320}
        className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl"
      />
    </div>
    <div className="col-span-2 row-span-3 col-start-1 row-start-3">
      <Image
        src="/images/isk2.png"
        alt="Gallery 3"
        width={520}
        height={480}
        className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl"
      />
    </div>
    <div className="col-span-2 row-span-4 col-start-3 row-start-1">
       <Image
        src="/images/image-160.png"
        alt="Gallery 2"
        width={250}
        height={480}
        className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl"
      />
    </div>
    <div className="col-span-2 row-span-2 col-start-5 row-start-1">
      <Image
        src="/images/image-170.png"
        alt="Gallery 3"
        width={520}
        height={480}
        className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl"
      />
    </div>
    <div className="col-span-2 row-span-3 col-start-5 row-start-3">
        <Image
        src="/images/isk2.png"
        alt="Gallery 3"
        width={520}
        height={480}
        className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl"
      />
    </div>
    <div className="col-span-2 col-start-3 row-start-5 ">
<Image
        src="/images/ik.png"
        alt="Gallery 3"
        width={400}
        height={400}
        className="w- h- object-cover hover:scale-105 transition duration-300 ease-in-out"
      />


    </div>
</div>
    
    
    
 
</section>
    </>
  );
}

