import Image from "next/image";

export default function BestSeller() {
    return (
        <section className="px-6 md:px-20 py-16">

            <div className="flex justify-between items-center mb-6 border-b pb-2">
                <h2 className="text-xl font-semibold text-gray-900">Best Seller</h2>
                <a href="#" className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
                    Explore More <span>→</span>
                </a>
            </div>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                {/* Card 1 */}
                <div className="w-[321px]">
                    <div className="bg-[#f2f2f2] w-[321px] h-[413px] relative rounded overflow-hidden">
                        <Image
                            src="/productImages/prod1.svg"
                            alt="Product 1"
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                    <p className="mt-4 text-sm text-gray-700">
                        Small Donut Vase, Nordic Style Hollow Round Interior Design, Mini Vase
                    </p>
                    <p className="mt-1 font-semibold">₹ 1000</p>
                </div>

                {/* Card 2 */}
                <div className="w-[321px]">
                    <div className="bg-[#f2f2f2] w-[321px] h-[413px] relative rounded overflow-hidden">
                        <Image
                            src="/productImages/prod2.svg"
                            alt="Product 2"
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                    <p className="mt-4 text-sm text-gray-700">
                        Sophisticated and timeless, this wall decor elevates your space
                    </p>
                    <p className="mt-1 font-semibold">₹ 2000</p>
                </div>

                {/* Card 3 */}
                <div className="w-[321px]">
                    <div className="bg-[#f2f2f2] w-[321px] h-[413px] relative rounded overflow-hidden">
                        <Image
                            src="/productImages/prod3.svg"
                            alt="Product 3"
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                    <p className="mt-4 text-sm text-gray-700">
                        Subtle textures make this piece a perfect finishing touch for coffee
                    </p>
                    <p className="mt-1 font-semibold">₹ 1500</p>
                </div>

                {/* Card 4 */}
                <div className="w-[321px]">
                    <div className="bg-[#f2f2f2] w-[321px] h-[413px] relative rounded overflow-hidden">
                        <Image
                            src="/productImages/prod4.svg"
                            alt="Product 4"
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                    <p className="mt-4 text-sm text-gray-700">
                        This sleek table lamp blends clean lines and soft glow for a stylish
                    </p>
                    <p className="mt-1 font-semibold">₹ 2500</p>
                </div>

                {/* Card 5 */}
                <div className="w-[321px]">
                    <div className="bg-[#f2f2f2] w-[321px] h-[413px] relative rounded overflow-hidden">
                        <Image
                            src="/productImages/prod5.svg"
                            alt="Product 5"
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                    <p className="mt-4 text-sm text-gray-700">
                        This sleek table lamp blends clean lines and soft glow for a stylish
                    </p>
                    <p className="mt-1 font-semibold">₹ 1000</p>
                </div>
            </div>
        </section>
    );
}
