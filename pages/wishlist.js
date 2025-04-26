import { Heart, ShoppingCart, X } from "lucide-react";
import Image from "next/image";

export default function WishlistPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">My Wishlist (2)</h1>

      {/* Wishlist Item 1 */}
      <div className="flex flex-col sm:flex-row items-center p-4 shadow-md rounded-md w-full mb-6">
        <Image
          src="/cart1.svg"
          alt="Wishlist Product"
          width={321}
          height={413}
          className="w-[150px] h-[150px] object-cover rounded bg-amber-100"
        />
        <div className="flex-1 sm:ml-6 mt-4 sm:mt-0 flex flex-col justify-between w-full">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-sm font-semibold mb-1">
                Elegant decor that brings life to your space
              </h2>
              <p className="text-xs text-gray-500 mb-1">
                This premium wall art adds charm and warmth to any room with its unique design.
              </p>
              <p className="text-xs text-blue-500">Category: Nature</p>
              <p className="text-xs text-gray-500 mt-1">Price: ₹1200</p>
            </div>
            <button>
              <X size={16} />
            </button>
          </div>
          <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <div className="flex gap-2">
              <button className="text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800 flex items-center">
                <ShoppingCart size={16} className="mr-2" />
                Add to Cart
              </button>
              <button className="text-sm border px-4 py-2 rounded hover:bg-gray-100">
                Buy Now
              </button>
            </div>
            <Heart className="text-red-500" size={18} />
          </div>
        </div>
      </div>

      {/* Wishlist Item 2 */}
      <div className="flex flex-col sm:flex-row items-center p-4 shadow-md rounded-md w-full">
        <Image
          src="/cart2.svg"
          alt="Wishlist Product"
          width={321}
          height={413}
          className="w-[150px] h-[150px] object-cover rounded bg-amber-100"
        />
        <div className="flex-1 sm:ml-6 mt-4 sm:mt-0 flex flex-col justify-between w-full">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-sm font-semibold mb-1">
                Classic wall art to enhance your interiors
              </h2>
              <p className="text-xs text-gray-500 mb-1">
                Crafted with elegance, this piece complements modern and traditional decor alike.
              </p>
              <p className="text-xs text-blue-500">Category: Abstract</p>
              <p className="text-xs text-gray-500 mt-1">Price: ₹1500</p>
            </div>
            <button>
              <X size={16} />
            </button>
          </div>
          <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <div className="flex gap-2">
              <button className="text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800 flex items-center">
                <ShoppingCart size={16} className="mr-2" />
                Add to Cart
              </button>
              <button className="text-sm border px-4 py-2 rounded hover:bg-gray-100">
                Buy Now
              </button>
            </div>
            <Heart className="text-red-500" size={18} />
          </div>
        </div>
      </div>
      {/* Wishlist Item 3 */}
      <div className="flex flex-col sm:flex-row items-center p-4 shadow-md rounded-md w-full">
        <Image
          src="/cart3.svg"
          alt="Wishlist Product"
          width={321}
          height={413}
          className="w-[150px] h-[150px] object-cover rounded bg-amber-100"
        />
        <div className="flex-1 sm:ml-6 mt-4 sm:mt-0 flex flex-col justify-between w-full">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-sm font-semibold mb-1">
                Classic wall art to enhance your interiors
              </h2>
              <p className="text-xs text-gray-500 mb-1">
                Crafted with elegance, this piece complements modern and traditional decor alike.
              </p>
              <p className="text-xs text-blue-500">Category: Abstract</p>
              <p className="text-xs text-gray-500 mt-1">Price: ₹1500</p>
            </div>
            <button>
              <X size={16} />
            </button>
          </div>
          <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <div className="flex gap-2">
              <button className="text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800 flex items-center">
                <ShoppingCart size={16} className="mr-2" />
                Add to Cart
              </button>
              <button className="text-sm border px-4 py-2 rounded hover:bg-gray-100">
                Buy Now
              </button>
            </div>
            <Heart className="text-red-500" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
