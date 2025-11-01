import HeroSection from "../layout/HeroSection";
import AboutSection from "../layout/AboutSection";
import MainSection from "../layout/MainSection";
import Footer from "../layout/Footer";
import Photography from "../pages/Photography";
const Homepage = () => {
  return (
    <>
      <div>
        <HeroSection />
      </div>

      <div className="mt-20 mx-40">
        {" "}
        <AboutSection />
      </div>

      <div className="mt-20 mx-40 mb-30">
        {" "}
        <MainSection />
      </div>

      <div>
        <Footer />
      </div>

      <div>
        <Photography />
      </div>
    </>
  );
};

export default Homepage;
