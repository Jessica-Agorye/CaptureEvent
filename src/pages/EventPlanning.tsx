import { useState } from "react";
import { Eventplanners } from "../data/eventPlannersData";
import type { EventPlanners } from "../data/eventPlannersData";
import { Link } from "react-router-dom";

const EventPlanning = () => {
  const [filteredData, setFilteredData] =
    useState<EventPlanners[]>(Eventplanners);

  const filterByLocation = (location: string) => {
    if (location === "All") {
      setFilteredData(Eventplanners);
      return;
    }

    const filtered = Eventplanners.filter(
      (planner) => planner.city === location
    );

    setFilteredData(filtered);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-6 mt-10">
      {/* Sidebar */}

      <aside className="p-6 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>

        <div className="mb-6">
          <h3 className="text-gray-600 font-medium mb-2">Location</h3>
          <select
            onChange={(e) => filterByLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-200"
          >
            <option value="All">All</option>
            <option value="Lagos">Lagos</option>
            <option value="Accra">Accra</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Abuja">Abuja</option>
            <option value="Cairo">Cairo</option>
          </select>
        </div>
      </aside>

      {/* Main */}
      <main className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Event Planners Directory
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((planner) => (
            <Link to={`/find-event-planners/${planner.id}`} key={planner.id}>
              <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
                <img
                  src={planner.image}
                  alt={planner.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {planner.name}
                  </h2>
                  <p className="text-gray-500">📍 {planner.city}</p>
                  <p className="text-yellow-500 mt-1">⭐ {planner.rating}</p>
                  <p className="text-indigo-600 font-medium mt-2">
                    {planner.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventPlanning;
