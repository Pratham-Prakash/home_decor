import ServiceInfo from "@/components/serviceInfo";
import Testimonials from "@/components/Testimonials";
import { ShieldCheck, Users, Leaf } from "lucide-react";
import Image from "next/image";


export default function AboutPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full h-[245px] overflow-hidden ">
        {/* Background image with gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-right"
          style={{
            backgroundImage: "url('/aboutBanner.svg')",
            backgroundPosition: "right center",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-20">
          <div className="text-white max-w-2xl">
          <p className="text-sm md:text-base text-gray-300">
          We are available week days for call from 8am To 8pm 
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">Founded with a love for Home decor</h2>
            
          </div>
        </div>
      </section>

      {/* Our Story section  */}
      <section className="Story_section bg-[#B79F7D1A] mb-16">
        <div className="mx-auto px-4 py-16 space-y-20  max-w-11/12">

          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-self-center max-w-7xl">
            {/* Our Story */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 text-sm leading-6">
                What started as a weekend hobby of styling new corners in my tiny apartment blossomed
                into a passionate online destination for curated lifestyle. I struggled, a lot. Below
                is how our studio first took form — filled with vases, a vision, and a gentle hand that
                would soon shape every corner. From friends to customers, the encouragement was
                overwhelming. Every shelf, every photo, is a reflection of who we are — purposeful,
                imperfect, real. Thank you for walking with me on this joyful home journey. I hope our
                pieces bring a little extra style to your every day.
              </p>
            </div>

            {/* Arched Store Image */}
            <div className="flex justify-center">
              <div className="overflow-hidden w-[450px] h-[450px] rounded-t-full border-2 border-black">
                <Image
                  src="/story1.svg"
                  alt="Store"
                  className="w-full h-full object-cover"
                  width={321}
                        height={413}
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-self-center max-w-7xl">
            {/* Arched Founders Image */}
            <div className="flex justify-center">
              <div className="overflow-hidden w-[450px] h-[450px] rounded-t-full border-2 border-black">
                <Image
                  src="/story2.svg"
                  alt="Founder"
                  className="w-full h-full object-cover bg-amber-100"
                  width={321}
                        height={413}
                />
              </div>
            </div>

            {/* Meet the Founder */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Meet The Founder</h2>
              <p className="text-gray-600 text-sm leading-6">
                What started as a weekend hobby of styling cozy corners in my tiny apartment blossomed
                into a passionate online brand dedicated to minimal, curated living. Every shelf,
                every photo, is a reflection of who we are — purposeful, imperfect, real. Thank you for
                being a part of our home journey. I hope our pieces bring a little extra style to your
                every day.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* service info  */}
      <ServiceInfo />


      {/* value section  */}

      <section className="mt-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/valueBanner.svg')" }}>
        <div className="bg-black/50 w-full h-full">
          <div className="max-w-11/12 mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">

            {/* Left Content */}
            <div>
              <p className="text-sm text-yellow-400 mb-2">Our Values</p>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-snug">
                Crafted with Care, Built on Values<br />Our Guiding Principles
              </h2>
              <p className="mt-4 text-gray-300 text-sm max-w-lg">
                Our values are rooted in our enduring commitment to authenticity. We partner
                with local artisans and preserve the spirit of handmade design. Every piece is
                infused with intention and built to last. From sustainability to timeless style,
                we hold ourselves to the highest standards—both ethically and creatively.
              </p>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 - Centered Text */}
              <div className="flex flex-col justify-center items-center text-black p-4 rounded">
                <p className="text-sm text-white">Established From</p>
                <h3 className="text-3xl font-bold text-white">2002</h3>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-black p-4 rounded shadow">
                <ShieldCheck className="text-yellow-600 mb-2" />
                <h4 className="font-semibold">Quality Over Quantity</h4>
                <p className="text-sm text-gray-600 mt-1">
                  We prioritize well-made, long-lasting pieces over mass production.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white text-black p-4 rounded shadow">
                <Users className="text-yellow-600 mb-2" />
                <h4 className="font-semibold">Craft & Community</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Supporting traditional makers, and building with care and connection.
                </p>
              </div>


              {/* Card 4 */}
              <div className="bg-white text-black p-4 rounded shadow">
                <Leaf className="text-yellow-600 mb-2" />
                <h4 className="font-semibold">Sustainable Living</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Our materials and methods honor the Earth and promote conscious living.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* behund the scene  */}
      <section className="max-w-11/12 mx-auto px-4 py-16 ">
        <h2 className="text-xl font-semibold border-b pb-2 mb-10 inline-block border-black">
          Behind The Scenes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className=" w-[300px] h-[375px] mx-auto rounded flex flex-col items-center text-center p-4">
            <Image
              src="/scene1.svg"
              alt="Inspired Design"
              className="w-[250px] h-[250px] object-contain"
              width={321}
                        height={413}
            />
            <h3 className="mt-4 font-medium text-sm">Inspired Design</h3>
            <p className="text-xs text-gray-600 mt-2">
              Every masterpiece starts with a spark. Inspired by nature, art, and real life,
              we bring you a design that’s timeless, functional, and close to heart.
            </p>
          </div>

          {/* Card 2 */}
          <div className=" w-[300px] h-[375px] mx-auto rounded flex flex-col items-center text-center p-4">
            <Image
              src="/scene2.svg"
              alt="Thoughtful Sourcing"
              className="w-[250px] h-[250px] object-contain"
              width={321}
                        height={413}
            />
            <h3 className="mt-4 font-medium text-sm">Thoughtful Sourcing</h3>
            <p className="text-xs text-gray-600 mt-2">
              We carefully source materials with a focus on sustainability, quality, and fair labor —
              ensuring a positive impact at every stage.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[300px] h-[375px] mx-auto rounded flex flex-col items-center text-center p-4">
            <Image
              src="/scene3.svg"
              alt="Crafted with Care"
              className="w-[250px] h-[250px] object-contain"
              width={321}
                        height={413}
            />
            <h3 className="mt-4 font-medium text-sm">Crafted with Care</h3>
            <p className="text-xs text-gray-600 mt-2">
              Our artisanal pieces are made by hand in small batches,
              ensuring every detail is perfected and every piece feels one-of-a-kind.
            </p>
          </div>

          {/* Card 4 */}
          <div className=" w-[300px] h-[375px] mx-auto rounded flex flex-col items-center text-center p-4">
            <Image
              src="/scene4.svg"
              alt="Delivered with Love"
              className="w-[250px] h-[250px] object-contain"
              width={321}
                        height={413}
            />
            <h3 className="mt-4 font-medium text-sm">Delivered with Love</h3>
            <p className="text-xs text-gray-600 mt-2">
              Each order is thoughtfully wrapped and shipped with care — from our hands to yours —
              to preserve quality and ensure a special unboxing experience.
            </p>
          </div>
        </div>
      </section>


      {/* Testimonial  */}
      <Testimonials />

    </>

  );
}
