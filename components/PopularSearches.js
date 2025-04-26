import React from 'react';

const tags = [
  "Modern home decor", "Boho decor", "Minimalist vases", "Wall art for living room",
  "Ceramic vases", "Wooden wall shelves", "Macramé wall hangings", "Cozy cushions",
  "Vintage mirrors", "Aesthetic candle holders", "Planters for indoor plants", "Neutral tone rugs",
  "Rattan furniture", "Center table decor", "Table lamps online", "Decor under ₹999",
  "New home decor arrivals", "Best selling", "Home accents", "Home decor gifts",
  "Sustainable decor items", "Calming home decor", "Cozy corner ideas"
];

export default function PopularSearches() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-xl font-semibold mb-4">Popular Searches</h2>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-700">
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <span>{tag}</span>
              {index !== tags.length - 1 && <span className="mx-1">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
