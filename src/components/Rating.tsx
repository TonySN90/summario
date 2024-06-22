const Rating = ({ rating }: { rating: number }) => {
  const maxRating = 5;
  const filledPoints = Math.floor(rating);
  const isHalfPoint = rating - filledPoints >= 0.5;

  return (
    <div className="flex text-[3.5rem] leading-[.6rem] tracking-[-0.05em] pb-2 ml-[-2px]">
      {[...Array(maxRating)].map((_, index) => (
        <span key={index} className="relative mt-1">
          {index < filledPoints ? (
            <span className="text-green-500">•</span>
          ) : (
            <span className="text-gray-300">•</span>
          )}
          {isHalfPoint && index === filledPoints && (
            <span
              className="absolute left-0 text-green-500"
              style={{ width: "60%", overflow: "hidden", height: "20px" }}
            >
              •
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
