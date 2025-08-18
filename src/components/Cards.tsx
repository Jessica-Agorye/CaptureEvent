type CardProps = {
  title: string;
  imageUrl: string;
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
        <div className="bg-black text-white w-full h-96">
          <img src={imageUrl} alt="" />
          <p>{description}</p>
          <p>{title}</p>
          {button}
        </div>
      </div>
    </>
  );
};

export default DoubleCards;
