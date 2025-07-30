"use client";
import Link from "next/link";

import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../public/images/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#002A42] text-white  px-2 lg:px-4 py-10 mt-10 ">
        {/* Top Grid Section */}
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 ">
          {/* Left: Logo + About Us */}
          <div className="col-span-1 md:col-span-2 lg:px-6">
            <div className="mb-4">
              <Image
                src={logo}
                alt="Hare Krishna Movement Logo"
                width={160}
                height={100}
                className="object-contain"
              />
            </div>

            <p className="text-sm text-white leading-relaxed">
              &quot;Hare Krishna Vidya (AIkYA viDYA)&quot; an initiative of{" "}
              <br />
              HARE KRISHNA MOVEMENT INDIA is br designed <br /> for students of
              classes 1st to 10th, especially in rural areas.
            </p>

            <div className="mt-6">
              {/* <h3 className="text-white text-lg font-medium mb-3">Follow Us</h3> */}
              <ul className="flex items-center gap-6">
                <li>
                  <a
                    href="https://www.facebook.com/harekrishnamovementindia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-2 rounded-full bg-white/10 hover:bg-[#1877F2] transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF
                      size={20}
                      className="text-white transition-colors"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/harekrishnamovementindia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-2 rounded-full bg-white/10 hover:bg-[#E4405F] transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram
                      size={20}
                      className="text-white transition-colors"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@harekrishnamovementindia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-2 rounded-full bg-white/10 hover:bg-[#FF0000] transition-colors"
                    aria-label="YouTube"
                  >
                    <FaYoutube
                      size={20}
                      className="text-white transition-colors"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Us */}

          <div className="flex flex-col gap-2">
            <h2 className="text-[#F4A261] text-xl font-bold mb-2">CONTACT</h2>
            <div className="group flex items-center gap-2 mb-3">
              <FaMapMarkerAlt size={14} />
              <a
                href="https://www.google.com/maps?q=123+Dummy+Street,+Pune,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-yellow-200 text-base"
              >
                123 Dummy Street, Pune, India
              </a>
            </div>

            <div className="group flex items-center gap-1 mb-2 ">
              <FaPhoneAlt size={14} />
              <a
                href="tel:8019397108"
                className="group-hover:text-yellow-200 text-base"
              >
                +91 8019397108
              </a>
            </div>
            <div className="group flex items-center gap-1  mb-2">
              <FaPhoneAlt size={14} />
              <a
                href="tel:91 83283 89862 "
                className="group-hover:text-yellow-200 text-base"
              >
                +91 83283 89862
              </a>
            </div>
            <div className="group flex items-center gap-2  mb-3">
              <FaEnvelope size={14} />
              <a
                href="mailto:aikyavidya@hkmhyderabad.org"
                className="group-hover:text-yellow-200 text-base"
              >
                aikyavidya@hkmhyderabad.org
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-[#F4A261] text-xl font-bold mb-2">ABOUT</h2>
            <ul>
              <li className=" mb-2">
                <Link
                  href="/about-us"
                  className="text-white hover:text-yellow-200 text-base"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  className="text-white hover:text-yellow-200 text-base"
                >
                  Contact Us
                </Link>
              </li>

              <li className=" mb-2">
                <Link
                  href="/our-initiative"
                  className="text-white hover:text-yellow-200 text-base"
                >
                  Our Initiative
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="/ISKON.pdf"
                  className="text-white hover:text-yellow-200 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate
                </a>
              </li>
            </ul>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[#F4A261] text-xl font-bold mb-2">
              QUICK LINKS
            </h2>
            <ul className="space-y-2 ">
              {/* <li>Terms & Conditions</li> */}
              <li>
                <Link
                  href="/policies"
                  className="text-white hover:text-yellow-200 text-base"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-white hover:text-yellow-200 text-base"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-white hover:text-yellow-200 text-base"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="text-white hover:text-yellow-200 text-base"
                >
                  volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h2 className="text-[#F4A261] text-xl font-bold mb-2">
              Follow Us
            </h2>
            <ul className="space-y-2 text-sm flex items-center gap-4">
              <li>
                <a
                  href="https://www.facebook.com/harekrishnamovementindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                />
                  <FaFacebookF
                size={20}
                className="cursor-pointer hover:text-[#1877F2]"
              />
              </li>
              <li>
                <a
                  href="https://www.instagram.com/harekrishnamovementindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  <FaInstagram
                    size={20}
                    className="cursor-pointer hover:text-[#E4405F]" 
                  />
                </a>
              </li>

              <li>
                <a    
                  href="https://www.youtube.com/@harekrishnamovementindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <FaYoutube
                    size={22}
                    className="cursor-pointer hover:text-[#FF0000]"
                  />
                </a>  
              </li>


              </ul>



          </div> */}
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="bg-[#002A42] border-t border-white pt-4 pb-3 px-2 flex flex-col md:flex-row items-center justify-center text-sm text-white">
        <p className="mb-2 md:mb-0 pb-3 ">
          Copyright © 2024 Hare Krishna Vidya - Aikya Vidya
        </p>
      </div>
    </>
  );
}
