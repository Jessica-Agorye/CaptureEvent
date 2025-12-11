const EventPlanning = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 mt-10">
        <aside className="w-64  p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>

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

          <button className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition">
            Apply Filters
          </button>
        </aside>
        <div>
          <div>
            <p>Event Planners </p>
            <input type="text" />
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default EventPlanning;
