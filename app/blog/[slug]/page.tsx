// app/blog/[slug]/page.tsx
import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import krihna_jnamashtmi from "../../../public/images/krihna_jnamashtmi.jpeg";
import bhagvatGita from "../../../public/blogs/bhagvatGita.jpeg";
import bookMarathon from "../../../public/blogs/book marathon.jpeg";
import deity from "../../../public/blogs/deity.jpeg";
import eco_friendly from "../../../public/blogs/eco_friendly.jpeg";
import harinam from "../../../public/blogs/harinam.jpeg";
import meditation from "../../../public/blogs/meditation.jpeg";
import radhaAsthmi from "../../../public/blogs/rada_Asthmi.jpeg";
import stories from "../../../public/blogs/storiesofkrishna.jpeg";
import image from "../../../public/images/image-140.png";

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

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

const blogPosts: BlogPost[] = [
  {
    slug: "sri-krishna-janmashtami-celebrations",
    id: 1,
    image: blogImages.krihna_jnamashtmi,
    author: "ISKCON Mumbai",
    date: "19 Aug 2025",
    readTime: "5 min read",
    title: "Sri Krishna Janmashtami Celebrations",
    description: "Experience the grandeur of Sri Krishna Janmashtami with abhishek, kirtans, and cultural programs.",
    category: "Festival",
    content: `Sri Krishna Janmashtami, the celebration of Lord Krishna's divine appearance, is one of the most joyous festivals in the Vedic calendar. This year, ISKCON Mumbai presents a grand celebration that promises to immerse devotees in spiritual bliss.

The Divine Celebration

The festivities begin with the traditional abhishek ceremony at midnight, marking the exact moment of Lord Krishna's appearance over 5,000 years ago in Mathura. Devotees gather in large numbers to witness this sacred ritual, where the deity is bathed with various auspicious items including milk, honey, ghee, and rose water.

Cultural Programs

Throughout the day, we present captivating cultural performances including classical dances, devotional songs, and dramatic presentations of Krishna's pastimes. Children dressed as little Krishna and Radha add to the charm of the celebration.

Spiritual Significance

Janmashtami is not merely a birthday celebration; it's a reminder of the eternal presence of the Divine in our lives. Lord Krishna's teachings in the Bhagavad Gita continue to guide humanity towards spiritual enlightenment and purposeful living.

Join Us

We invite everyone to be part of this divine celebration. Come experience the joy, devotion, and spiritual upliftment that this sacred festival brings. Prasadam will be distributed to all attendees.`,
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
    description: "A day to glorify Srimati Radharani with bhajans, lectures, and special darshan.",
    category: "Festival",
    content: `Sri Radhashtami marks the auspicious appearance day of Srimati Radharani, the eternal consort of Lord Krishna and the embodiment of divine love and devotion.

The Divine Feminine

Srimati Radharani represents the highest form of devotional service and pure love for the Supreme Lord. Her love for Krishna is considered the pinnacle of spiritual emotion and devotion.

Festival Highlights

The celebration includes soul-stirring bhajans, enlightening lectures about Radharani's glories, and a special darshan of the beautifully decorated deities. Devotees offer flowers, sweets, and their heartfelt prayers.

Spiritual Teachings

Through Radharani's example, we learn about selfless love, complete surrender, and the joy that comes from serving the Divine with pure devotion.`,
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
    description: "Learn how the timeless wisdom of the Gita applies to our daily challenges.",
    category: "Philosophy",
    content: `The Bhagavad Gita, spoken by Lord Krishna to Arjuna on the battlefield of Kurukshetra, contains timeless wisdom that is remarkably relevant to our modern challenges and dilemmas.

Eternal Wisdom

Despite being spoken over 5,000 years ago, the Gita's teachings address universal human concerns: duty vs. desire, material success vs. spiritual growth, and finding purpose in life.

Practical Applications

In today's fast-paced world, the Gita teaches us how to maintain equanimity in success and failure, how to work without attachment to results, and how to find inner peace amidst external chaos.

Key Lessons

The text emphasizes the importance of dharma (righteous duty), the temporary nature of material existence, and the eternal journey of the soul towards self-realization.

Modern Relevance

From corporate boardrooms to personal relationships, the Gita's principles of ethical living, selfless service, and spiritual awareness offer practical solutions to contemporary problems.`,
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
    description: "Join our prasadam distribution program and serve thousands every day.",
    category: "Service",
    content: `Food for Life, the world's largest vegetarian food relief program, embodies the principle of seeing all beings as spiritual souls deserving love and care.

Our Mission

Every day, we distribute thousands of plates of nutritious, sanctified food (prasadam) to those in need, regardless of their background, religion, or social status.

The Power of Prasadam

Prasadam is not ordinary food - it's spiritually prepared and offered to the Divine with love and devotion. This sacred food purifies both the body and consciousness of those who receive it.

Community Impact

Our program reaches schools, hospitals, disaster areas, and urban poor communities. We believe that no one should go to bed hungry when there are resources available to help.

How to Get Involved

Join our volunteer team and experience the joy of selfless service. Help in cooking, packing, or distributing prasadam and be part of this beautiful mission of compassion.`,
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
    description: "An evening of joyous chanting and dancing in the streets of Mumbai.",
    category: "Kirtan",
    content: `Harinam Sankirtan - the congregational chanting of the holy names - transforms the streets of Mumbai into a spiritual oasis filled with divine sound vibrations.

The Ancient Practice

This 500-year-old tradition, popularized by Sri Chaitanya Mahaprabhu, involves singing the names of God in public spaces, sharing spiritual joy with everyone.

Marine Drive Experience

Against the backdrop of Mumbai's stunning coastline, devotees gather every week to chant and dance, creating an atmosphere of pure devotion and happiness.

Universal Appeal

People from all walks of life join in, regardless of their religious background. The holy names have the power to awaken the dormant love of God in everyone's heart.

Join the Bliss

Come experience the transcendental joy of Harinam. No experience necessary - just bring an open heart and voice.`,
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
    description: "Discover sustainable living while connecting with the Divine at GEV.",
    category: "Environment",
    content: `The Govardhan Eco Village (GEV) demonstrates how spiritual life and environmental consciousness can beautifully coexist in harmony with nature.

Sustainable Spirituality

Located in the Sahyadri mountains, GEV showcases sustainable practices including organic farming, renewable energy, water conservation, and waste management.

Learning Experiences

Visitors can participate in cow protection programs, organic farming workshops, traditional cooking classes, and learn about alternative energy solutions.

Spiritual Connection

The village temple provides a serene environment for meditation, prayer, and spiritual discourse, surrounded by the natural beauty of the Western Ghats.

Educational Programs

GEV offers courses in sustainable living, permaculture, and spiritual ecology, showing how ancient wisdom can address modern environmental challenges.

Visit Us

Plan your eco-friendly pilgrimage to experience sustainable living while deepening your spiritual journey in this unique ashram community.`,
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
    description: "Join our annual book distribution and reading marathon to spread spiritual knowledge.",
    category: "Education",
    content: `The annual Book Marathon is a celebration of spiritual literature and the transformative power of sacred texts in our modern world.

The Power of Sacred Literature

Spiritual books are not mere collections of words; they are vessels of transcendental knowledge that can transform consciousness and awaken our dormant spiritual potential.

Marathon Goals

Our mission is to distribute thousands of spiritual books including the Bhagavad Gita, Srimad Bhagavatam, and other Vedic literature to seekers around the world.

Community Participation

Volunteers from all walks of life participate in this noble mission, sharing wisdom through book distribution in colleges, offices, public spaces, and community events.

Reading Programs

Beyond distribution, we organize reading groups and discussion sessions where participants explore the profound teachings together.

Join the Mission

Become part of this spiritual revolution by volunteering in book distribution or joining our reading circles. Help us spread ancient wisdom for modern transformation.`,
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
    description: "Discover the sacred art of deity worship and its spiritual significance.",
    category: "Worship",
    content: `Deity worship is the heart of temple life, representing the loving exchange between devotees and the Supreme Lord through His manifested form.

Sacred Traditions

The worship of deities follows ancient Vedic traditions passed down through generations, involving specific rituals, offerings, and ceremonial procedures.

Daily Schedule

Temple worship follows a structured daily schedule with multiple arati ceremonies, offerings of food, flowers, and devotional songs throughout the day.

Spiritual Science

Deity worship is not idol worship but a spiritual science that allows devotees to serve the Lord directly and receive His divine mercy and blessings.

Devotional Service

Through deity worship, devotees develop love, humility, and devotion while offering their time, energy, and resources in service to the Divine.

Temple Experience

Visit our temple to witness the beauty of deity worship and participate in this ancient tradition that connects us directly with the Divine presence.`,
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
    description: "Learn various meditation techniques for spiritual growth and inner peace.",
    category: "Meditation",
    content: `Meditation is the bridge between our material existence and spiritual consciousness, offering a path to inner peace and divine connection.

Ancient Practices

Drawing from thousands of years of Vedic wisdom, meditation practices help quiet the mind and awaken our spiritual awareness.

Different Techniques

From mantra meditation to breath control, visualization to mindful awareness, various techniques cater to different temperaments and spiritual needs.

Daily Practice

Establishing a regular meditation routine transforms our consciousness gradually, bringing clarity, peace, and spiritual insight into our daily lives.

Benefits

Regular meditation practice reduces stress, increases focus, develops compassion, and opens the heart to divine love and wisdom.

Join Our Classes

Participate in our guided meditation sessions and learn from experienced practitioners who can guide you on your spiritual journey.`,
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
    description: "Explore the enchanting stories of Lord Krishna and their deeper spiritual meanings.",
    category: "Stories",
    content: `The stories of Lord Krishna are not mere fairy tales but profound spiritual teachings wrapped in captivating narratives that touch hearts across generations.

Divine Pastimes

Krishna's childhood pastimes in Vrindavan, His youth in Mathura, and His role in the Mahabharata reveal different aspects of the Divine personality.

Spiritual Lessons

Each story contains multiple layers of meaning, teaching us about love, duty, courage, wisdom, and the eternal relationship between the soul and the Supreme.

Universal Appeal

These timeless stories appeal to people of all ages and backgrounds, offering guidance for life's challenges through Krishna's example.

Cultural Heritage

Krishna stories form an integral part of India's cultural and spiritual heritage, passed down through generations via oral traditions and sacred texts.

Story Sessions

Join our weekly storytelling sessions where experienced narrators share these beautiful tales and their spiritual significance.`,
    tags: ["Krishna", "Stories", "Wisdom", "Culture"],
  }
];

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | ISKCON Blog`,
    description: post.description,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image.src,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Enhanced content rendering function
function renderContent(content: string) {
  return content
    .trim()
    .split(/\n\n+/)
    .map((block, i) => {
      const text = block.trim();
      if (!text) return null;

      // Check if it's a heading (short line, mostly capital letters)
      if (text.length < 50 && /^[A-Z][A-Za-z\s'-]*$/.test(text) && !text.includes('.')) {
        return (
          <h2 key={i} className="text-2xl font-bold text-blue-900 mt-8 mb-4">
            {text}
          </h2>
        );
      }
      
      // Regular paragraph
      return (
        <p key={i} className="text-gray-700 leading-relaxed mb-4">
          {text}
        </p>
      );
    })
    .filter(Boolean);
}

// Main blog detail component
export default async function BlogDetail({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The requested blog post could not be found.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-blue-900 hover:text-orange-500 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        {/* Category badge */}
        <div className="mb-4">
          <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
            priority
          />
        </div>

        {/* Description */}
        <div className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-orange-500 pl-6">
          {post.description}
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}