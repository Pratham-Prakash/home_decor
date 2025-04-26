import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#F6F3EF] py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mx-auto">
        {/* Left Side - Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
            Elevate Your Space with <br />
            Timeless <span className="inline-block">Design</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-md">
            Your home is your sanctuary. We offer a curated collection of
            modern, minimalist decor designed to bring calm, beauty, and
            function into your everyday spaces. Whether you are refreshing a room
            or starting from scratch, find pieces that feel just right.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Shop Now
          </button>
        </div>






        {/* fgedfg retgregrefge wrg */}
        <div className=" hidden sm:grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {/* First Row - Left */}
          <div className="col-span-2 flex gap-4">
            <div className="w-[300px] h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/hero1.svg"
                alt="Big Vase"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>

            {/* First Row - Right (Bottom Left align) */}
            <div className="w-[200px]  rounded-lg flex items-end justify-start overflow-hidden">
              <Image
                src="/hero2.svg"
                alt="Small Vase"
                width={200}
                height={200}
                className="object-cover h-[200px] rounded-lg"
              />
            </div>
          </div>


          {/* Second Row - with small gap */}
          <div className="col-span-2 flex gap-2">
            {/* Second Row - Left */}
            <div className="w-[200px] h-[200px] rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/hero3.svg"
                alt="Candle Holder"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>

            {/* Second Row - Right (Left align) */}
            <div className="w-[310px] h-[200px] rounded-lg flex items-center justify-start overflow-hidden pl-2">
              <Image
                src="/hero4.svg"
                alt="Decor Candle"
                width={300}
                height={200}
                className="object-contain"
              /> 
            </div>
          </div>
        </div>

        {/* Right Side - Hidden on Mobile */}
        {/*         
        <div className="hidden sm:grid grid-cols-2 gap-4">
       
          <div className="bg-amber-100 p-2 rounded-lg flex items-center justify-start">
            <div className="relative w-full max-w-[306px] aspect-[1/1]">
              <Image
                src="/hero1.svg"
                alt="Decor item 1"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="bg-[#E6F2F0] p-2 rounded-lg flex items-baseline-last justify-start">
            <div className="relative w-full max-w-[204px] aspect-[204/195]">
              <Image
                src="/hero2.svg"
                alt="Decor item 2"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="bg-[#F9EFE3] p-2 rounded-lg flex items-center justify-start">
            <div className="relative w-full max-w-[203px] aspect-[203/194]">
              <Image
                src="/hero3.svg"
                alt="Decor item 3"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

         
          <div className="bg-[#ECE7F8] p-2 rounded-lg flex items-center justify-start">
            <div className="relative w-full max-w-[305px] aspect-[305/197]">
              <Image
                src="/hero4.svg"
                alt="Decor item 4"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div> */}


      </div>


    </section>
  );
}
