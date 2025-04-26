import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Instagram from 'lucide-react/dist/esm/icons/instagram';
import Bookmark from 'lucide-react/dist/esm/icons/bookmark';
import Twitter from 'lucide-react/dist/esm/icons/twitter';



export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-40">
            <div className="text-center mb-6">
                <p className="text-sm">Subscribe to our emails and get free shipping on your first order!</p>
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
                    <input
                        type="email"
                        placeholder="Enter Your Mail"
                        className="bg-zinc-900 border border-zinc-700 px-4 py-2 text-sm text-white w-full sm:w-96 focus:outline-none"
                    />
                    <button className="bg-white text-black px-6 py-2 text-sm">Sign Up</button>
                </div>
            </div>
            <hr className="border-zinc-700 my-6" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-400">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white">
                        <span className="text-xl">🏠</span>
                        <span className="text-lg font-semibold">HOME DECOR</span>
                    </div>
                    <div className="flex gap-4">
                        <Facebook size={24} />
                        <Instagram size={24} />
                        <Bookmark size={24} />
                        <Twitter size={24} />
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-2">Popular Searches</h4>
                    <ul className="space-y-1">
                        <li>Cotton Sarees</li>
                        <li>Blouse</li>
                        <li>Lenin Saree</li>
                        <li>Printed Saree</li>
                        <li>Silk Saree</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-2">Quick links</h4>
                    <ul className="space-y-1">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Happy Customer</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-2">Customer Services</h4>
                    <ul className="space-y-1">
                        <li>Cancelation Policy</li>
                        <li>Privacy policy</li>
                        <li>Shipping & handling Policy</li>
                        <li>Terms & Condition</li>
                        <li>Terms Of Service</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
