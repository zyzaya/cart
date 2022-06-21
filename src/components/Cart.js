import '../styles/Cart.css';
import CartItem from './CartItem';

function Cart(props) {
  return (
    <div>
      <div className="Cart">
        {props.items.map((i) => (
          <CartItem
            key={i.key}
            name={i.name}
            count={i.count}
            onCountChange={(count) => props.onCountChange(i, count)}
          />
        ))}
      </div>
    </div>
  );
}

Cart.defaultProps = {
  items: [],
};

export default Cart;
