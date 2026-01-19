import { Eventplanners } from "../data/eventPlannersData";
import { useParams } from "react-router-dom";

export const BookNowPage = () => {
  const { id } = useParams();
  const planner = Eventplanners.find((planner) => planner.id === Number(id));

  if (!planner) {
    return <p className="text-center mt-20">Planner not found</p>;
  }
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Book Now
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Complete your booking with the event planner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          {" "}
          <img src={planner.image} alt="" />
        </div>

        <div>
          <h2>{planner.name}</h2>
        </div>

        <form action=""></form>
      </div>
    </div>
  );
};
