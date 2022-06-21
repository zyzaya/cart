import { useState } from 'react';
import '../styles/CartItem.css';

export default function CartItem(props) {
  let [count, setCount] = useState(0);

  function handleChange(e) {
    setCount(e.target.value);
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
          value={count}
          onChange={handleChange}
        />
        <button>x</button>
      </div>
    </div>
  );
}
