import { Mail, MapPin, PhoneCall } from "lucide-react";
import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Instagram from 'lucide-react/dist/esm/icons/instagram';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Twitter from 'lucide-react/dist/esm/icons/twitter';


export default function AboutPage() {
  return (

    <>
      {/* Banner Section */}
      < section className="relative w-full h-[245px] overflow-hidden" >
        {/* Background image with gradient overlay */}
        < div
          className="absolute inset-0 bg-cover bg-right"
          style={{
            backgroundImage: "url('/images/contact-hero-bg.jpg')",
            backgroundPosition: "right center",
          }
          }
        >
          <div className="w-full h-full bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div >

        {/* Content */}
        < div className="relative z-10 h-full flex items-center px-6 md:px-20" >
          <div className="text-white max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">Contact Us</h2>
            <p className="text-sm md:text-base text-gray-300">
              Have a question, feedback, or just want to say hello? We&apos;re here to help! Whether it&apos;s about your order, product details, or styling tips — feel free to reach out
            </p>
          </div>
        </div >
      </section >

      {/* contact info section  */}

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 md:p-10 rounded-lg shadow-lg">

          {/* Left Side - Info with background image */}
          <div className="bg-[url('/contactBanner.svg')] bg-cover bg-center text-white p-6 md:p-10 rounded-lg bg-amber-300">
            <h2 className="text-2xl font-semibold mb-4">We’d Love to Hear From You</h2>
            <p className="text-sm mb-10 max-w-md">
            We believe every home tells a story — and we’d love to be part of yours. Reach out with any questions, thoughts, or just to say hi. We’re here to help make your space truly special.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 mb-8">
                <MapPin size={20} />
                <p>Urban Nest Interiors, 27 Bloom Street, Bangalore, Karnataka, India</p>
              </div>
              <div className="flex items-start space-x-3 mb-8">
                <Mail size={20} />
                <p>hello@lushliving.com</p>
              </div>
              <div className="flex items-start space-x-3 mb-8">
                <PhoneCall size={20} />
                <p>+91 98765 43210 / +91 22 6268 5990</p>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="mb-8 text-sm font-semibold">Stay Connected</h4>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center bg-black/40 px-3 py-1 text-sm rounded hover:bg-black/60 space-x-2">
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </button>
                <button className="flex items-center bg-black/40 px-3 py-1 text-sm rounded hover:bg-black/60 space-x-2">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </button>
                <button className="flex items-center bg-black/40 px-3 py-1 text-sm rounded hover:bg-black/60 space-x-2">
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </button>
                <button className="flex items-center bg-black/40 px-3 py-1 text-sm rounded hover:bg-black/60 space-x-2">
                  <Twitter className="w-4 h-4" />
                  <span>Twitter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Leave A Message</h2>
            <p className="text-sm text-gray-600 mb-6">
              Need assistance? Reach out to us — we’re happy to help with anything from product questions to order support.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name here"
                    className="border p-2 rounded text-sm w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter Phone No."
                    className="border p-2 rounded text-sm w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="border p-2 rounded text-sm w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-gray-700">Subject</label>
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="border p-2 rounded text-sm w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-1 text-gray-700">Message</label>
                <textarea
                  placeholder="Enter your message"
                  rows="5"
                  className="border p-2 rounded text-sm w-full"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 text-sm w-full"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>




    </>

  );
}
