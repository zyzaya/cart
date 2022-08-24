import '../styles/CartItem.css';

export default function CartItem(props) {
  function handleChange(e) {
    props.onCountChange(e.target.value);
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
        <button>x</button>
      </div>
    </div>
  );
}
