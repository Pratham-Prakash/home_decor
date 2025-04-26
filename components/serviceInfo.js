
import {
    Truck,
    Headphones,
    ShieldCheck,
    RotateCcw,
  } from "lucide-react";
  
  export default function ServiceInfo() {
    return (

      
      <section className="bg-[#BFA883] rounded-xl px-6 md:px-12 py-8 max-w-10/12 mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/30 text-white text-sm text-left">
          {/* Delivery */}
          <div className="flex items-start gap-4 py-4 px-2">
            <Truck className="w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-base">Delivery</h4>
              <p>Enjoy fast, secure, and hassle-free delivery straight to your doorstep</p>
            </div>
          </div>
  
          {/* Customer Care */}
          <div className="flex items-start gap-4 py-4 px-2">
            <Headphones className="w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-base">Customer care</h4>
              <p>Our dedicated customer care team is always here to assist you with any questions</p>
            </div>
          </div>
  
          {/* Secure Payment */}
          <div className="flex items-start gap-4 py-4 px-2">
            <ShieldCheck className="w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-base">Secure Payment</h4>
              <p>Shop with confidence using our secure payment system, safe and encrypted transactions</p>
            </div>
          </div>
  
          {/* 15 Days Return */}
          <div className="flex items-start gap-4 py-4 px-2">
            <RotateCcw className="w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-base">15 Days Return</h4>
              <p>
                Enjoy hassle-free shopping with our 15-day return policy, allowing you to return your purchase with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  