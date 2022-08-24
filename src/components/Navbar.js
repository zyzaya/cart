import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <Link to="/cart">Home</Link>
      <Link to="/cart/cart">Cart ({props.itemCount})</Link>
    </div>
  );
}
