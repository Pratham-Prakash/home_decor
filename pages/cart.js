import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">My Cart (4)</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cart Item */}
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center p-4 shadow-lg rounded-md w-full max-w-full"
              style={{ maxWidth: "845px", height: "auto" }}
            >
              <Image
                src={`/cart${i + 1}.svg`}
                alt="Product"
                width={321}
                height={413}
                className="w-[180px] h-[180px] object-cover rounded bg-amber-100"
              />
              <div className="flex-1 sm:ml-6 mt-4 sm:mt-0 flex flex-col justify-between h-full w-full py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-sm font-semibold mb-1">
                      Sophisticated and timeless, this wall decor elevates your
                      space
                    </h2>
                    <p className="text-xs text-blue-500">Bridge</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Delivered By : Sunday, 25 Sep
                    </p>
                  </div>
                  <button>
                    <X size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <button className="border rounded p-1">
                      <Minus size={14} />
                    </button>
                    <span className="text-sm">1</span>
                    <button className="border rounded p-1">
                      <Plus size={14} />
                    </button>
                  </div>
                  <p className="font-semibold text-right">₹1000</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="space-y-6 w-full">
          {/* Coupon Code */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold mb-3">
              🏷️ Apply Coupon code
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter code here"
                className="border rounded px-4 py-2 w-full text-sm"
              />
              <button className="border rounded px-4 py-2 text-sm">
                Apply here
              </button>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-sm font-semibold mb-3">
              Choose the payment method
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="border p-2 rounded">Net Banking</div>
              <div className="border p-2 rounded">Debit/Credit card</div>
              <div className="border p-2 rounded">UPI</div>
              <div className="border p-2 rounded">Cash On Delivery</div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="border rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-4">Cart Summary</h3>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Cart Total</span>
                <span>₹4100</span>
              </div>
              <div className="flex justify-between">
                <span>+ Shipping Charge</span>
                <span>₹400</span>
              </div>
              <div className="flex justify-between">
                <span>- Coupon code</span>
                <span>₹500</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-semibold">
              <span>Total Payable</span>
              <span>₹4300</span>
            </div>
            <p className="text-[10px] text-gray-400 mt-1 text-right">
              Inclusive all Tax
            </p>
            <button className="w-full bg-black text-white py-2 mt-4 rounded text-sm hover:bg-gray-800">
              Check Out
            </button>
            <button className="w-full border py-2 mt-2 rounded text-sm">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
