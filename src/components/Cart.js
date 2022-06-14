export default function Cart(props) {
  return (
    <div className="Cart">
      {props.items.map((i) => (
        <div>{i.name}</div>
      ))}
    </div>
  );
}
