'use client';

import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `hover:text-orange-500 transition ${
      pathname === href ? 'text-orange-600 font-semibold underline' : ''
    }`;

  return (
    <header>
      <div className="flex items-center justify-between px-6 md:px-14 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <span className="text-blue-900">HARE KRISHNA</span>{" "}
          <span className="text-orange-400">VIDYA</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-black font-medium">
          <Link href="/" className={linkClass('/')}>
            Home
          </Link>
          <Link href="/about-us" className={linkClass('/about-us')}>
            About Us
          </Link>
          <Link href="/ourinitiative" className={linkClass('/our initiative')}>
            Our Initiative
          </Link>
          <Link href="/gallery" className={linkClass('/gallery')}>
            Gallery
          </Link>
          <Link href="/contact" className={linkClass('/contact')}>
            Contact Us
          </Link>
        </nav>

        {/* Donate Button */}
        <Link href="/donation" className={linkClass('/donation')}>
          <button className="flex items-center justify-center gap-[10px] px-[36px] py-[12px] bg-[#0B3954] text-white rounded-[20px] shadow-[inset_0px_16px_26.9px_rgba(71,187,255,0.3)] transition">
            Donate Now
          </button>
        </Link>
      </div>
    </header>
  );
}
