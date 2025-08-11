"use client";

import { MapPin } from "lucide-react";

type Card = {
  id: number | string;
  name: string;
  
  location: string;
  text: string;
  avatar?: string;
};

type TestimonialSectionProps = {
  cardData: Card[];
};

// Sample data matching the design
const defaultCardData: Card[] = [
  {
    id: 1,
    name: "MARK ANTHONY",
   
    location: "New York, USA",
    text: "Fusce rutrum venesim, quis nostrud exercitat ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: 2,
    name: "ABIDA RAITH",
   
    location: "London, UK",
    text: "Fusce rutrum venesim, quis nostrud exercitat ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volens.",
  },
  {
    id: 3,
    name: "ANATOLIA EVA",
   
    location: "Paris, France",
    text: "Fusce rutrum venesim, quis nostrud exercitat ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volens.",
  },
  {
    id: 4,
    name: "LILY ROGE",
  
    location: "Toronto, Canada",
    text: "Fusce rutrum venesim, quis nostrud exercitat ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: 5,
    name: "TOM PARKMAN",

    location: "Sydney, Australia",
    text: "Fusce rutrum venesim, quis nostrud exercitat ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volens.",
  },
  {
    id: 6,
    name: "MONICA",
   
    location: "Berlin, Germany",
    text: "Fusce rutrum venesim, quis nostrud exercitat ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volens.",
  },
];

export default function TestimonialSection({
  cardData = defaultCardData,
}: TestimonialSectionProps) {
  return (
    <section className=" relative bg-[#f0f2f8] py-16 px-6 overflow-hidden ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Card 1 - Regular position */}
            <div className="bg-white rounded-2xl  hover:shadow-2xl transition-shadow p-6 relative">
              <div className="text-6xl text-orange-400  font-serif">&quot;</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {cardData[0]?.text}
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    {cardData[0]?.name}
                  </h4>
                  
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {cardData[0]?.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl  hover:shadow-2xl transition-shadow p-6 relative">
              <div className="text-6xl text-orange-400  font-serif">&quot;</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {cardData[3]?.text}
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    {cardData[3]?.name}
                  </h4>
                 
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {cardData[3]?.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Offset down */}
          <div className="flex flex-col gap-6 lg:mt-12">
            {/* Card 2 */}
            <div className="bg-white rounded-2xl  hover:shadow-2xl transition-shadow p-6 relative">
             <div className="text-6xl text-orange-400  font-serif">&quot;</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {cardData[1]?.text}
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    {cardData[1]?.name}
                  </h4>
                  
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {cardData[1]?.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl hover:shadow-2xl transition-shadow p-6 relative">
              <div className="text-6xl text-orange-400  font-serif">&quot;</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {cardData[4]?.text}
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    {cardData[4]?.name}
                  </h4>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {cardData[4]?.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Regular position */}
          <div className="flex flex-col gap-6">
            {/* Card 3 */}
            <div className="bg-white rounded-2xl  hover:shadow-2xl transition-shadow p-6 relative">
             <div className="text-6xl text-orange-400  font-serif">&quot;</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {cardData[2]?.text}
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    {cardData[2]?.name}
                  </h4>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {cardData[2]?.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl  hover:shadow-2xl transition-shadow p-6 relative">
              <div className="text-6xl text-orange-400  font-serif">&quot;</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {cardData[5]?.text}
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    {cardData[5]?.name}
                  </h4>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {cardData[5]?.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements - matching the image positions */}
      <div className="absolute top-10 right-10 w-6 h-6 bg-orange-400 rounded-tr-full"></div>
      {/* <div className="absolute top-40 right-32 w-4 h-4 bg-blue-400 rounded-full"></div> */}

      <div className=" sm:hidden lg:absolute bottom-20 left-12 w-8 h-8 bg-blue-900 rounded-bl-full"></div>

      <div className="absolute bottom-16 right-2 flex flex-col gap-2">
        <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
        <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
      </div>

      <div className="absolute top-20 left-1/4 w-3 h-3 bg-orange-400 rounded-full"></div>
      <div className=" sm:hidden lg:absolute bottom-32 right-1/3 w-5 h-5 bg-blue-900 rounded-full"></div>
    </section>
  );
}
