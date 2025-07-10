'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 lg:px-20 flex flex-col lg:flex-row gap-12">
      {/* Left Side: 3 Info Boxes in Grid */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6">
          {/* Visit Us Box */}
          <div className="rounded-xl border border-blue-300 shadow-md p-6 text-center">
            <div className="text-orange-500 text-lg font-semibold mb-2">📍 Visit us</div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Hare Krishna Golden Temple,<br />
              Swayambhu Sri Lakshmi Narasimha Swamy Kshetram,<br />
              NBT Nagar, Road No 12,<br />
              Banjara Hills, Near Anti Corruption Bureau office,<br />
              Hyderabad-500034.<br />
              Telangana
            </p>
          </div>

          {/* Call Us Box */}
          <div className="rounded-xl bg-gray-50 shadow-md p-6 text-center">
            <div className="text-orange-500 text-lg font-semibold mb-2">📞 Call us</div>
            <p className="text-gray-800 text-sm">+91 81217 95663</p>
            <p className="text-gray-800 text-sm">+91 83283 89862</p>
          </div>

          {/* Email Box */}
          <div className="rounded-xl bg-gray-50 shadow-md p-6 text-center">
            <div className="text-orange-500 text-lg font-semibold mb-2">✉️ Email at</div>
            <p className="text-sm text-blue-600">connect2aikyavidya@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1">
        <div className="text-orange-600 text-sm font-semibold mb-1">Contact us</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in touch</h2>
        <p className="text-gray-600 mb-6 text-sm">We’d love to hear from you. Please fill out this form.</p>

        <form className="space-y-4">
          {/* Name Fields */}
          <div className="flex gap-4">
            <input type="text" placeholder="First name" className="w-1/2 border rounded-md px-4 py-2 text-sm" />
            <input type="text" placeholder="Last name" className="w-1/2 border rounded-md px-4 py-2 text-sm" />
          </div>

          {/* Email */}
          <input type="email" placeholder="you@company.com" className="w-full border rounded-md px-4 py-2 text-sm" />

          {/* Phone number */}
          <div className="flex gap-2">
            <select className="border rounded-md px-2 py-2 text-sm">
              <option>US</option>
              <option>IN</option>
              <option>UK</option>
            </select>
            <input type="text" placeholder="+1 (555) 000-0000" className="w-full border rounded-md px-4 py-2 text-sm" />
          </div>

          {/* Message */}
          <textarea rows={4} placeholder="Message" className="w-full border rounded-md px-4 py-2 text-sm"></textarea>

          {/* Checkbox */}
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" id="policy" />
            <label htmlFor="policy">
              You agree to our friendly <a href="#" className="text-blue-600 underline">privacy policy</a>.
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
