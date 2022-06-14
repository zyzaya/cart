import CartItem from './CartItem';

export default function Cart(props) {
  return (
    <div className="Cart">
      {props.items.map((i) => (
        <CartItem key={i.key} name={i.name} count={0} />
      ))}
    </div>
  );
}
