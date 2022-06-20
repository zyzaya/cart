import { Outlet, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Navbar from './Navbar';

export default function App() {
  function handleAddToCart(item) {
    console.log(item);
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="" element={<Home onAddToCart={handleAddToCart} />} />
      </Routes>
      <Outlet onAddToCart={handleAddToCart} />
    </div>
  );
}
