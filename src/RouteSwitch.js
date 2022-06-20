import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import App from './components/App';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="cart" element={<Cart />} />
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
