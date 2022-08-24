import '../styles/CartItem.css';

export default function CartItem(props) {
  function handleChange(e) {
    props.onCountChange(e.target.value);
  }

  function removeFromCart() {
    props.onCountChange(0);
  }

  return (
    <div className="CartItem">
      <span>{props.name}</span>
      <div>
        <input
          type="number"
          name=""
          id=""
          value={props.count}
          min={0}
          onChange={handleChange}
        />
        <button onClick={removeFromCart}>x</button>
      </div>
    </div>
  );
}
