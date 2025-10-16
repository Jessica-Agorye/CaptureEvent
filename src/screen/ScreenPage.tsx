import HeroSection from "../layout/HeroSection";
import AboutSection from "../layout/AboutSection";
import MainSection from "../layout/MainSection";

const ScreenPage = () => {
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
    </>
  );
};

export default ScreenPage;
