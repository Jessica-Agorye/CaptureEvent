import Cards from "../components/Cards";
import Photographer from "../assets/images/photographer.jpg";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white px-4 sm:px-8 lg:px-20 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Explore Top Event Vendors
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          CaptureEvent helps you connect with trusted professionals for your
          special day — from photographers to makeup artists and event planners.
        </p>
      </div>

      {/* === First Row (Two Cards) === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        <Cards
          title="Top Photographers"
          imageUrl={
            <img
              src={Photographer}
              alt="photographer"
              className="h-60 w-full object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          }
          description="Find and book talented photographers near you."
          button={
            <button
              onClick={() => navigate("/find-photographers")}
              className="mt-6 py-3 px-5 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-all duration-200 w-full sm:w-auto"
            >
              Find Photographers
            </button>
          }
        />

        <Cards
          title="Top Makeup Artistes"
          imageUrl={
            <div className="h-60 w-full bg-gradient-to-r from-pink-200 to-amber-100 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex items-center justify-center text-gray-600 font-medium">
              Makeup Artistry
            </div>
          }
          description="Book top-rated makeup artists for your events."
          button={
            <button className="mt-6 py-3 px-5 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-all duration-200 w-full sm:w-auto">
              Find Makeup Artistes
            </button>
          }
        />
      </div>

      {/* === Second Row (Three Cards) === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Cards
          title="Event Planners"
          imageUrl={
            <div className="h-56 w-full bg-gradient-to-r from-blue-200 to-indigo-100 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex items-center justify-center text-gray-600 font-medium">
              Event Planning
            </div>
          }
          description="Discover skilled event planners near you."
        />
        <Cards
          title="Decor Experts"
          imageUrl={
            <div className="h-56 w-full bg-gradient-to-r from-green-200 to-teal-100 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex items-center justify-center text-gray-600 font-medium">
              Decoration
            </div>
          }
          description="Get connected to talented decorators."
        />
        <Cards
          title="Caterers"
          imageUrl={
            <div className="h-56 w-full bg-gradient-to-r from-yellow-200 to-orange-100 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex items-center justify-center text-gray-600 font-medium">
              Catering
            </div>
          }
          description="Book professional caterers for your event."
        />
      </div>
    </section>
  );
};

export default AboutSection;
