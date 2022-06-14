import '../styles/Item.css';

export default function Item(props) {
  return (
    <div className="Item">
      <img src={props.image} alt="" srcSet="" />
      <div className="">{props.name}</div>
      <button>Add to Cart</button>
    </div>
  );
}
