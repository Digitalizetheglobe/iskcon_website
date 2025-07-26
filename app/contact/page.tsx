"use client";
import { useState } from 'react';
import Link from 'next/link';


export default function ContactPage() {
  const [phonePlaceholder, setPhonePlaceholder] = useState('+1 (555) 000-0000');
  const [phoneMaxLength, setPhoneMaxLength] = useState(10);
  return (
    <div className="min-h-screen bg-white px-6 py-12 lg:px-20 flex flex-col-reverse lg:flex-row gap-12">
      {/* Left Side: 3 Info Boxes in Grid */}
      <div className="flex-1 flex flex-reverse gap-6">
        <div className="grid grid-cols-1 gap-6">
          {/* Visit Us Box */}
          <div className="rounded-xl border border-blue-300 shadow-md p-6 text-center">
            <div className="text-orange-500 text-lg font-semibold mb-2">
              📍 Visit us
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Hare Krishna Golden Temple,
              <br />
              Swayambhu Sri Lakshmi Narasimha Swamy Kshetram,
              <br />
              NBT Nagar, Road No 12,
              <br />
              Banjara Hills, Near Anti Corruption Bureau office,
              <br />
              Hyderabad-500034.
              <br />
              Telangana
            </p>
          </div>

          {/* Call Us Box */}
          <div className="rounded-xl bg-gray-50 shadow-md p-6 text-center">
            <div className="text-orange-500 text-lg font-semibold mb-2">
              📞 Call us
            </div>
            <p className="text-gray-800 text-sm m-1">
              <a href="tel:+91 81217 95663">+91 81217 95663</a>
            </p>
            <p className="text-gray-800 text-sm">
              <a href="tel:+91 83283 89862">+91 83283 89862</a>
            </p>
          </div>

          {/* Email Box */}
          <div className="rounded-xl bg-gray-50 shadow-md p-6 text-center">
            <div className="text-orange-500 text-lg font-semibold mb-2">
              ✉️ Email at
            </div>
            <a href="mailto:connect2aikyavidya@gmail.com">connect2aikyavidya@gmail.com</a>
              
            
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1">
        <div className="text-orange-600 text-2xl lg:text-xl text-center font-semibold mb-1">
          Contact us
        </div>
        <h2 className="text-5xl lg:text-4xl font-bold text-gray-900 text-center mb-2">Get in touch</h2>
        <p className="text-gray-600 mb-6 text-sm lg:text-md ">
          We’d love to hear from you. Please fill out this form.
        </p>

        <form className="space-y-4">
          {/* Name Fields */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 border rounded-md px-4 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 border rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full border rounded-md px-4 py-2 text-sm"
          />

          {/* Phone number */}
          <div className="flex gap-2">
            <select 
              className="border rounded-md px-2 py-2 text-sm"
              onChange={(e) => {
                const country = e.target.value;
                setPhonePlaceholder(
                  country === 'US' ? '+1 (555) 000-0000' :
                  country === 'IN' ? '+91 98765 43210' :
                  '+44 7911 123456'
                );
                setPhoneMaxLength(
                  country === 'US' ? 10 :
                  country === 'IN' ? 10 :
                  11
                );
              }}
            >
              <option value="US">US</option>
              <option value="IN">IN</option>
              <option value="UK">UK</option>
            </select>
            <input
              type="text"
              placeholder={phonePlaceholder}
              maxLength={phoneMaxLength}
              className="w-full border rounded-md px-4 py-2 text-sm"
            />
          </div>

          {/* Message */}
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full border rounded-md px-4 py-2 text-sm"
          ></textarea>

          {/* Checkbox */}
          <div className="flex  items-center gap-2 text-sm">
            <input type="checkbox" id="policy" required  />
            <label htmlFor="policy">
              I accept the {' '}
              <Link href="/terms-conditions" className='text-blue-600 hover:underline'>Terms and Conditions</Link>
              .
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm transition duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
