import '../styles/Item.css';

export default function Item(props) {
  return (
    <div className="Item">
      <img src={props.image} alt="" srcSet="" />
      <div className="">{props.name}</div>
      <button onClick={props.onAdd}>Add to Cart</button>
    </div>
  );
}
