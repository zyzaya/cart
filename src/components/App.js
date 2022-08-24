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

  const [cart, setCart] = useState({});

  function addToCart(item) {
    let newCart = { ...cart };
    if (newCart[item.key] === undefined) {
      newCart[item.key] = item;
      newCart[item.key].count = 1;
    } else {
      newCart[item.key].count += 1;
    }
    setCart(newCart);
  }

  function setCount(item, count) {
    let newCart = { ...cart };
    count = parseInt(count);
    if (count === 0) {
      delete newCart[item.key];
    } else {
      if (newCart[item.key] === undefined) newCart[item.key] = item;
      newCart[item.key].count = count;
    }
    setCart(newCart);
  }

  let itemCount = Object.values(cart).reduce((count, item) => {
    return count + parseInt(item.count);
  }, 0);

  return (
    <div>
      <Navbar itemCount={itemCount} />
      <Routes>
        <Route
          path="cart"
          element={
            <Cart items={Object.values(cart)} onCountChange={setCount} />
          }
        />
        <Route
          path=""
          element={
            <Home onAddToCart={(i) => addToCart(i)} items={items.current} />
          }
        />
      </Routes>
      <Outlet />
    </div>
  );
}
