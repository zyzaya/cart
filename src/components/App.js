import { Outlet, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Navbar from './Navbar';
import { faker } from '@faker-js/faker';
import uniqid from 'uniqid';

export default function App() {
  let items = [...new Array(15)].map((e) => ({
    name: faker.name.firstName(),
    key: uniqid(),
    image: faker.image.abstract(640, 480, true),
  }));

  function handleAddToCart(item) {
    console.log(item);
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route
          path=""
          element={<Home onAddToCart={handleAddToCart} items={items} />}
        />
      </Routes>
      <Outlet onAddToCart={handleAddToCart} />
    </div>
  );
}
