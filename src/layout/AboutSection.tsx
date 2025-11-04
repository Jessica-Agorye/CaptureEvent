import Cards from "../components/Cards";
import Photgrapher from "../assets/images/photographer.jpg";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
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
            <button
              onClick={() => navigate("/find-photographers")}
              className="absolute cursor-pointer bottom-9 -left-9  py-6 px-4 bg-amber-300 text-white animate-bounce"
            >
              Find Photographers
            </button>
          }
        />
        <Cards
          title="Top Makeup Artistes"
          imageUrl=""
          description="I am the description two"
          button={
            <button className="absolute bottom-9 -right-9  py-6 px-4 bg-amber-300 text-white animate-bounce">
              Find Makeup Artistes
            </button>
          }
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
