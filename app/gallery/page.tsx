"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

// Import your images here (keeping your imports from your current code)
import fest1 from "../../public/GalleryImages/Culture/fest (1).jpg";
import fest2 from "../../public/GalleryImages/Culture/fest (2).jpg";
import fest3 from "../../public/GalleryImages/Culture/fest (3).jpg";
import fest4 from "../../public/GalleryImages/Culture/fest (4).jpg";
import fest5 from "../../public/GalleryImages/Culture/fest (5).jpg";
import fest6 from "../../public/GalleryImages/Culture/fest (6).jpg";
import fest7 from "../../public/GalleryImages/Culture/fest (7).jpg";
import fest8 from "../../public/GalleryImages/Culture/fest (8).jpg";

import edu2 from "../../public/GalleryImages/Education/edu02.jpg";
import edu3 from "../../public/GalleryImages/Education/edu03.jpg";
import edu4 from "../../public/GalleryImages/Education/edu04.jpg";
import edu5 from "../../public/GalleryImages/Education/edu05.jpg";
import edu6 from "../../public/GalleryImages/Education/edu06.jpg";
import edu7 from "../../public/GalleryImages/Education/edu07.jpg";
import edu8 from "../../public/GalleryImages/Education/edu08.jpg";
import edu9 from "../../public/GalleryImages/Education/edu09.jpg";

import food01 from "../../public/GalleryImages/Food/food01.jpg";
import food02 from "../../public/GalleryImages/Food/food02.jpg";
import food03 from "../../public/GalleryImages/Food/food03.jpg";
import food04 from "../../public/GalleryImages/Food/food04.jpg";
import food05 from "../../public/GalleryImages/Food/food05.jpg";
import food06 from "../../public/GalleryImages/Food/food06.jpg";
import food07 from "../../public/GalleryImages/Food/food07.jpg";
import food08 from "../../public/GalleryImages/Food/food08.jpg";

import value1 from "../../public/GalleryImages/Values/value (1).jpg";
import value2 from "../../public/GalleryImages/Values/value (2).jpg";
import value3 from "../../public/GalleryImages/Values/value (3).jpg";
import value4 from "../../public/GalleryImages/Values/value (4).jpg";
import value5 from "../../public/GalleryImages/Values/value (5).jpg";
import value6 from "../../public/GalleryImages/Values/value (6).jpg";
import value7 from "../../public/GalleryImages/Values/value (7).jpg";
import value8 from "../../public/GalleryImages/Values/value (8).jpg";

// Type definitions
interface GalleryItem {
  src: StaticImageData;
  title?: string;
  alt?: string;
  width: number;
  height: number;
}

interface MasonryImageProps {
  item: GalleryItem;
  index: number;
}

// Your image arrays
const food: GalleryItem[] = [
  { src: food01, alt: "Food 1", width: 500, height: 320 },
  { src: food02, alt: "Food 2", width: 500, height: 320 },
  { src: food03, alt: "Food 3", width: 500, height: 320 },
  { src: food04, alt: "Food 4", width: 500, height: 320 },
  { src: food05, alt: "Food 3", width: 500, height: 320 },
  { src: food06, alt: "Food 4", width: 500, height: 320 },
  { src: food07, alt: "Food 3", width: 500, height: 320 },
  { src: food08, alt: "Food 4", width: 500, height: 320 },
];

const education: GalleryItem[] = [
  { src: edu2, alt: "edu 2", width: 500, height: 320 },
  { src: edu3, alt: "edu 3", width: 500, height: 320 },
  { src: edu4, alt: "edu 4", width: 500, height: 320 },
  { src: edu5, alt: "edu 5", width: 500, height: 320 },
  { src: edu6, alt: "edu 4", width: 500, height: 320 },
  { src: edu7, alt: "edu 5", width: 500, height: 320 },
  { src: edu8, alt: "edu 4", width: 500, height: 320 },
  { src: edu9, alt: "edu 5", width: 500, height: 320 },
];

const valuesEducation: GalleryItem[] = [
  { src: value1, alt: "Values Education 1", width: 500, height: 320 },
  { src: value2, alt: "Values Education 2", width: 500, height: 320 },
  { src: value3, alt: "Values Education 3", width: 500, height: 320 },
  { src: value4, alt: "Values Education 4", width: 500, height: 320 },
  { src: value5, alt: "Values Education 3", width: 500, height: 320 },
  { src: value6, alt: "Values Education 4", width: 500, height: 320 },
  { src: value7, alt: "Values Education 3", width: 500, height: 320 },
  { src: value8, alt: "Values Education 4", width: 500, height: 320 },
];

const festivals: GalleryItem[] = [
  { src: fest1, alt: "Gallery 1", width: 400, height: 400 },
  { src: fest2, alt: "Gallery 2", width: 500, height: 320 },
  { src: fest3, alt: "Gallery 3", width: 500, height: 320 },
  { src: fest4, alt: "Gallery 4", width: 500, height: 320 },
  { src: fest5, alt: "Gallery 3", width: 500, height: 320 },
  { src: fest6, alt: "Gallery 4", width: 500, height: 320 },
  { src: fest7, alt: "Gallery 3", width: 500, height: 320 },
  { src: fest8, alt: "Gallery 4", width: 500, height: 320 },
];

// Masonry Image component
const MasonryImage: React.FC<MasonryImageProps> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="relative overflow-hidden bg-gray-900 cursor-pointer transform hover:scale-[1.02] transition-all duration-300 ease-out rounded-lg border border-gray-700/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
      )}
      <div className="aspect-[4/5]">
        <Image
          src={item.src}
          alt={item.alt || ""}
          fill
          className={`object-cover transition-all duration-300 ease-out ${
            isHovered ? "scale-105" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          priority={index < 6}
        />
      </div>
      <div
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

// Tabs with gallery
// Tabs with gallery
const ModernGalleryLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ANNADAN");

  const tabData: Record<string, { images: GalleryItem[]; subtitle: string }> = {
    ANNADAN: {
      images: food,
      subtitle:
        "Nourishing bodies and nurturing souls through community meals, \nfeeding programs, and compassionate food distribution drives.",
    },
    VIDYADAAN: {
      images: education,
      subtitle:
        "Empowering minds and building brighter futures through scholarships, \neducational resources, and lifelong learning initiatives.",
    },
    VALUESEDUCATION: {
      images: valuesEducation,
      subtitle:
        "Shaping character and inspiring moral excellence through values-based education, \ncultivating empathy, integrity, and ethical leadership.",
    },
    FESTIVALS: {
      images: festivals,
      subtitle:
        "Celebrating traditions and spreading joy with vibrant cultural programs, \nfostering unity and preserving our rich heritage.",
    },
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10">
      <div className="container mx-auto px-6">
        {/* Tabs */}
        <div className="flex flex-col lg:flex-row justify-center mb-4">
          <div className="bg-white lg:rounded-full shadow-md px-4 py-3 flex flex-wrap justify-center gap-4">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-blue-900 text-white shadow-lg"
                    : "bg-transparent text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Heading */}

        <p className="py-3 text-gray-800 text-md font-bold italic max-w-2xl mx-auto mb-2">
          {tabData[activeTab].subtitle}
        </p>

        {/* Gallery */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
  {/* Mobile: Single column with all 8 images */}
  <div className="lg:hidden space-y-4">
    <div className="grid grid-cols-1 gap-2">
      {tabData[activeTab].images.slice(0, 8).map((item, idx) => (
        <MasonryImage key={idx} item={item} index={idx} />
      ))}
    </div>
  </div>

  {/* Desktop: Two columns with 4 images each */}
  <div className="hidden lg:block space-y-4">
    <div className="grid grid-cols-2 gap-2">
      {tabData[activeTab].images.slice(0, 4).map((item, idx) => (
        <MasonryImage key={idx} item={item} index={idx} />
      ))}
    </div>
  </div>
  <div className="hidden lg:block space-y-4">
    <div className="grid grid-cols-2 gap-2">
      {tabData[activeTab].images.slice(4, 8).map((item, idx) => (
        <MasonryImage key={idx + 4} item={item} index={idx + 4} />
      ))}
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default ModernGalleryLayout;
