import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-11/12 mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            <span className="text-4xl">❝</span> What Our Customer are Saying
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Testimonial Card */}
          <div className="border rounded-lg shadow-sm p-4">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/avatar.svg"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">Makenna Botosh</p>
                <p className="text-yellow-500 text-xs">★★★★★</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              The quality of the home décor is exceptional, and the designs have really transformed my space. Each piece is unique.
            </p>
            <div className="flex gap-2">
              <Image src="/product.svg" width={40} height={40} alt="Product" />
              <Image src="/product.svg" width={40} height={40} alt="Product" />
              <Image src="/product.svg" width={40} height={40} alt="Product" />
            </div>
          </div>

          <div className="border rounded-lg shadow-sm p-4">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/avatar.svg"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">Maren Korsgaard</p>
                <p className="text-yellow-500 text-xs">★★★★★</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              The designs are stylish and sophisticated. It’s clear a lot of thought went into the craftsmanship.
            </p>
            <div className="flex gap-2">
              <Image src="/product.svg" width={40} height={40} alt="Product" />
              <Image src="/product.svg" width={40} height={40} alt="Product" />
              <Image src="/product.svg" width={40} height={40} alt="Product" />
            </div>
          </div>

          <div className="border rounded-lg shadow-sm p-4">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/avatar.svg"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">Emery Schleifer</p>
                <p className="text-yellow-500 text-xs">★★★★★</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              The decor has a warm and personal touch that brought my whole room together.
            </p>
            <div className="flex gap-2">
              <Image src="/product.svg" width={40} height={40} alt="Product" />
              <Image src="/product.svg" width={40} height={40} alt="Product" />
              <Image src="/product.svg" width={40} height={40} alt="Product" />
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="border border-gray-400 px-4 py-2 text-sm rounded hover:bg-gray-100">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
