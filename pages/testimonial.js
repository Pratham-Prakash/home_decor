import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";


export default function Testimonial() {
  return (

    <>

      {/* Banner Section */}
      < section className="relative w-full h-[245px] overflow-hidden" >
        {/* Background image with gradient overlay */}
        < div
          className="absolute inset-0 bg-cover bg-right"
          style={{
            backgroundImage: "url('/testimonialBanner.svg')",
            backgroundPosition: "right center",
          }
          }
        >
          <div className="w-full h-full bg-gradient-to-r from-black via-black/10 to-transparent"></div>
        </div >

        {/* Content */}
        < div className="relative z-10 h-full flex items-center px-6 md:px-20" >
          <div className="text-white max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">Our Happy Customer</h2>
            <p className="text-sm md:text-base text-gray-300">
              Join thousands of happy customers who’ve transformed their homes with our thoughtfully curated decor. Don’t just take our word for it — read their stories, reviews, and see how they’ve styled their favorites.
            </p>
          </div>
        </div >
      </section >



      {/* customer section  */}
      <div className="py-10 px-4 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

          {/* Column 1 - Staggered */}
          <div className="flex flex-col gap-6 mt-24">
            {/* Card 1 */}
            <div className="w-full max-w-[383px] h-[413px] border rounded-xl p-4 shadow-sm flex flex-col justify-between bg-white mx-auto">
              <div className="flex items-center gap-3">
                <Image src="/avatar.svg" alt="User 1" width={321}
                  height={413} className="w-[80px] h-[80px] rounded-full object-cover bg-red-200" />
                <div>
                  <h4 className="font-semibold text-sm">Jane Cooper</h4>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">
                The quality of the home decor is exceptional, and the designs have really transformed my space. Each piece is unique, and it was clear that a lot of thought went into the craftsmanship.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                  See more <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex gap-2 mt-2">
                  <Image src="/product.svg" width={321}
                    height={413} className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                  <Image src="/product.svg" width={321}
                    height={413} className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-[383px] h-[413px] border rounded-xl p-4 shadow-sm flex flex-col justify-between bg-white mx-auto">
              <div className="flex items-center gap-3">
                <Image src="/avatar.svg" alt="User 2" width={321}
                  height={413} className="w-[80px] h-[80px] rounded-full object-cover bg-yellow-100" />
                <div>
                  <h4 className="font-semibold text-sm">Ronald Richards</h4>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">
                The quality of the home decor is exceptional, and the designs have really transformed my space. Each piece is unique, and it was clear that a lot of thought went into the craftsmanship.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                  See more <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex gap-2 mt-2">
                  <Image src="/product.svg" width={321}
                    height={413} className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                  <Image src="/product.svg" width={321}
                    height={413} className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {/* Card 3 */}
            <div className="w-full max-w-[383px] h-[413px] border rounded-xl p-4 shadow-sm flex flex-col justify-between bg-white mx-auto">
              <div className="flex items-center gap-3">
                <Image src="/avatar.svg" width={321}
                  height={413} alt="User 3" className="w-[80px] h-[80px] rounded-full object-cover bg-blue-100" />
                <div>
                  <h4 className="font-semibold text-sm">Courtney Henry</h4>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">
                The quality of the home decor is exceptional, and the designs have really transformed my space. Each piece is unique, and it was clear that a lot of thought went into the craftsmanship.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                  See more <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex gap-2 mt-2">
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full max-w-[383px] h-[413px] border rounded-xl p-4 shadow-sm flex flex-col justify-between bg-white mx-auto">
              <div className="flex items-center gap-3">
                <Image width={321}
                  height={413} src="/avatar.svg" alt="User 4" className="w-[80px] h-[80px] rounded-full object-cover bg-green-100" />
                <div>
                  <h4 className="font-semibold text-sm">Wade Warren</h4>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">
                The quality of the home decor is exceptional, and the designs have really transformed my space. Each piece is unique, and it was clear that a lot of thought went into the craftsmanship.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                  See more <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex gap-2 mt-2">
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Staggered */}
          <div className="flex flex-col gap-6 mt-24">
            {/* Card 1 */}
            <div className="w-full max-w-[383px] h-[413px] border rounded-xl p-4 shadow-sm flex flex-col justify-between bg-white mx-auto">
              <div className="flex items-center gap-3">
                <Image width={321}
                  height={413} src="/avatar.svg" alt="User 1" className="w-[80px] h-[80px] rounded-full object-cover bg-red-200" />
                <div>
                  <h4 className="font-semibold text-sm">Jane Cooper</h4>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">
                The quality of the home decor is exceptional, and the designs have really transformed my space. Each piece is unique, and it was clear that a lot of thought went into the craftsmanship.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                  See more <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex gap-2 mt-2">
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-[383px] h-[413px] border rounded-xl p-4 shadow-sm flex flex-col justify-between bg-white mx-auto">
              <div className="flex items-center gap-3">
                <Image width={321}
                  height={413} src="/avatar.svg" alt="User 2" className="w-[80px] h-[80px] rounded-full object-cover bg-yellow-100" />
                <div>
                  <h4 className="font-semibold text-sm">Ronald Richards</h4>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">
                The quality of the home decor is exceptional, and the designs have really transformed my space. Each piece is unique, and it was clear that a lot of thought went into the craftsmanship.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                  See more <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex gap-2 mt-2">
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 - Staggered */}
          <div className="flex flex-col gap-6">
            {/* Card 3 */}
            <div className="w-full max-w-[383px] h-[413px] border rounded-xl p-4 shadow-sm flex flex-col justify-between bg-white mx-auto">
              <div className="flex items-center gap-3">
                <Image width={321}
                  height={413} src="/avatar.svg" alt="User 3" className="w-[80px] h-[80px] rounded-full object-cover bg-blue-100" />
                <div>
                  <h4 className="font-semibold text-sm">Courtney Henry</h4>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">
                The quality of the home decor is exceptional, and the designs have really transformed my space. Each piece is unique, and it was clear that a lot of thought went into the craftsmanship.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                  See more <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex gap-2 mt-2">
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full max-w-[383px] h-[413px] border rounded-xl p-4 shadow-sm flex flex-col justify-between bg-white mx-auto">
              <div className="flex items-center gap-3">
                <Image width={321}
                  height={413} src="/avatar.svg" alt="User 4" className="w-[80px] h-[80px] rounded-full object-cover bg-green-100" />
                <div>
                  <h4 className="font-semibold text-sm">Wade Warren</h4>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">
                The quality of the home decor is exceptional, and the designs have really transformed my space. Each piece is unique, and it was clear that a lot of thought went into the craftsmanship.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                  See more <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex gap-2 mt-2">
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                  <Image width={321}
                    height={413} src="/product.svg" className="w-[73px] h-[68px] object-cover rounded bg-gray-200" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </>


  );
}
