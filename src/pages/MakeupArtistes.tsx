const makeupartistes = [
  {
    id: 1,
    name: "Lara James",
    city: "Lagos",
    rating: 4.8,
    price: "$200/session",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "David Osei",
    city: "Accra",
    rating: 4.5,
    price: "$180/session",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Mia Benson",
    city: "Nairobi",
    rating: 4.9,
    price: "$250/session",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Tunde Bello",
    city: "Abuja",
    rating: 4.6,
    price: "$190/session",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Fatima Said",
    city: "Cairo",
    rating: 4.7,
    price: "$210/session",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
];

const MakupArtistes = () => {
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
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-200">
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
            makeupartistes Directory
          </h1>

          {/* Grid layout for cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {makeupartistes.map((artistes) => (
              <div
                key={artistes.id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                {/* Image */}
                <img
                  src={artistes.image}
                  alt={artistes.name}
                  className="w-full h-48 object-cover"
                />

                {/* Card content */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {artistes.name}
                  </h2>
                  <p className="text-gray-500">📍 {artistes.city}</p>
                  <p className="text-yellow-500 mt-1">⭐ {artistes.rating}</p>
                  <p className="text-indigo-600 font-medium mt-2">
                    {artistes.price}
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

export default MakupArtistes;
