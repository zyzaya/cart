import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({props.itemCount})</Link>
    </div>
  );
}
