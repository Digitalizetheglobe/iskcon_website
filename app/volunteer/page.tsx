'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="font-sans text-white-800">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[500px]">
        <Image
          src="/images/radha2.jpg"
          alt="Join Our Mission"
          layout="fill"
          objectFit="cover"
          className="rounded-b-2xl md:rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">Join Our Mission</h1>
          <p className="max-w-xs sm:max-w-xl text-sm sm:text-lg mb-4 md:mb-6">
            Lorem ipsum dolor sit amet consectetur. Nisi praesent malesuada quam habitant pellentesque massa orci neque.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white w-fit sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium">
            Become a Volunteer
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 md:py-16 text-center px-2 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Join Our Mission</h2>
        <p className="max-w-xs sm:max-w-3xl mx-auto mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base">
          Our NGO is dedicated to making a positive impact through community services and education. Join us in our mission
          to create lasting change and empower individuals through volunteering.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white w-fit sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-10">
          Become a Volunteer
        </button>
        <div className="max-w-xs sm:max-w-md mx-auto">
          <Image src="/images/tulsi.png" alt="Mission" width={400} height={250} className="rounded-lg w-full h-auto" />
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="bg-gray-100 py-8 md:py-16 px-2 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">Volunteer Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Benefit 1 */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 border rounded-lg">
            <div className="w-full sm:w-auto">
              <h3 className="font-semibold text-base sm:text-lg">Community Engagement</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Connect with local communities and make a difference.</p>
              <button className="mt-2 text-orange-500 border border-orange-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm">Learn More</button>
            </div>
            <Image src="/images/sun.png" alt="Community" width={80} height={60} className="rounded-md ml-0 sm:ml-4 mt-2 sm:mt-0" />
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 border rounded-lg">
            <div className="w-full sm:w-auto">
              <h3 className="font-semibold text-base sm:text-lg">Skill Development</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Enhance your skills with hands-on experience.</p>
              <button className="mt-2 text-orange-500 border border-orange-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm">See Workshops</button>
            </div>
            <Image src="/images/sun1.png" alt="Skills" width={80} height={60} className="rounded-md ml-0 sm:ml-4 mt-2 sm:mt-0" />
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 border rounded-lg">
            <div className="w-full sm:w-auto">
              <h3 className="font-semibold text-base sm:text-lg">Networking</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Meet new people and expand your network.</p>
              <button className="mt-2 text-orange-500 border border-orange-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm">Join Events</button>
            </div>
            <Image src="/images/vol3.jpg" alt="Networking" width={80} height={60} className="rounded-md ml-0 sm:ml-4 mt-2 sm:mt-0" />
          </div>

          {/* Benefit 4 */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 border rounded-lg">
            <div className="w-full sm:w-auto">
              <h3 className="font-semibold text-base sm:text-lg">Wellness & Self-care</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Focus on self-care and improve your well-being.</p>
              <button className="mt-2 text-orange-500 border border-orange-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm">Explore Tips</button>
            </div>
            <Image src="/images/vol4.jpg" alt="Wellness" width={80} height={60} className="rounded-md ml-0 sm:ml-4 mt-2 sm:mt-0" />
          </div>
        </div>
      </section>

      {/* Upcoming Opportunities */}
      <section className="px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-10">Upcoming Volunteer Opportunities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-center">
          {/* Card 1 */}
          <div className="border rounded-xl p-3 sm:p-4">
            <h3 className="font-semibold text-base sm:text-lg mb-1">Tree Planting Day</h3>
            <p className="text-xs sm:text-sm text-gray-500">Date: November 15, 2023</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Join us for a tree-planting event to enhance our local park’s greenery.
            </p>
            <Image src="/images/plant.png" alt="Tree Planting" width={250} height={120} className="rounded-md my-2 sm:my-3 w-full h-auto" />
            <button className="text-orange-500 border border-orange-300 rounded px-3 sm:px-4 py-1 text-xs sm:text-sm w-fit sm:w-auto">Become a Volunteer</button>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-3 sm:p-4">
            <h3 className="font-semibold text-base sm:text-lg mb-1">Beach Cleanup</h3>
            <p className="text-xs sm:text-sm text-gray-500">Date: December 1, 2023</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Help us clean up the beach and contribute to a cleaner ocean.
            </p>
            <Image src="/images/sea.png" alt="Beach Cleanup" width={250} height={120} className="rounded-md my-2 sm:my-3 w-full h-auto" />
            <button className="text-orange-500 border border-orange-300 rounded px-3 sm:px-4 py-1 text-xs sm:text-sm w-fit sm:w-auto">Become a Volunteer</button>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-3 sm:p-4">
            <h3 className="font-semibold text-base sm:text-lg mb-1">Food Drive Support</h3>
            <p className="text-xs sm:text-sm text-gray-500">Date: December 10, 2023</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Support local families by assisting in our community food drive.
            </p>
            <Image src="/images/box.png" alt="Food Drive" width={250} height={120} className="rounded-md my-2 sm:my-3 w-full h-auto" />
            <button className="text-orange-500 border border-orange-300 rounded px-3 sm:px-4 py-1 text-xs sm:text-sm w-fit sm:w-auto">Become a Volunteer</button>
          </div>
        </div>
      </section>
    </main>
  );
}
