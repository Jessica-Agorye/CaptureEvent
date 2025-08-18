import HeroSection from "../layout/HeroSection";
import AboutSection from "../layout/AboutSection";

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
    </>
  );
};

export default ScreenPage;
