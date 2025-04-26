import Image from "next/image";

export default function PromoBanners() {
  return (
    <section className="px-6 md:px-20 py-16">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Banner 1 */}
        <div className="relative w-full md:w-1/2 h-[244px] overflow-hidden rounded border border-white/20">
          <Image
            src="/promobanner1.svg" // Replace with actual image path
            alt="Spring Sale"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-start justify-start p-6 text-white">
            <div>
              <h3 className="text-lg md:text-xl font-medium leading-snug">
                Spring Sale: Up to <span className="text-yellow-400 font-semibold">30% Off</span><br />
                Sitewide — Limited Time Only!
              </h3>
              <button className="mt-4 border border-white text-sm px-4 py-2 rounded hover:bg-white hover:text-black transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative w-full md:w-1/2 h-[244px] overflow-hidden rounded border border-white/20">
          <Image
            src="/promobanner2.svg" // Replace with actual image path
            alt="Decor Deals"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-start justify-start p-6 text-white">
            <div>
              <h3 className="text-lg md:text-xl font-medium leading-snug">
                Style More, Spend Less – Shop<br />
                Decor Deals Today
              </h3>
              <p className="text-green-400 text-sm mt-1">Up to 40% Off Bestsellers</p>
              <button className="mt-4 border border-white text-sm px-4 py-2 rounded hover:bg-white hover:text-black transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
