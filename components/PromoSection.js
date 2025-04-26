import Image from "next/image";

export default function PromoSection() {
  return (
    <section className=" px-6 md:px-20 py-16 bg-[#B79F7D00] ">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 max-w-11/12 mx-auto">
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded shadow flex">
          <div className="p-6 flex-1">
            <p className="text-sm text-gray-500 mb-1">Special Offer</p>
            <h3 className="text-lg font-semibold text-gray-900">
              Get <span className="text-purple-600">10% Off</span> Your First Order
            </h3>
            <button className="mt-4 text-sm border border-gray-300 rounded px-4 py-1 hover:bg-gray-100">
              Shop Now
            </button>
          </div>
          <div className="w-[150px] relative">
            <Image
              src="/promo1.svg"
              alt="Offer image 1"
              fill
              className="object-cover rounded-r"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded shadow flex">
          <div className="p-6 flex-1">
            <p className="text-sm text-gray-500 mb-1">General Sale</p>
            <h3 className="text-lg font-semibold text-gray-900">
              Your Dream Home, <br /> Now On Sale
            </h3>
            <button className="mt-4 text-sm border border-gray-300 rounded px-4 py-1 hover:bg-gray-100">
              Shop Now
            </button>
          </div>
          <div className="w-[150px] relative">
            <Image
              src="/promo2.svg"
              alt="Offer image 2"
              fill
              className="object-cover rounded-r"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-200 rounded shadow flex">
          <div className="p-6 flex-1">
            <p className="text-sm text-gray-500 mb-1">Weekend Deal</p>
            <h3 className="text-lg font-semibold text-gray-900">
              Decor Finds You’ll <br />
              Love From Just{" "}
              <span className="text-orange-500 font-bold">₹499!</span>
            </h3>
            <button className="mt-4 text-sm border border-gray-300 rounded px-4 py-1 hover:bg-gray-100">
              Shop Now
            </button>
          </div>
          <div className="w-[150px] relative">
            <Image
              src="/promo3.svg"
              alt="Offer image 3"
              fill
              className="object-cover rounded-r"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
