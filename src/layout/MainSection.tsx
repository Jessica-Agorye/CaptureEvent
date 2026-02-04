import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./MainSection.css";

const MainSection = () => {
  const services = [
    {
      title: "Photography",
      description:
        "Preserve timeless memories with professional photographers who capture your best moments.",
      imageUrl:
        "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=900&q=80",
      buttonText: "Explore Photographers",
    },
    {
      title: "Catering",
      description:
        "Treat your guests to exquisite dishes prepared by top-tier event caterers.",
      imageUrl:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",
      buttonText: "Explore Caterers",
    },
    {
      title: "Event Planners",
      description:
        "Let expert planners handle every detail so you can enjoy your day stress-free.",
      imageUrl:
        "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=80",
      buttonText: "Meet Planners",
    },
    {
      title: "Decor & Styling",
      description:
        "Transform your venue with artistic decorators who bring your vision to life.",
      imageUrl:
        "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=900&q=80",
      buttonText: "Find Decorators",
    },
    {
      title: "Music & DJs",
      description:
        "Keep the energy alive with professional DJs and live performers.",
      imageUrl:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
      buttonText: "Explore DJs",
      link: "/find-music-djs",
    },
    {
      title: "Florists",
      description:
        "Add elegance and fragrance to your event with stunning floral designs.",
      imageUrl:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
      buttonText: "Discover Florists",
      link: "/find-florists",
    },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 bg-[#FFF8F4]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3E3E3E] mb-8 tracking-wide">
          Discover More Services
        </h2>
        <p className="text-[#6E6E6E] text-lg md:text-xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          From photographers to florists, find everything you need to make your
          event unforgettable.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={800}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#FFEFE6] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#FCE1A8]/40 transform hover:scale-[1.02]">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-medium text-[#2E2E2E] mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-[#555] text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to={service.link || "#"}>
                    <button className="bg-[#FF6B35] text-white py-3 px-6 rounded-lg hover:bg-[#e65a29] transition-all duration-300">
                      {service.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainSection;
