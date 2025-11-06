const MainSection = () => {
  const services = [
    {
      title: "Photography",
      description:
        "Preserve timeless moments with professional photographers who bring every detail to life.",
      imageUrl:
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=80",
      buttonText: "Explore Photographers",
    },
    {
      title: "Catering",
      description:
        "Indulge your guests with curated dishes crafted by top-tier caterers for unforgettable experiences.",
      imageUrl:
        "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=900&q=80",
      buttonText: "Explore Caterers",
    },
    {
      title: "Decoration",
      description:
        "Transform your venue with creative decorators who blend color, texture, and ambiance effortlessly.",
      // ✅ Replaced with a reliable, elegant decor image
      imageUrl:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
      buttonText: "Explore Decorators",
    },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 bg-[#FFF8F4] min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3E3E3E] mb-8 tracking-wide">
          Discover Our Services
        </h2>
        <p className="text-[#6E6E6E] text-lg md:text-xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          From photography to fine dining, our trusted professionals bring
          elegance and creativity to every celebration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFEAE3] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#FCE1A8]/40"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-[#2E2E2E] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#555] text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="px-5 py-2.5 bg-[#FCE1A8] text-[#3E3E3E] rounded-full hover:bg-[#F9D77E] transition duration-200 font-medium">
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
