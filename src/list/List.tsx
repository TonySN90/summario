import ListItem from "./ListItem";

function List() {
  return (
    <section>
      <div className="flex flex-col gap-2 justify-center flex-wrap w-full">
        <ListItem />
      </div>
    </section>
  );
}

export default List;
