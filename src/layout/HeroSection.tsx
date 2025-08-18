import NavMenu from "../components/NavMenu";
import MeteorRain from "../assets/images/meteor-rain.gif";

const HeroSection = () => {
  const options = ["Photgraphy", "Catering", "Decoration", "Planning"];

  return (
    <>
      <div>
        <div>
          <NavMenu />
        </div>

        <div className="bg-slate-200 py-4 px-10 mt-10 flex">
          <div>
            <select className="border-2 border-gray-300 p-2 shadow-2xl rounded-lg ml-10">
              <option value=""> Vendors </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select className="border-2 border-gray-300 p-2 shadow-2xl rounded-lg ml-10">
              <option value=""> Budget </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select className="border-2 border-gray-300 p-2 shadow-2xl rounded-lg ml-10">
              <option value=""> State </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-center mx-[10%] mt-20 relative ">
          <img
            src={MeteorRain}
            alt="animated star"
            className="w-10 h-10  left-20 bottom-0"
          />
          <p className="text-5xl font-bold">
            Capture Event Brings all Events to one place
          </p>

          <p className="text-4xl italic font-semi-bold mt-2">
            "Discover, book, and connect with vendors and services for your
            perfect event — all from one platform."
          </p>
          <img
            src={MeteorRain}
            alt="animated star"
            className="w-10 h-10 absolute right-10"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
