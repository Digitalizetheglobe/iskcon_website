'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="font-sans text-white-800">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="/images/radha2.jpg"
          alt="Join Our Mission"
          layout="fill"
          objectFit="cover"
          className="rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Mission</h1>
          <p className="max-w-xl text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur. Nisi praesent malesuada quam habitant pellentesque massa orci neque.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium">
            Become a Volunteer
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="max-w-3xl mx-auto mb-6 text-gray-600">
          Our NGO is dedicated to making a positive impact through community services and education. Join us in our mission
          to create lasting change and empower individuals through volunteering.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-10">
          Become a Volunteer
        </button>
        <div className="max-w-md mx-auto">
          <Image src="/images/tulsi.png" alt="Mission" width={600} height={400} className="rounded-lg" />
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="bg-gray-100 py-16 px-6">
<h2 className="text-2xl font-semibold text-center mb-8">Volunteer Benefits</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Benefit 1 */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold text-lg">Community Engagement</h3>
              <p className="text-sm text-gray-600 mt-1">Connect with local communities and make a difference.</p>
              <button className="mt-2 text-orange-500 border border-orange-300 rounded px-3 py-1 text-sm">Learn More</button>
            </div>
            <Image src="/images/sun.png" alt="Community" width={100} height={80} className="rounded-md ml-4" />
          </div>

          {/* Benefit 2 */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold text-lg">Skill Development</h3>
              <p className="text-sm text-gray-600 mt-1">Enhance your skills with hands-on experience.</p>
              <button className="mt-2 text-orange-500 border border-orange-300 rounded px-3 py-1 text-sm">See Workshops</button>
            </div>
            <Image src="/images/sun1.png" alt="Skills" width={100} height={80} className="rounded-md ml-4" />
          </div>

          {/* Benefit 3 */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold text-lg">Networking</h3>
              <p className="text-sm text-gray-600 mt-1">Meet new people and expand your network.</p>
              <button className="mt-2 text-orange-500 border border-orange-300 rounded px-3 py-1 text-sm">Join Events</button>
            </div>
            <Image src="/images/vol3.jpg" alt="Networking" width={100} height={80} className="rounded-md ml-4" />
          </div>

          {/* Benefit 4 */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold text-lg">Wellness & Self-care</h3>
              <p className="text-sm text-gray-600 mt-1">Focus on self-care and improve your well-being.</p>
              <button className="mt-2 text-orange-500 border border-orange-300 rounded px-3 py-1 text-sm">Explore Tips</button>
            </div>
            <Image src="/images/vol4.jpg" alt="Wellness" width={100} height={80} className="rounded-md ml-4" />
          </div>
        </div>
      </section>

      {/* Upcoming Opportunities */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-10">Upcoming Volunteer Opportunities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          {/* Card 1 */}
          <div className="border rounded-xl p-4">
            <h3 className="font-semibold text-lg mb-1">Tree Planting Day</h3>
            <p className="text-sm text-gray-500">Date: November 15, 2023</p>
            <p className="text-sm text-gray-600 mt-2">
              Join us for a tree-planting event to enhance our local park’s greenery.
            </p>
            <Image src="/images/plant.png" alt="Tree Planting" width={300} height={150} className="rounded-md my-3" />
            <button className="text-orange-500 border border-orange-300 rounded px-4 py-1 text-sm">Become a Volunteer</button>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-4">
            <h3 className="font-semibold text-lg mb-1">Beach Cleanup</h3>
            <p className="text-sm text-gray-500">Date: December 1, 2023</p>
            <p className="text-sm text-gray-600 mt-2">
              Help us clean up the beach and contribute to a cleaner ocean.
            </p>
            <Image src="/images/sea.png" alt="Beach Cleanup" width={300} height={150} className="rounded-md my-3" />
            <button className="text-orange-500 border border-orange-300 rounded px-4 py-1 text-sm">Become a Volunteer</button>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-4">
            <h3 className="font-semibold text-lg mb-1">Food Drive Support</h3>
            <p className="text-sm text-gray-500">Date: December 10, 2023</p>
            <p className="text-sm text-gray-600 mt-2">
              Support local families by assisting in our community food drive.
            </p>
            <Image src="/images/box.png" alt="Food Drive" width={300} height={150} className="rounded-md my-3" />
            <button className="text-orange-500 border border-orange-300 rounded px-4 py-1 text-sm">Become a Volunteer</button>
          </div>
        </div>

      </section>
    </main>
  );
}
