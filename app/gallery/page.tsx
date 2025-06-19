// app/gallery/page.tsx
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-9 h-[800px] p-4 max-w-6xl mx-auto  shadow-xl rounded-lg bg-gray-100 mb-8">
      {/* Image 1 */}
      <div className="col-span-2 row-span-4 relative shadow-xl contrast-more:">
        <Image
          src="/images/gau.jpg"
          alt="Image 1"
          fill
          className="object-cover rounded-lg transition-transform duration-900 hover:scale-105"
        />
      </div>

      {/* Image 2 */}
      <div className="col-span-3 row-span-6 col-start-3 relative">
        <Image
          src="/images/krish.jpg"
          alt="Image 2"
          fill
          className="object-cover rounded-lg transition-transform duration-900 hover:scale-105"
        />
      </div>

      {/* Image 3 */}
      <div className="col-span-2 row-span-4 col-start-6 relative">
        <Image
          src="/images/bal.jpg"
          alt="Image 3"
          fill
          className="object-cover rounded-lg transition-transform duration-900 hover:scale-105"
        />
      </div>

      {/* Image 4 */}
      <div className="col-span-2 row-span-2 row-start-5 relative">
        <Image
          src="/images/g.jpg"
          alt="Image 4"
          fill
          className="object-cover rounded-lg transition-transform duration-900 hover:scale-105"
        />
      </div>

      {/* Image 5 */}
      <div className="col-span-2 row-span-2 col-start-6 row-start-5 relative">
        <Image
          src="/images/mini.jpg"
          alt="Image 5"
          fill
          className="object-cover rounded-lg transition-transform duration-900 hover:scale-105"
        />
      </div>
    </div>
  );
}
