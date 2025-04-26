import Image from "next/image";

export default function CategoriesSection() {
  return (
    <section className="px-4 md:px-20 py-16 bg-[#FAF7F3]">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <span className="border-b-[3px] border-yellow-500">Home decor categories</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
        {/* Card 1 */}
        <div className="flex flex-col items-center w-full max-w-[263px] mx-auto">
          <div className="w-full h-[243px] bg-white rounded shadow flex items-center justify-center">
            <Image
              src="/categoryImages/cat1.svg"
              alt="Decor Accessories"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-gray-800 text-center">Decor Accessories</p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center w-full max-w-[263px] mx-auto">
          <div className="w-full h-[243px] bg-white rounded shadow flex items-center justify-center">
            <Image
              src="/categoryImages/cat2.svg"
              alt="Plants"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-gray-800 text-center">Plants</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center w-full max-w-[263px] mx-auto">
          <div className="w-full h-[243px] bg-white rounded shadow flex items-center justify-center">
            <Image
              src="/categoryImages/cat3.svg"
              alt="Furniture"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-gray-800 text-center">Furniture</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center w-full max-w-[263px] mx-auto">
          <div className="w-full h-[243px] bg-white rounded shadow flex items-center justify-center">
            <Image
              src="/categoryImages/cat4.svg"
              alt="Lighting"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-gray-800 text-center">Lighting</p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center w-full max-w-[263px] mx-auto">
          <div className="w-full h-[243px] bg-white rounded shadow flex items-center justify-center">
            <Image
              src="/categoryImages/cat5.svg"
              alt="Bath & Fragrance"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-gray-800 text-center">Bath & Fragrance</p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center w-full max-w-[263px] mx-auto">
          <div className="w-full h-[243px] bg-white rounded shadow flex items-center justify-center">
            <Image
              src="/categoryImages/cat6.svg"
              alt="Wall Decor"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-gray-800 text-center">Wall Decor</p>
        </div>
      </div>
    </section>
  );
}
