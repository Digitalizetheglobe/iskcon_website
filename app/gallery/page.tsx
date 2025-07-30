// app/gallery/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ch2 from "../../public/images/ch2.jpg";
import harinam from "../../public/images/Harinam.jpg";
import radha from "../../public/images/radha.jpg";
import ch3 from "../../public/images/ch3.jpg";
import ch from "../../public/images/ch.jpg";

import image160 from "../../public/images/image-160.png";

//   new festivals images 
import fest1 from "../../public/GalleryImages/Culture/fest (1).jpg"
import fest2 from "../../public/GalleryImages/Culture/fest (2).jpg"
import fest3 from "../../public/GalleryImages/Culture/fest (3).jpg"
import fest4 from "../../public/GalleryImages/Culture/fest (4).jpg"


// new education images 
import edu2 from "../../public/GalleryImages/Education/edu02.jpg"
import edu3 from "../../public/GalleryImages/Education/edu03.jpg"
import edu4 from "../../public/GalleryImages/Education/edu04.jpg"
import edu5 from "../../public/GalleryImages/Education/edu05.jpg"



// new images of idyadaan
import food01 from "../../public/GalleryImages/Food/food01.jpg"
import food02 from "../../public/GalleryImages/Food/food02.jpg"
import food03 from "../../public/GalleryImages/Food/food03.jpg"
import food04 from "../../public/GalleryImages/Food/food04.jpg"


//new images og valuesEducation
import value1 from "../../public/GalleryImages/Values/value (1).jpg"
import value2 from "../../public/GalleryImages/Values/value (2).jpg"
import value3 from "../../public/GalleryImages/Values/value (3).jpg"
import value4 from "../../public/GalleryImages/Values/value (4).jpg"



export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // adjust breakpoint if needed
    };

    handleResize(); // initial check

    window.addEventListener("resize", handleResize); // listener for resize

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);
  const [zoomed, setZoomed] = useState<number | null>(null);

  const galleryImages = [
    { src: ch2, alt: "Gallery 1", width: 500, height: 320 },
    { src: harinam, alt: "Gallery 3", width: 400, height: 400 },
    { src: image160, alt: "Gallery 2", width: 250, height: 480 },
    { src: radha, alt: "Gallery 3", width: 520, height: 480 },
    { src: ch3, alt: "Gallery 3", width: 400, height: 400 },
    { src: ch, alt: "Gallery 3", width: 200, height: 300 },
  ];


  const festivals=[
  { src: fest1, alt: "Gallery 1", width: 400, height: 400 },
  { src: fest2, alt: "Gallery 2", width: 500, height: 320 },
  { src: fest3, alt: "Gallery 3", width: 500, height: 320 },
  { src: fest4, alt: "Gallery 4", width: 500, height: 320 },
 
  ]
  
  const education = [
  { src: edu2, alt: "edu 2", width: 500, height: 320 },
  { src: edu3, alt: "edu 3", width: 500, height: 320 },
  { src: edu4, alt: "edu 4", width: 500, height: 320 },
  { src: edu5, alt: "edu 5", width: 500, height: 320 },
 
];

const food = [
  { src: food01, alt: "Food 1", width: 500, height: 320 },
  { src: food02, alt: "Food 2", width: 500, height: 320 },
  { src: food03, alt: "Food 3", width: 500, height: 320 },
  { src: food04, alt: "Food 4", width: 500, height: 320 },

];

const valuesEducation = [
  { src: value1, alt: "Values Education 1", width: 500, height: 320 },
  { src: value2, alt: "Values Education 2", width: 500, height: 320 },
  { src: value3, alt: "Values Education 3", width: 500, height: 320 },
  { src: value4, alt: "Values Education 4", width: 500, height: 320 },
 
];
// ... existing code ...


  return (
    <>
      {isMobile ? (
        <>
          <div className=" mt-10 flex flex-col items-center gap-4 w-auto text-center text-[--text-dark-charcoal] font-['Urbanist']">
            <h1 className="text-[30px] font-bold mb-4">
              A glipmse into the lives you&#39;ve 
              touched with your{" "}
              <span className="text-[#FF9C5A] italic">kindness</span>
            </h1>
          </div>
          <section className="flex flex-col  justify-center mx-10  mt-10  bg-white">
            <div className="grid grid-cols-1 gap-6  ">
              <section className="px-6 mb-5 lg:mb-20 ">
              <h2 className="text-3xl  text-center font-semibold mb-4 text-[#333]">
                Annadan
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {food.map((f, idx) => (
                  <Image
                    key={idx}
                    src={f.src}
                    alt={`Annadan ${idx + 1}`}
                    width={300}
                    height={200}
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                  />
                ))}
              </div>
            </section>
             <section className="px-6 mb-5 lg:mb-20">
              <h2 className="text-3xl text-center font-semibold mb-4 text-[#333]">
                Vidyadaan
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {education.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src}
                    alt={`Vidyadaan ${idx + 1}`}
                    width={300}
                    height={200}
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                  />
                ))}
              </div>
            </section>

            {/* Section: Values Education */}
            <section className="px-6  mb-10 lg:mb-20">
              <h2 className="text-3xl  text-center font-semibold mb-4 text-[#333]">
                Values Education
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {valuesEducation.map((edu, idx) => (
                  <Image
                    key={idx}
                    src={edu.src}
                    alt={`Values Education ${idx + 1}`}
                    width={300}
                    height={200}
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                  />
                ))}
              </div>
            </section>

            {/* Section: Festivals */}
            <section className="px-6 mb-10 lg:mb-20">
              <h2 className="text-3xl  text-center font-semibold mb-4 text-[#333]">
                Festivals
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {festivals.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src}
                    alt={`Festival ${idx + 1}`}
                    width={300}
                    height={200}
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                  />
                ))}
              </div>
            </section>
             
              
             
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
          

        </>
      ) : (
        <>
          
          <>
            <h1 className="text-center text-[30px] lg:text-[44px] font-bold lg:mt-5 lg:mb-20">
              A glimpse into the lives you&#39;ve <br />
              touched with your{" "}
              <span className="text-[#FF9C5A] italic">kindness</span>
            </h1>

            {/* Section: Annadan */}
            <section className="px-6 mb-5 lg:mb-20 ">
              <h2 className="text-2xl lg:text-5xl lg:py-15 text-center font-semibold mb-4 text-[#333]">
                Annadan
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {food.map((f, idx) => (
                  <Image
                    key={idx}
                    src={f.src}
                    alt={`Annadan ${idx + 1}`}
                    width={300}
                    height={200}
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                  />
                ))}
              </div>
            </section>

            {/* Section: Vidyadaan */}
            <section className="px-6 mb-5 lg:mb-20">
              <h2 className="text-2xl lg:text-5xl lg:py-15 text-center font-semibold mb-4 text-[#333]">
                Vidyadaan
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {education.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src}
                    alt={`Vidyadaan ${idx + 1}`}
                    width={300}
                    height={200}
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                  />
                ))}
              </div>
            </section>

            {/* Section: Values Education */}
            <section className="px-6  mb-10 lg:mb-20">
              <h2 className="text-2xl lg:text-5xl lg:py-15 text-center font-semibold mb-4 text-[#333]">
                Values Education
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {valuesEducation.map((edu, idx) => (
                  <Image
                    key={idx}
                    src={edu.src}
                    alt={`Values Education ${idx + 1}`}
                    width={300}
                    height={200}
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                  />
                ))}
              </div>
            </section>

            {/* Section: Festivals */}
            <section className="px-6 mb-10 lg:mb-20">
              <h2 className="text-2xl lg:text-5xl lg:py-15 text-center font-semibold mb-4 text-[#333]">
                Festivals
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {festivals.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src}
                    alt={`Festival ${idx + 1}`}
                    width={300}
                    height={200}
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                  />
                ))}
              </div>
            </section>
          </>
          );
        </>
      )}
    </>
  );
}
