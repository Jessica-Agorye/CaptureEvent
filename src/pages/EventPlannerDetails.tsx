import { useParams } from "react-router-dom";
import { Eventplanners } from "../data/eventPlannersData";

const EventPlannerDetails = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <p>Invalid planner ID</p>;
  }

  const planner = Eventplanners.find((planner) => planner.id === Number(id));

  if (!planner) {
    return <p>Planner not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={planner.image}
        alt={planner.name}
        className="w-full h-80 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">{planner.name}</h1>

      <p className="text-gray-500 mt-2">📍 {planner.city}</p>
      <p className="text-yellow-500 mt-2">⭐ {planner.rating}</p>
      <p className="text-indigo-600 font-semibold mt-4">{planner.price}</p>
    </div>
  );
};

export default EventPlannerDetails;
