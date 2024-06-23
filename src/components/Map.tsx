function Map({
  location,
}: {
  location: { latitude: number; longitude: number };
}) {
  const { latitude, longitude } = location;
  console.log(location);

  return (
    <div>
      <iframe
        src={`https://www.google.com/maps?q=${latitude},${longitude}&z=12&output=embed`}
        width={"100%"}
        height="200"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
