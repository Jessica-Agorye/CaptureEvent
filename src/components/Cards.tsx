type CardProps = {
  title: string;
  imageUrl: React.ReactNode;
  description: string;
  button?: React.ReactNode;
};

const Cards: React.FC<CardProps> = ({ imageUrl, title, description, button }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="w-full h-56 sm:h-64 lg:h-72 overflow-hidden">
        {imageUrl}
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1 p-6 text-center sm:text-left">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Optional Button */}
        {button && <div className="mt-6">{button}</div>}
      </div>
    </div>
  );
};

export default Cards;
