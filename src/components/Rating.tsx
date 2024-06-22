const Rating = ({ rating }: { rating: number }) => {
  const maxRating = 5;
  const filledPoints = Math.floor(rating);
  const isHalfPoint = rating - filledPoints >= 0.5;

  return (
    <div className="flex text-[3rem] leading-[1.3rem] tracking-[-0.07em] pb-2">
      {[...Array(maxRating)].map((_, index) => (
        <span key={index} className="relative">
          {index < filledPoints ? (
            <span className="text-green-500">•</span>
          ) : (
            <span className="text-gray-300">•</span>
          )}
          {isHalfPoint && index === filledPoints && (
            <span
              className="absolute top-0 left-0 text-green-500"
              style={{ width: "60%", overflow: "hidden" }}
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