import { useParams, Link } from "react-router-dom";

import { MusicDJs } from "../data/musicDjData";

const MusicDJsDetails = () => {
  const { id } = useParams<{ id: string }>();

  //add conditon to check if !id return a paragraph that says data not found

  if (!id) {
    return <p>id not found</p>;
  }

  const djData = MusicDJs.find((dj) => dj.id === Number(id));

  if (!djData) {
    return <p> Music Dj not found </p>;
  }

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Image Card */}
            <div className="bg-white rounded-2xl shadow overflow-hidden">
              <img
                src={djData.image}
                alt={djData.name}
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-6">
              {/* Decorator Info */}
              <div className="bg-white rounded-2xl shadow p-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  {djData.name}
                </h1>

                <div className="flex items-center gap-4 mt-3 text-gray-500">
                  <span>📍 {djData.city}</span>
                  <span className="flex items-center gap-1">
                    ⭐ {djData.rating}
                  </span>
                </div>

                {/* Optional description */}
                {/* 
              <p className="mt-6 text-gray-600 leading-relaxed">
                {decorator.description ??
                  "This decorator specializes in transforming venues into stunning, memorable spaces tailored to your event style."}
              </p>
              */}
              </div>

              {/* Booking Card */}
              <div className="bg-white rounded-2xl shadow p-6">
                <p className="text-sm text-gray-500">Starting price</p>

                <p className="text-3xl font-bold text-indigo-600 mt-1">
                  {djData.price}
                </p>

                <Link to={`/book-now/${djData.id}`}>
                  <button className="w-full mt-3 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50 transition">
                    Book Now
                  </button>
                </Link>

                <button className="w-full mt-3 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50 transition">
                  Contact DJ
                </button>

                <p className="text-xs text-gray-400 mt-4 text-center">
                  Secure booking • No upfront payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicDJsDetails;
