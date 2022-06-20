import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="cart">Cart</Link>
    </div>
  );
}
