import { Outlet, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Navbar from './Navbar';
import { faker } from '@faker-js/faker';
import uniqid from 'uniqid';
import { useRef, useState } from 'react';

export default function App() {
  let items = useRef(
    [...new Array(15)].map((e) => ({
      name: faker.name.firstName(),
      key: uniqid(),
      image: faker.image.abstract(640, 480, true),
    }))
  );

  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    let newCart = cart.map((i) => {
      let ret = { ...i };
      if (i.key === item.key) ret.count += 1;
      return i;
    });

    if (newCart.filter((e) => e.key === item.key).length === 0) {
      newCart.push({
        key: item.key,
        name: item.name,
        count: 1,
      });
    }

    console.log(newCart);
    setCart(newCart);
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="cart" element={<Cart items={cart} />} />
        <Route
          path=""
          element={<Home onAddToCart={handleAddToCart} items={items.current} />}
        />
      </Routes>
      <Outlet onAddToCart={handleAddToCart} />
    </div>
  );
}
