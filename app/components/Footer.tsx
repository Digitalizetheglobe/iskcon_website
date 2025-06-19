'use client';
import Link from "next/link";

import Image from 'next/image';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';
import logo from '../../public/images/logo.png';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0B3954] text-white w-full px-6 md:px-12 py-10">
        {/* Top Grid Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Logo + About Us */}
          <div>
            <div className="mb-4">
              <Image
                src={logo}
                alt="Hare Krishna Movement Logo"
                width={160}
                height={100}
                className="object-contain"
              />
            </div>
            <h2 className="text-[#F4A261] text-xl font-bold mb-2">About Us</h2>
            <p className="text-sm text-[#D1D5DB] leading-relaxed">
              "Hare Krishna Vidya (AIkYA viDYA)" an initiative of <br />
              HARE KRISHNA MOVEMENT INDIA is designed for students of classes <br />
              1st to 10th, especially in rural areas.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h2 className="text-[#F4A261] text-xl font-bold mb-2">Quick Links</h2>
            <ul className="space-y-1 text-sm">
              <li>Our Initiative</li>
              <li>Gallery</li>
              <li>
  <Link href="/blog" className="text-blue-600 hover:underline">  
 Blog
  </Link>
</li>
<li>Terms & Conditions</li>
<li>
  <Link href="/policies" className="text-blue-600 hover:underline">  
    Privacy Policy
  </Link>
</li>
<li>
  <Link href="/refund" className="text-blue-600 hover:underline">  
    Refund Policy
  </Link>
</li>
<li>
  <Link href="/volunteer" className="text-blue-600 hover:underline">  
    volunteer
  </Link>
</li>
<li>Certificates</li>
            </ul>
          </div>

          {/* Right: Contact Us */}
          <div>
            <h2 className="text-[#F4A261] text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-sm mb-4">
              Hare Krishna Vidya (Aikya Vidya)<br />
              an initiative of <br />
              HARE KRISHNA MOVEMENT INDIA.
            </p>
            <div className="flex items-center gap-2 text-sm mb-2">
              <FaPhoneAlt />
              <span>+91 81217 95663</span>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <FaPhoneAlt />
              <span>+91 83283 89862</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaEnvelope />
              <span>connect2aikyavidya@gmail.com</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="bg-[#002A42] pt-4 pb-3 px-2 flex flex-col md:flex-row items-center justify-between text-sm text-white">
        <p className="mb-2 md:mb-0">
          Copyright © 2024 Hare Krishna Vidya - Aikya Vidya
        </p>
        <div className="flex gap-4 text-lg">
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}