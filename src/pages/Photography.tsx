import { useState } from "react";
import { photographers } from "../data/photographerData";

export const Photography = () => {
  const [filteredData, setFilteredData] =
    useState<photographers[]>(photographers);

  const filterByLocation = (location: string) => {
    const filtered = photographers.filter(
      (photographer: { city: string }) => photographer.city === location
    );
    setFilteredData(filtered);
  };
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div className="flex min-h-screen bg-gray-50">
        {/* 🧭 Sidebar for filters */}
        <aside className="w-64 bg-white p-6 shadow-md hidden md:block">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>

          {/* Location Filter */}
          <div className="mb-6">
            <h3 className="text-gray-600 font-medium mb-2">Location</h3>
            <select
              onChange={(e) => filterByLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-200"
            >
              <option>All</option>
              <option>Lagos</option>
              <option>Accra</option>
              <option>Nairobi</option>
              <option>Abuja</option>
              <option>Cairo</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="text-gray-600 font-medium mb-2">Price Range</h3>
            <input
              type="range"
              min="100"
              max="300"
              className="w-full accent-indigo-500"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>$100</span>
              <span>$300+</span>
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition">
            Apply Filters
          </button>
        </aside>

        {/* 📸 Main content area */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Photographers Directory
          </h1>

          {/* Grid layout for cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((photographer) => (
              <div
                key={photographer.id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                {/* Image */}
                <img
                  src={photographer.image}
                  alt={photographer.name}
                  className="w-full h-48 object-cover"
                />

                {/* Card content */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {photographer.name}
                  </h2>
                  <p className="text-gray-500">📍 {photographer.city}</p>
                  <p className="text-yellow-500 mt-1">
                    ⭐ {photographer.rating}
                  </p>
                  <p className="text-indigo-600 font-medium mt-2">
                    {photographer.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
