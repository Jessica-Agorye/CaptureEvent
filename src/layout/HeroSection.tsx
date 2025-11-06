import NavMenu from "../components/NavMenu";

const HeroSection = () => {
  const vendors = ["Photography", "Catering", "Decoration", "Planning"];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-rose-100 overflow-hidden">
      {/* Navbar */}
      <NavMenu />

      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center text-center mt-32 px-6 md:px-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-amber-700 leading-tight max-w-4xl">
          CaptureEvent Brings All Events To One Place
        </h1>

        <p className="text-lg md:text-2xl italic text-gray-700 mt-4 max-w-3xl">
          "Discover, book, and connect with vendors and services for your
          perfect event — all from one platform."
        </p>

        {/* Vendor Filter */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <select className="border border-amber-700 bg-white shadow-md rounded-full px-5 py-3 text-gray-800 text-lg focus:ring-2 focus:ring-amber-700 focus:outline-none transition w-64">
            <option value="">Select Vendor</option>
            {vendors.map((vendor, index) => (
              <option key={index} value={vendor}>
                {vendor}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
