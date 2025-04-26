import Image from "next/image";

export default function ComfortSection() {
  return (
    <section className="px-6 md:px-20 py-16 ">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-[#B79F7D33]">
        {/* Left Side: Images */}
        <div className="grid grid-rows-2 gap-4">
          <div className="relative w-full h-[180px] md:h-[240px]">
            <Image
              src="/comfort1.svg"
              alt="Living Room 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="relative w-full h-[180px] md:h-[240px]">
            <Image
              src="/comfort2.svg"
              alt="Living Room 2"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="text-gray-800 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Add to Cart, Add to Comfort – <br />
            Now on <span className="text-purple-600">Discount</span>!
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 mb-6">
            Inspired by nature and slow living, our decor brings warmth, texture, and personality into every corner of your home.
            With a focus on refined details and lasting quality, we offer curated pieces that transform everyday living into artful design.
            We believe a beautiful home starts with the little things—our decor is handpicked to bring charm, comfort, and soul to your space.
          </p>
          <button className="text-sm border border-gray-400 rounded px-4 py-2 hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
