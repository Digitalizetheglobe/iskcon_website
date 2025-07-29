// app/gallery/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ch2 from "../../public/images/ch2.jpg";
import harinam from "../../public/images/Harinam.jpg";
import radha from "../../public/images/radha.jpg";
import ch3 from "../../public/images/ch3.jpg";
import ch from "../../public/images/ch.jpg";
import gau from "../../public/images/gau.jpg";
import krish from "../../public/images/krish.jpg";
import bal from "../../public/images/bal.jpg";
import g from "../../public/images/g.jpg";
import mini from "../../public/images/mini.jpg";
import image160 from "../../public/images/image-160.png";




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
    { src: ch2,alt: "Gallery 1", width: 500, height: 320 },
    { src: harinam, alt: "Gallery 3", width: 400, height: 400 },
    { src: image160, alt: "Gallery 2", width: 250, height: 480 },
    { src: radha, alt: "Gallery 3", width: 520, height: 480 },
    { src: ch3, alt: "Gallery 3", width: 400, height: 400 },
    { src: ch, alt: "Gallery 3", width: 200, height: 300 },
  ];

  return (
    <>
      {isMobile ? (
        <>
          <div className=" mt-10 flex flex-col items-center gap-4 w-auto text-center text-[--text-dark-charcoal] font-['Urbanist']">
            <h1 className="text-[25px] font-bold ">
              A glipmse into the lives you&#39;ve <br />
              touched with your{" "}
              <span className="text-[#FF9C5A] italic">kindness</span>
            </h1>
          </div>
          <section className="flex flex-col  justify-center mx-10  mt-10  bg-white">
            <div className="grid grid-cols-1 gap-6  ">
              {/* <div className="col-span-1 row-span-2 ">
                        <Image
                          src={galleryImages[0].src}
                          alt={galleryImages[0].alt}
                          width={galleryImages[0].width}
                          height={galleryImages[0].height}
                          className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl cursor-pointer"
                          onClick={() => setZoomed(0)}
                        />
                      </div> */}
              {/* <div className="col-span-1 row-span-3 col-start-1 ">
                        <Image
                          src={galleryImages[1].src}
                          alt={galleryImages[1].alt}
                          width={galleryImages[1].width}
                          height={galleryImages[1].height}
                          className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl cursor-pointer"
                          onClick={() => setZoomed(1)}
                        />
                      </div> */}
              <div>
                <Image
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  width={galleryImages[2].width}
                  height={galleryImages[2].height}
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl cursor-pointer"
                  onClick={() => setZoomed(2)}
                />
              </div>
              <div>
                <Image
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  width={galleryImages[3].width}
                  height={galleryImages[3].height}
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl cursor-pointer"
                  onClick={() => setZoomed(3)}
                />
              </div>
              <div>
                <Image
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  width={galleryImages[4].width}
                  height={galleryImages[4].height}
                  className="w-auto h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out shadow-xl cursor-pointer"
                  onClick={() => setZoomed(4)}
                />
              </div>
              <div>
                <Image
                  src={galleryImages[5].src}
                  alt={galleryImages[5].alt}
                  width={galleryImages[5].width}
                  height={galleryImages[5].height}
                  className="w-95 h-full object-cover rounded-2xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
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
        </>
      ) : (
        <> 
        <h1 className="text-[40px] font-bold text-center ">
              A glipmse into the lives you&#39;ve <br />
              touched with your{" "}
              <span className="text-[#FF9C5A] italic">kindness</span>
            </h1>

        <div className="grid grid-cols-7 grid-rows-6 gap-9 h-[800px] p-4 max-w-6xl mx-auto  shadow-xl rounded-lg bg-gray-100 m-8">
          {/* Image 1 */}
          <div className="col-span-2 row-span-4 relative shadow-xl contrast-more:">
            <Image
              src={gau}
              alt="Image 1"
              fill
              className="object-cover rounded-lg transition-transform duration-900 hover:scale-105"
            />
          </div>

          {/* Image 2 */}
          <div className="col-span-3 row-span-6 col-start-3 relative">
            <Image
              src={krish}
              alt="Image 2"
              fill
              className="object-cover rounded-lg transition-transform duration-900 hover:scale-105"
            />
          </div>

          {/* Image 3 */}
          <div className="col-span-2 row-span-4 col-start-6 relative">
            <Image
              src={bal}
              alt="Image 3"
              fill
              className="object-cover rounded-lg transition-transform duration-900 hover:scale-105"
            />
          </div>

          {/* Image 4 */}
          <div className="col-span-2 row-span-2 row-start-5 relative">
            <Image
              src={g}
              alt="Image 4"
              fill
              className="object-cover rounded-lg transition-transform duration-900 hover:scale-105"
            />
          </div>

          {/* Image 5 */}
          <div className="col-span-2 row-span-2 col-start-6 row-start-5 relative">
            <Image
              src={mini}
              alt="Image 5"
              fill
              className="object-cover rounded-lg transition-transform duration-900 hover:scale-105"
            />
          </div>
        </div>
        </>
      )}
    </>
  );
}
