import Tile from "./Tile";

function Tiles() {
  return (
    <section className="mt-4">
      <div className="flex flex-wrap w-full gap-2 mb-4">
        {Array.from({ length: 10 }).map(() => (
          <Tile />
        ))}
      </div>
    </section>
  );
}

export default Tiles;
