export default function CartItem(props) {
  return (
    <div className="CartItem">
      <span>{props.name}</span>
      <span>{props.count}</span>
      <button>+</button>
      <button>-</button>
      <button>x</button>
    </div>
  );
}
