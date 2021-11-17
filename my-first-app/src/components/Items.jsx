import Item from "./Item";

function Items({ items }) {
  return (
    <ul>
      {items.length > 0 &&
        items
          .filter((b, i) => i > 1)
          .map(({ id, name }) => <Item key={id} id={id} name={name} />)}
    </ul>
  );
}

export default Items;
