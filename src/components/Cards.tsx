type CardProps = {
  title: string;
  imageUrl: React.ReactNode;
  description: string;
  button?: React.ReactNode;
};

const DoubleCards: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  button,
}) => {
  return (
    <>
      <div>
        <div className=" bg-black text-white w-full h-96 ">
          {imageUrl}
          <p className="text-2xl font-bold pl-10 pt-30">{title}</p>
          <p className="text-lg pl-10 mt-2 italic">{description}</p>

          {button}
        </div>
      </div>
    </>
  );
};

export default DoubleCards;
