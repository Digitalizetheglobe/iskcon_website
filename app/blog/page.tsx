'use client';
import Image from 'next/image';
import { useState } from 'react';

const posts = [
  {
    image: '/images/t.png',
    author: 'Alec Whitten',
    date: '17 Jan 2022',
    title: 'Bill Walsh leadership lessons',
    description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    tags: ['Leadership', 'Management'],
  },
  {
    image: '/images/tr.png',
    author: 'Demi Wilkinson',
    date: '16 Jan 2022',
    title: 'PM mental models',
    description: 'Mental models are simple expressions of complex processes or relationships.',
    tags: ['Product', 'Research', 'Frameworks'],
  },
  {
    image: '/images/trr.png',
    author: 'Candice Wu',
    date: '15 Jan 2022',
    title: 'What is Wireframing?',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    tags: ['Design', 'Research'],
  },
  {
    image: '/images/tt.png',
    author: 'Natalie Craig',
    date: '14 Jan 2022',
    title: 'How collaboration makes us better designers',
    description: 'Collaboration can make our teams stronger, and our individual designs better.',
    tags: ['Design', 'Research'],
  },
  {
    image: '/images/trrr.png',
    author: 'Drew Cano',
    date: '13 Jan 2022',
    title: 'Our top 10 Javascript frameworks to use',
    description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    tags: ['Software Development', 'Tools', 'SaaS'],
  },
  {
    image: '/images/tra.png',
    author: 'Orlando Diggs',
    date: '12 Jan 2022',
    title: 'Podcast: Creating a better CX Community',
    description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    tags: ['Podcasts', 'Customer Success'],
  },
  {
    image: '/images/t.png',
    author: 'Alec Whitten',
    date: '17 Jan 2022',
    title: 'Bill Walsh leadership lessons',
    description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    tags: ['Leadership', 'Management'],
  },
  {
    image: '/images/tr.png',
    author: 'Demi Wilkinson',
    date: '16 Jan 2022',
    title: 'PM mental models',
    description: 'Mental models are simple expressions of complex processes or relationships.',
    tags: ['Product', 'Research', 'Frameworks'],
  },
  {
    image: '/images/trr.png',
    author: 'Candice Wu',
    date: '15 Jan 2022',
    title: 'What is Wireframing?',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    tags: ['Design', 'Research'],
  },
  {
    image: '/images/tt.png',
    author: 'Natalie Craig',
    date: '14 Jan 2022',
    title: 'How designers',
    description: 'Collaboration can make our teams stronger, and our individual designs better.',
    tags: ['Design', 'Research'],
  },
  {
    image: '/images/trrr.png',
    author: 'Drew Cano',
    date: '13 Jan 2022',
    title: 'Our top 10 Javascript frameworks to use',
    description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    tags: ['Software Development', 'Tools', 'SaaS'],
  },
  {
    image: '/images/tra.png',
    author: 'Orlando Diggs',
    date: '12 Jan 2022',
    title: 'Podcast: Creating a better CX Community',
    description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    tags: ['Podcasts', 'Customer Success'],
  },
];

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Calculate posts for current page
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const endIdx = startIdx + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIdx, endIdx);

  // Generate page numbers (show all if <= 5, else show first, last, current, and neighbors)
  let pageNumbers: (number | string)[] = [];
  if (totalPages <= 5) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= 3) {
      pageNumbers = [1, 2, 3, 4, '...', totalPages];
    } else if (currentPage >= totalPages - 2) {
      pageNumbers = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pageNumbers = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }
  }

  return (
    <main className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 max-w-6xl mx-auto">
      <p className="text-center text-xs sm:text-sm text-purple-600 font-medium mb-2">Our blog</p>
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories and interviews</h1>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto text-sm sm:text-base">
        Subscribe to learn about new product features, the latest in technology, solutions, and updates.
      </p>

      {/* Email Subscription */}
      <div className="flex flex-col sm:flex-row justify-center gap-2 mb-8 sm:mb-16 w-full max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-80"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 w-full sm:w-auto">
          Subscribe
        </button>
      </div>
      <p className="text-center text-xs text-gray-500 mb-8 sm:mb-10">
        We care about your data in our{' '}
        <a href="#" className="underline">
          privacy policy
        </a>
      </p>

      {/* Recent Blog Posts */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Recent blog posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Post 1 */}
        <div>
          <Image src="/images/lap3.png" alt="Post 1" width={600} height={400} className="rounded-md w-full h-auto object-cover" />
          <p className="text-xs sm:text-sm text-purple-600 font-medium mt-4">Olivia Rhye • 20 Jan 2022</p>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-1 flex items-center gap-1">
            UX review presentations{' '}
            <span className="ml-1">↗</span>
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            How do you create compelling presentations that wow your colleagues and impress your managers?
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-purple-100 text-purple-800 px-2 py-1 text-xs rounded-md">Design</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-md">Research</span>
            <span className="bg-pink-100 text-pink-800 px-2 py-1 text-xs rounded-md">Presentation</span>
          </div>
        </div>

        {/* Post 2 */}
        <div>
          <Image src="/images/lap.png" alt="Post 2" width={600} height={400} className="rounded-md w-full h-auto object-cover" />
          <p className="text-xs sm:text-sm text-purple-600 font-medium mt-4">Phoenix Baker • 19 Jan 2022</p>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-1">Migrating to Linear 101</h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-purple-100 text-purple-800 px-2 py-1 text-xs rounded-md">Design</span>
            <span className="bg-pink-100 text-pink-800 px-2 py-1 text-xs rounded-md">Research</span>
          </div>
        </div>

        {/* Post 3 */}
        <div>
          <Image src="/images/lap1.png" alt="Post 3" width={600} height={400} className="rounded-md w-full h-auto object-cover" />
          <p className="text-xs sm:text-sm text-purple-600 font-medium mt-4">Lana Steiner • 18 Jan 2022</p>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-1">Building your API Stack</h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded-md">Design</span>
            <span className="bg-pink-100 text-pink-800 px-2 py-1 text-xs rounded-md">Research</span>
          </div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">All blog posts</h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {currentPosts.map((post, index) => (
          <div key={index}>
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-auto"
            />
            <p className="text-xs sm:text-sm text-purple-700 font-medium mt-4">
              {post.author} • {post.date}
            </p>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-1 flex items-center gap-1">
              {post.title}
              <span className="ml-1">↗</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">{post.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 sm:mt-12 text-xs sm:text-sm text-gray-600 gap-4 sm:gap-0">
        <button
          className={`px-4 py-2 rounded-md transition font-medium ${
            currentPage === 1
              ? 'bg-purple-600 text-white opacity-50 cursor-not-allowed'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>
        <div className="flex flex-wrap gap-2 justify-center">
          {pageNumbers.map((n, i) =>
            typeof n === 'number' ? (
              <button
                key={i}
                className={`px-3 py-1 rounded ${
                  n === currentPage
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-200 text-gray-700'
                }`}
                onClick={() => setCurrentPage(n)}
              >
                {n}
              </button>
            ) : (
              <span key={i} className="px-3 py-1">{n}</span>
            )
          )}
        </div>
        <button
          className={`px-4 py-2 rounded-md transition font-medium ${
            currentPage === totalPages
              ? 'bg-purple-600 text-white opacity-50 cursor-not-allowed'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>


    </main>
  );
}
