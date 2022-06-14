export default function Item(props) {
  return (
    <div>
      <img src={props.image} alt="" srcset="" />
      <div className="">{props.name}</div>
      <button>Add to Cart</button>
    </div>
  );
}
