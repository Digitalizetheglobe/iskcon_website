"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // install react-icons if not installed
import logo from "../../public/images/logo.png";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (href: string) =>
    `hover:text-orange-500 transition ${
      pathname === href ? "text-orange-600 font-semibold underline" : ""
    }`;

  return (
    <header className="bg-white sticky top-0 z-50  ">
      <div className="flex items-center justify-between px-6 md:px-14 lg:px-10 py-4">
        {/* Logo */}
        <div className=" text-xl lg:text-2xl font-bold text-black flex items-center gap-2">
          <Link href="/">
            <Image
              src={logo}
              alt="Hare Krishna Movement Logo"
              width={100}
              height={80}
              className="hidden lg:block object-contain"
            />
          
         
          </Link>

          <Link  href="/" >
           <span className="text-blue-900">HARE KRISHNA</span>{" "}
          <span className="text-orange-400">VIDYA</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-black text-lg">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about-us" className={linkClass("/about-us")}>
            About Us
          </Link>
          <Link href="/our-initiative" className={linkClass("/our-initiative")}>
            Our Initiative
          </Link>
          <Link href="/gallery" className={linkClass("/gallery")}>
            Gallery
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact Us
          </Link>

          <Link href="/donation">
            <button className="flex items-center justify-center cursor-pointer gap-[10px] px-[24px] py-[10px] bg-[#0B3954] text-white rounded-[20px]  hover:bg-orange-400 hover:text-white transition-all duration-300">
              Donate Now
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col  justify-start gap-1  bg-white px-6 py-4 space-y-4 text-black text-lg shadow">
          <Link
            href="/"
            className={linkClass("/")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={linkClass("/about-us")}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/our-initiative"
            className={linkClass("/our-initiative")}
            onClick={() => setIsOpen(false)}
          >
            Our Initiative
          </Link>
          <Link
            href="/gallery"
            className={linkClass("/gallery")}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={linkClass("/contact")}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>

          <Link href="/donation" onClick={() => setIsOpen(false)}>
            <button className="w-full flex items-center justify-center cursor-pointer gap-[10px] px-[24px] py-[10px] bg-[#0B3954] text-white rounded-[20px] shadow-[inset_0px_16px_26.9px_rgba(71,187,255,0.3)] hover:bg-red-600 hover:text-white transition-all duration-300">
              Donate Now
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
