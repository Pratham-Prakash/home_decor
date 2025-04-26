import { useState } from 'react';
import { Grid2X2, List } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';

export default function GalleryPage() {
  const [view, setView] = useState('grid');

  return (

    <>

      {/* Banner Section */}
      <div className="relative w-full h-[255px] overflow-hidden">
        <Image
          src="/galleryBanner.svg" // Make sure to save your image in public/images/banner.jpg
          alt="Gallery Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <h1 className="text-white text-xl md:text-3xl font-serif leading-snug max-w-2xl">
            Style Your Space – Decor That Speaks Your Style
          </h1>
        </div>
      </div>



      {/* Main Gallery starts here  */}
      <div className="min-h-screen bg-[#fdfbf8] px-4 md:px-8 lg:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">

          {/* Left Sidebar Filters */}
          {/* Left Sidebar */}
          <aside className="w-full md:w-[250px] p-4 border-r border-gray-200">
            {/* Breadcrumb */}
            <div className="text-xs text-gray-500 mb-4">Home &gt; <span className="text-black">Gallery</span></div>

            {/* Section Title */}
            <h2 className="text-sm font-semibold mb-2">Customize View</h2>

            {/* Category */}
            <div className="mb-4">
              <p className="text-sm font-medium">Category</p>
              <ul className="text-sm text-gray-600 space-y-1 mt-2">
                <li><input type="checkbox" /> <span>Vases & Planters</span></li>
                <li><input type="checkbox" /> <span>Wall Decor</span></li>
                <li><input type="checkbox" /> <span>Lighting</span></li>
                <li><input type="checkbox" /> <span>Cushions & Throws</span></li>
                <li><input type="checkbox" /> <span>Candles & Holders</span></li>
                <li><input type="checkbox" /> <span>Furniture Accents</span></li>
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <p className="text-sm font-medium">Price Range</p>
              <div className="mt-2">
                <input type="range" min="0" max="50000" className="w-full" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹0</span>
                  <span>₹50k</span>
                </div>
              </div>
            </div>

            {/* Material */}
            <div className="mb-4">
              <p className="text-sm font-medium">Material</p>
              <ul className="text-sm text-gray-600 space-y-1 mt-2">
                <li><input type="checkbox" /> <span>Ceramic</span></li>
                <li><input type="checkbox" /> <span>Wood</span></li>
                <li><input type="checkbox" /> <span>Glass</span></li>
                <li><input type="checkbox" /> <span>Metal</span></li>
              </ul>
            </div>


          </aside>


          {/* Right Section */}
          <main>
            {/* Top Controls */}
            {/* Top Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

              {/* Left: Grid/List Toggle */}
              <div className="flex items-center space-x-3 text-gray-600 text-sm">
                <button onClick={() => setView('grid')}>
                  <Grid2X2 className={`w-5 h-5 ${view === 'grid' ? 'text-black' : ''}`} />
                </button>
                <span className=" text-xs py-0.5 ">Grid</span>
                <button onClick={() => setView('list')}>
                  <List className={`w-5 h-5 ${view === 'list' ? 'text-black' : ''}`} />
                </button>
                <span className=" text-xs py-0.5 ">List</span>
              </div>
              {/* Right: Filters & Dropdown */}
              <div className="flex items-center space-x-3">
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full border">New Arrival</button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full border">Featured</button>

                {/* Dropdown: Items per page */}
                <select className="px-2 py-1 border rounded text-sm bg-white">
                  <option>100</option>
                  <option>50</option>
                  <option>20</option>
                </select>
              </div>
            </div>


            {/* Product Grid */}
            <div className={`grid ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' : 'grid-cols-1 gap-4'}`}>
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-3 rounded shadow-sm hover:shadow-md transition w-full max-w-[321px] h-[503px] mx-auto"
                >
                  <Link href={`/productDetail`}>
                    <div className="w-full h-[413px] rounded mb-2 overflow-hidden bg-blue-100">
                      <Image
                        src={`/productImages/prod${i + 1}.svg`}
                        alt="Product"
                        width={321}
                        height={413}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <p className="text-xs text-gray-500">
                    Sophisticated and timeless. This wall decor elevates your space.
                  </p>
                  <p className="text-sm font-semibold mt-1">₹2000</p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-10 text-sm">

              {/* Prev Button */}
              <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100">
                &larr;
              </button>

              {/* Page Numbers */}
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 border rounded ${page === 1 ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100">
                &rarr;
              </button>

            </div>

          </main>
        </div>



      </div>
    </>




  );
}
