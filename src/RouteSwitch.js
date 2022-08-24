import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart/*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
