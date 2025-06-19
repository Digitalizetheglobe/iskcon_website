'use client'; 

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-[#0F3D64] underline underline-offset-4">Refund Policy</h1>
      
      <p className="text-base text-justify">
        At Harekrishnavidya, we believe that change begins with understanding the needs of the
        community. By addressing the root causes of challenges like hunger, education gaps, and
        healthcare disparities, we are creating sustainable and lasting impact.
      </p>

      <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
        <li>
          In such cases if the receipt already has been issued, then the donor needs to return
          the original receipt at our official address.
        </li>
        <li>
          In the case of tax exemption certificate already issued, refund will not be possible.
        </li>
      </ul>

      <div className="flex items-start gap-2 bg-gray-100 rounded-full shadow-md px-4 py-2 text-sm text-gray-800">
        <span className="text-red-600 font-semibold">⚠️ Note:</span>
        <span>Please note that international donations will require more working days for refund.</span>
      </div>
    </div>
  );
}
 