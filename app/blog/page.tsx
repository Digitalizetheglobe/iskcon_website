"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { Calendar, User} from "lucide-react";
import krihna_jnamashtmi from "../../public/images/krihna_jnamashtmi.jpeg";
import bhagvatGita from "../../public/blogs/bhagvatGita.jpeg";
import bookMarathon from "../../public/blogs/book marathon.jpeg";
import deity from "../../public/blogs/deity.jpeg";
import eco_friendly from "../../public/blogs/eco_friendly.jpeg";
import harinam from "../../public/blogs/harinam.jpeg";
import meditation from "../../public/blogs/meditation.jpeg";
import radhaAsthmi from "../../public/blogs/rada_Asthmi.jpeg";
import stories from "../../public/blogs/storiesofkrishna.jpeg";
import image from "../../public/images/image-140.png";

// Type Definitions
interface BlogPost {
  slug: string;
  id: number;
  image: StaticImageData;
  author: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  category: string;
  content: string;
  tags: string[];
}

// Blog images mapping
const blogImages = {
  krihna_jnamashtmi,
  radhaAsthmi,
  bhagvatGita,
  image,
  harinam,
  eco_friendly,
  bookMarathon,
  deity,
  meditation,
  stories,
};

const blogPosts: BlogPost[] = [
  {
    slug: "sri-krishna-janmashtami-celebrations",
    id: 1,
    image: blogImages.krihna_jnamashtmi,
    author: "ISKCON Mumbai",
    date: "19 Aug 2025",
    readTime: "5 min read",
    title: "Sri Krishna Janmashtami Celebrations",
    description:
      "Experience the grandeur of Sri Krishna Janmashtami with abhishek, kirtans, and cultural programs.",
    category: "Festival",
    content: `Sri Krishna Janmashtami, the celebration of Lord Krishna's divine appearance, is one of the most joyous festivals in the Vedic calendar...`,
    tags: ["Krishna", "Festival", "Celebration", "Spirituality"],
  },
  {
    slug: "sri-radhashtami-festival",
    id: 2,
    image: blogImages.radhaAsthmi,
    author: "ISKCON Chowpatty",
    date: "6 Sep 2025",
    readTime: "4 min read",
    title: "Sri Radhashtami Festival",
    description:
      "A day to glorify Srimati Radharani with bhajans, lectures, and special darshan.",
    category: "Festival",
    content: `Sri Radhashtami marks the auspicious appearance day of Srimati Radharani...`,
    tags: ["Radharani", "Festival", "Devotion", "Divine Love"],
  },
  {
    slug: "bhagavad-gita-modern-life",
    id: 3,
    image: blogImages.bhagvatGita,
    author: "HH Radhanath Swami",
    date: "10 Aug 2025",
    readTime: "8 min read",
    title: "Bhagavad Gita for Modern Life",
    description:
      "Learn how the timeless wisdom of the Gita applies to our daily challenges.",
    category: "Philosophy",
    content: `The Bhagavad Gita, spoken by Lord Krishna to Arjuna on the battlefield of Kurukshetra...`,
    tags: ["Bhagavad Gita", "Philosophy", "Wisdom", "Modern Life"],
  },
  {
    slug: "feeding-hungry-with-love",
    id: 4,
    image: blogImages.image,
    author: "ISKCON Food for Life",
    date: "2 Aug 2025",
    readTime: "6 min read",
    title: "Feeding the Hungry with Love",
    description:
      "Join our prasadam distribution program and serve thousands every day.",
    category: "Service",
    content: `Food for Life, the world's largest vegetarian food relief program...`,
    tags: ["Food for Life", "Service", "Compassion", "Community"],
  },
  {
    slug: "harinam-sankirtan-marine-drive",
    id: 5,
    image: blogImages.harinam,
    author: "ISKCON Kirtan Team",
    date: "28 Jul 2025",
    readTime: "3 min read",
    title: "Harinam Sankirtan at Marine Drive",
    description:
      "An evening of joyous chanting and dancing in the streets of Mumbai.",
    category: "Kirtan",
    content: `Harinam Sankirtan - the congregational chanting of the holy names...`,
    tags: ["Harinam", "Kirtan", "Chanting", "Devotion"],
  },
  {
    slug: "eco-friendly-pilgrimage-experience",
    id: 6,
    image: blogImages.eco_friendly,
    author: "ISKCON Govardhan Eco Village",
    date: "22 Jul 2025",
    readTime: "7 min read",
    title: "Eco-Friendly Pilgrimage Experience",
    description:
      "Discover sustainable living while connecting with the Divine at GEV.",
    category: "Environment",
    content: `The Govardhan Eco Village (GEV) demonstrates how spiritual life...`,
    tags: ["Eco-Friendly", "Sustainability", "Spiritual Living", "Environment"],
  },
  {
    slug: "book-marathon-spiritual-reading",
    id: 7,
    image: blogImages.bookMarathon,
    author: "ISKCON Education Team",
    date: "15 Jul 2025",
    readTime: "5 min read",
    title: "Book Marathon: Spiritual Reading Challenge",
    description:
      "Join our annual book distribution and reading marathon to spread spiritual knowledge.",
    category: "Education",
    content: `The annual Book Marathon is a celebration of spiritual literature...`,
    tags: ["Books", "Education", "Spiritual Literature", "Community"],
  },
  {
    slug: "deity-worship-temple-traditions",
    id: 8,
    image: blogImages.deity,
    author: "Temple Priests",
    date: "8 Jul 2025",
    readTime: "6 min read",
    title: "Deity Worship: Temple Traditions",
    description:
      "Discover the sacred art of deity worship and its spiritual significance.",
    category: "Worship",
    content: `Deity worship is the heart of temple life...`,
    tags: ["Deity", "Worship", "Temple", "Tradition"],
  },
  {
    slug: "meditation-spiritual-practice",
    id: 9,
    image: blogImages.meditation,
    author: "Yoga Instructors",
    date: "1 Jul 2025",
    readTime: "7 min read",
    title: "Meditation and Spiritual Practice",
    description:
      "Learn various meditation techniques for spiritual growth and inner peace.",
    category: "Meditation",
    content: `Meditation is the bridge between our material existence...`,
    tags: ["Meditation", "Spiritual Practice", "Inner Peace", "Mindfulness"],
  },
  {
    slug: "krishna-stories-timeless-wisdom",
    id: 10,
    image: blogImages.stories,
    author: "Storytellers",
    date: "25 Jun 2025",
    readTime: "4 min read",
    title: "Krishna Stories: Timeless Wisdom",
    description:
      "Explore the enchanting stories of Lord Krishna and their deeper spiritual meanings.",
    category: "Stories",
    content: `The stories of Lord Krishna are not mere fairy tales...`,
    tags: ["Krishna", "Stories", "Wisdom", "Culture"],
  },
];

// Blog Post Card Component
const BlogPostCard: React.FC<{
  post: BlogPost;
  onClick: (post: BlogPost) => void;
  isFeatured?: boolean;
  className?: string;
}> = ({ post, onClick, isFeatured = false, className = "" }) => {
  if (isFeatured) {
    return (
      // 
      <></>
    );
  }

  return (
    <article
      onClick={() => onClick(post)}
      className={`bg-white rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group ${className}`}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* <div className="absolute top-4 left-4">
          <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {post.category}
          </span>
        </div> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-blue-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {post.description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <User size={14} />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

// Main Blog System Component
const BlogSystem: React.FC = () => {
  const router = useRouter();

  // Handle blog post click
  const openPost = (post: BlogPost): void => {
    router.push(`/blog/${post.slug}`);
  };

  // Featured post is first one
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            Spiritual <span className="text-orange-500">Insights</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover ancient wisdom for modern living through festivals,
            philosophy, service, and spiritual practices that transform hearts
            and minds.
          </p>
        </div>

        {/* Featured Post */}
        <section className="mb-16">
          {/* <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Featured Article
          </h2> */}
          <BlogPostCard
            post={featuredPost}
            onClick={openPost}
            isFeatured={true}
            className="max-w-5xl mx-auto"
          />
        </section>

        {/* Regular Posts Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-blue-900">
              Latest Articles
            </h2>
            <span className="text-gray-500 text-sm">
              {blogPosts.length}{" "}
              {blogPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First blog - wide with flex row */}
            {regularPosts[0] && (
              <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <div
                  className="flex flex-col md:flex-row h-full cursor-pointer group"
                  onClick={() => openPost(regularPosts[0])}
                >
                  {/* Image */}
                  <div className="md:w-1/2 h-60 md:h-auto overflow-hidden">
                    <Image
                      src={regularPosts[0].image}
                      alt={regularPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    {/* <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
                      {regularPosts[0].category}
                    </span> */}
                    <h3 className="font-bold text-2xl text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {regularPosts[0].title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {regularPosts[0].description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span className="font-medium">
                          {regularPosts[0].author}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{regularPosts[0].date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Second blog (normal layout) */}
            {regularPosts[1] && (
              <BlogPostCard post={regularPosts[1]} onClick={openPost} />
            )}

            {/* Remaining blogs */}
            {regularPosts.slice(2).map((post: BlogPost) => (
              <BlogPostCard key={post.id} post={post} onClick={openPost} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogSystem;
