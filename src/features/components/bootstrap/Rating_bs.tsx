const Rating = ({ rating }: { rating: number }) => {
  const maxRating = 5;
  const filledPoints = Math.floor(rating);
  const isHalfPoint = rating - filledPoints >= 0.5;

  return (
    <div
      className="d-flex pb-1"
      style={{
        fontSize: "3rem",
        lineHeight: "1rem",
        letterSpacing: "-0.05em",
      }}
    >
      {[...Array(maxRating)].map((_, index) => (
        <span key={index} className="position-relative mt-1">
          {index < filledPoints ? (
            <span className="text-color_tripAdvisorRating">•</span>
          ) : (
            <span className="text-color_brand_05">•</span>
          )}
          {isHalfPoint && index === filledPoints && (
            <span
              className="position-absolute start-0 text-color_tripAdvisorRating"
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
