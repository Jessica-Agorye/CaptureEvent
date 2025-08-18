import Cards from "../components/Cards";

const AboutSection = () => {
  return (
    <div className=" relative grid grid-cols-2 mb-10 gap-4">
      <Cards
        title="The Card"
        imageUrl=""
        description="I am the description"
        button={
          <button className="absolute bottom-9 -left-9  py-6 px-4 bg-amber-300 text-white">
            Over Here
          </button>
        }
      />
      <Cards title="The Card" imageUrl="" description="I am the description" />
    </div>
  );
};

export default AboutSection;
