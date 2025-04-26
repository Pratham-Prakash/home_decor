import Image from "next/image";

export default function NewArrivalSection() {
  return (
    <section className="px-6 md:px-20 py-12 bg-[#B79F7D1A]">
      {/* Header */}

      <div className="flex justify-between items-center mb-6 border-b pb-2">
        <h2 className="text-xl font-semibold text-gray-900">New Arrival</h2>
        <a href="#" className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
          Explore More <span>→</span>
        </a>
      </div>

      {/* Product Scroll */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
        {[
          {
            src: "/productImages/newarrival1.svg",
            desc: "Small Donut Vase, Nordic Style Hollow Round Interior Design, Mini Vase",
            price: "₹1500",
          },
          {
            src: "/productImages/newarrival2.svg",
            desc: "Sophisticated and timeless, this wall decor elevates your space",
            price: "₹1500",
          },
          {
            src: "/productImages/newarrival3.svg",
            desc: "Subtle textures make this piece a perfect finishing touch for coffee",
            price: "₹4500",
          },
          {
            src: "/productImages/newarrival4.svg",
            desc: "This sleek table lamp blends clean lines and soft glow for a stylish",
            price: "₹5000",
          },
          {
            src: "/productImages/newarrival5.svg",
            desc: "This sleek table lamp blends clean lines and soft glow for a stylish",
            price: "₹2000",
          },
        ].map((item, index) => (
          <div key={index} className="flex-shrink-0 w-[321px]">
            <div className="relative h-[413px] w-full rounded-sm overflow-hidden">
              <Image
                src={item.src}
                alt="Product"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm mt-2 text-gray-700 leading-tight line-clamp-2">{item.desc}</p>
            <p className="text-sm font-semibold text-black mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
