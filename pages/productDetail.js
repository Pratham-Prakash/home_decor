"use client";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

export default function ProductDetail() {
    return (
        <>

            {/* product detail  */}
            <div className="max-w-11/12 mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Left side: Images */}
                    <div>
                        {/* Desktop Grid */}
                        <div className="hidden md:grid grid-cols-2 gap-4">
                            <div className="w-full h-[425px] rounded overflow-hidden">
                                <Image width={321}
                                    height={413} src="/productImages/detProd1.svg" alt="Product 1" className="w-full h-full object-cover bg-blue-50" />
                            </div>
                            <div className="w-full h-[425px] rounded overflow-hidden">
                                <Image width={321}
                                    height={413} src="/productImages/detProd2.svg" alt="Product 2" className="w-full h-full object-cover bg-blue-50" />
                            </div>
                            <div className="w-full h-[425px] rounded overflow-hidden">
                                <Image width={321}
                                    height={413} src="/productImages/detProd3.svg" alt="Product 3" className="w-full h-full object-cover bg-blue-50" />
                            </div>
                            <div className="w-full h-[425px] rounded overflow-hidden">
                                <Image width={321}
                                    height={413} src="/productImages/detProd4.svg" alt="Product 4" className="w-full h-full object-cover bg-blue-50" />
                            </div>
                            <div className="w-full h-[425px] rounded overflow-hidden">
                                <Image width={321}
                                    height={413} src="/productImages/detProd5.svg" alt="Product 5" className="w-full h-full object-cover bg-blue-50" /> bg-blue-50
                            </div>
                            <div className="w-full h-[425px] rounded overflow-hidden">
                                <Image width={321}
                                    height={413} src="/productImages/detProd6.svg" alt="Product 6" className="w-full h-full object-cover bg-blue-50" />
                            </div>
                        </div>

                        {/* Mobile Scroller */}
                        <div className="md:hidden flex overflow-x-auto space-x-4 snap-x snap-mandatory">
                            <div className="min-w-full flex-shrink-0 h-[425px] rounded overflow-hidden snap-center">
                                <Image src="/productImages/prod1.svg" alt="Product 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-full flex-shrink-0 h-[425px] rounded overflow-hidden snap-center">
                                <Image width={321}
                                    height={413} src="/productImages/prod2.svg" alt="Product 2" className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-full flex-shrink-0 h-[425px] rounded overflow-hidden snap-center">
                                <Image width={321}
                                    height={413} src="/productImages/prod3.svg" alt="Product 3" className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-full flex-shrink-0 h-[425px] rounded overflow-hidden snap-center">
                                <Image width={321}
                                    height={413} src="/productImages/prod4.svg" alt="Product 4" className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-full flex-shrink-0 h-[425px] rounded overflow-hidden snap-center">
                                <Image width={321}
                                    height={413} src="/productImages/prod5.svg" alt="Product 5" className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-full flex-shrink-0 h-[425px] rounded overflow-hidden snap-center">
                                <Image width={321}
                                    height={413} src="/productImages/prod6.svg" alt="Product 6" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Right side: Product Details */}
                    <div className="space-y-4">

                        {/* Title and Description */}
                        <div>
                            <h1 className="text-2xl font-semibold">Growing Vase n.2</h1>
                            <p className="text-gray-600 text-sm mt-2">
                                Large hand built vase in stoneware. Unique piece created by artist Aiste Bagdonaite. She is based in Copenhagen, Denmark where she works in her studio. Each piece focuses on material, texture and surface.
                            </p>
                        </div>

                        {/* Review and Wishlist */}
                        <div className="flex items-center space-x-2 text-yellow-400 text-sm">
                            <Star size={16} fill="yellow" />
                            <Star size={16} fill="yellow" />
                            <Star size={16} fill="yellow" />
                            <Star size={16} fill="yellow" />
                            <Star size={16} />
                            <span className="text-gray-600 ml-2">100 Review</span>
                            <span className="text-blue-500 ml-2 cursor-pointer text-xs">View more →</span>
                            <Heart className="ml-auto cursor-pointer" />
                        </div>

                        {/* Price */}
                        <div className="text-xl font-bold">
                            ₹2000 <span className="line-through text-gray-400 text-sm ml-2">₹3000</span>
                        </div>

                        {/* Offer Box */}
                        <div className="bg-gray-100 p-4 rounded text-sm">
                            Flat 70% + 25% Off on all orders. ✨ Use Coupon Code: <span className="font-bold">DIWALI25</span><br />
                            Get an EXTRA <span className="text-blue-500 font-bold">10% OFF</span> on prepaid orders.
                        </div>

                        {/* Color Options */}
                        <div className="flex items-center gap-4">
                            {["#d1cfc7", "#9e9e9e", "#f6d3c1", "#a1887f"].map((color, idx) => (
                                <div key={idx} className="flex flex-col items-center space-y-1">
                                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color }} />
                                    <span className="text-xs text-gray-600">
                                        {["Bridge", "Gray", "Peach", "Brown"][idx]}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-4 mt-4">
                            <button className="flex-1 border border-black py-2 rounded hover:bg-gray-100">Add To Cart</button>
                            <button className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800">Buy Now</button>
                        </div>

                        {/* Services */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-center text-sm">
                            {[
                                { title: "Delivery" },
                                { title: "Secure Payment" },
                                { title: "Customer care" },
                                { title: "15 Days Return" },
                            ].map((service, idx) => (
                                <div key={idx} className="p-2 border rounded hover:shadow">
                                    {service.title}
                                </div>
                            ))}
                        </div>

                        {/* Description Tabs (now inside right grid) */}
                        <div className="bg-gray-100 rounded p-6 mt-4">
                            <div className="flex space-x-6 border-b pb-4 mb-4 text-gray-600 text-sm">
                                <button className="font-semibold text-black border-b-2 border-black pb-1">Description</button>
                                <button className="hover:text-black">Product Information</button>
                            </div>

                            {/* Description Content */}
                            <p className="text-gray-600 text-sm leading-6">
                                This elegant ceramic vase features a timeless silhouette with a smooth matte finish, perfect for adding a touch of sophistication to any space. Ideal for fresh florals, dried arrangements, or as a standalone statement piece, it blends seamlessly with modern, bohemian, and minimalist décor styles.Handcrafted with care, this artisanal vase brings a natural charm to your home with its earthy texture and organic form. Whether styled with pampas grass or displayed solo, it adds warmth and character to shelves, consoles, or coffee tables.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* you may also like */}
            <section className="px-6 md:px-20 py-12">
                {/* Header */}

                <div className="flex justify-between items-center mb-6 border-b pb-2">
                    <h2 className="text-xl font-semibold text-gray-900">You may Also like</h2>
                    <a href="#" className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
                        Explore More <span>→</span>
                    </a>
                </div>

                {/* Product Scroll */}
                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
                    {[
                        {
                            src: "/productImages/prod1.svg",
                            desc: "Small Donut Vase, Nordic Style Hollow Round Interior Design, Mini Vase",
                            price: "₹1500",
                        },
                        {
                            src: "/productImages/prod2.svg",
                            desc: "Sophisticated and timeless, this wall decor elevates your space",
                            price: "₹1500",
                        },
                        {
                            src: "/productImages/prod3.svg",
                            desc: "Subtle textures make this piece a perfect finishing touch for coffee",
                            price: "₹4500",
                        },
                        {
                            src: "/productImages/prod4.svg",
                            desc: "This sleek table lamp blends clean lines and soft glow for a stylish",
                            price: "₹5000",
                        },
                        {
                            src: "/productImages/prod5.svg",
                            desc: "This sleek table lamp blends clean lines and soft glow for a stylish",
                            price: "₹2000",
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-[321px]">
                            <div className="relative h-[413px] w-full rounded-md overflow-hidden bg-gray-100">
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
            {/* Recently Viewed */}
            <section className="px-6 md:px-20 py-12">
                {/* Header */}

                <div className="flex justify-between items-center mb-6 border-b pb-2">
                    <h2 className="text-xl font-semibold text-gray-900">Recently Viewed</h2>
                    <a href="#" className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
                        Explore More <span>→</span>
                    </a>
                </div>

                {/* Product Scroll */}
                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
                    {[
                        {
                            src: "/productImages/prod6.svg",
                            desc: "Small Donut Vase, Nordic Style Hollow Round Interior Design, Mini Vase",
                            price: "₹1500",
                        },
                        {
                            src: "/productImages/prod7.svg",
                            desc: "Sophisticated and timeless, this wall decor elevates your space",
                            price: "₹1500",
                        },
                        {
                            src: "/productImages/prod8.svg",
                            desc: "Subtle textures make this piece a perfect finishing touch for coffee",
                            price: "₹4500",
                        },
                        {
                            src: "/productImages/prod9.svg",
                            desc: "This sleek table lamp blends clean lines and soft glow for a stylish",
                            price: "₹5000",
                        },
                        {
                            src: "/productImages/prod10.svg",
                            desc: "This sleek table lamp blends clean lines and soft glow for a stylish",
                            price: "₹2000",
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-[321px]">
                            <div className="relative h-[413px] w-full rounded-md overflow-hidden bg-gray-100">
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
            {/* Best Seller */}
            <section className="px-6 md:px-20 py-12">
                {/* Header */}

                <div className="flex justify-between items-center mb-6 border-b pb-2">
                    <h2 className="text-xl font-semibold text-gray-900">Best Seller</h2>
                    <a href="#" className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
                        Explore More <span>→</span>
                    </a>
                </div>

                {/* Product Scroll */}
                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
                    {[
                        {
                            src: "/productImages/prod11.svg",
                            desc: "Small Donut Vase, Nordic Style Hollow Round Interior Design, Mini Vase",
                            price: "₹1500",
                        },
                        {
                            src: "/productImages/prod12.svg",
                            desc: "Sophisticated and timeless, this wall decor elevates your space",
                            price: "₹1500",
                        },
                        {
                            src: "/productImages/prod13.svg",
                            desc: "Subtle textures make this piece a perfect finishing touch for coffee",
                            price: "₹4500",
                        },
                        {
                            src: "/productImages/prod14.svg",
                            desc: "This sleek table lamp blends clean lines and soft glow for a stylish",
                            price: "₹5000",
                        },
                        {
                            src: "/productImages/prod15.svg",
                            desc: "This sleek table lamp blends clean lines and soft glow for a stylish",
                            price: "₹2000",
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-[321px]">
                            <div className="relative h-[413px] w-full rounded-md overflow-hidden bg-gray-100">
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


        </>


    );
}
