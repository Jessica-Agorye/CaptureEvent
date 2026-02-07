import { useParams, Link } from "react-router-dom";
import { Florists } from "../data/floristData";

const FloristDetails = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <p className="text-center mt-20">Invalid florist ID</p>;
  }

  const florist = Florists.find((florist) => florist.id === Number(id));

  if (!florist) {
    return <p className="text-center mt-20">Florist not found</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Card */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <img
              src={florist.image}
              alt={florist.name}
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-6">
            {/* Florist Info */}
            <div className="bg-white rounded-2xl shadow p-8">
              <h1 className="text-3xl font-bold text-gray-900">
                {florist.name}
              </h1>

              <div className="flex items-center gap-4 mt-3 text-gray-500">
                <span>📍 {florist.city}</span>
                <span className="flex items-center gap-1">
                  ⭐ {florist.rating}
                </span>
              </div>

              {/* Optional description */}
              {/*
              <p className="mt-6 text-gray-600 leading-relaxed">
                {florist.description ??
                  "This florist specializes in creating beautiful floral arrangements tailored to your event and theme."}
              </p>
              */}
            </div>

            {/* Booking Card */}
            <div className="bg-white rounded-2xl shadow p-6">
              <p className="text-sm text-gray-500">Starting price</p>

              <p className="text-3xl font-bold text-indigo-600 mt-1">
                {florist.price}
              </p>

              <Link to={`/book-now/${florist.id}`}>
                <button className="w-full mt-3 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50 transition">
                  Book Now
                </button>
              </Link>

              <button className="w-full mt-3 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50 transition">
                Contact Florist
              </button>

              <p className="text-xs text-gray-400 mt-4 text-center">
                Secure booking • No upfront payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloristDetails;
