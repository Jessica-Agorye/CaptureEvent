import Cards from "../components/Cards";
import Photgrapher from "../assets/images/photographer.jpg";

const AboutSection = () => {
  return (
    <>
      <div className=" relative grid grid-cols-2 mb-10 gap-4">
        <Cards
          title="Top Photographers"
          imageUrl={
            <img
              src={Photgrapher}
              alt="photographer"
              className="h-60 w-60 flex-shrink-0 absolute left-70 rounded-3xl top-20"
            />
          }
          description="Find a photographer near you"
          button={
            <button className="absolute bottom-9 -left-9  py-6 px-4 bg-amber-300 text-white animate-bounce">
              Over Here
            </button>
          }
        />
        <Cards
          title="The Card"
          imageUrl=""
          description="I am the description"
        />
      </div>

      <div className=" grid grid-cols-3 mb-10 gap-4 ">
        <Cards
          title="The Card"
          imageUrl=""
          description="I am the description"
        />
        <Cards
          title="The Card"
          imageUrl=""
          description="I am the description"
        />
        <Cards
          title="The Card"
          imageUrl=""
          description="I am the description"
        />
      </div>
    </>
  );
};

export default AboutSection;
