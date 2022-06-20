import './App.css';
import { faker } from '@faker-js/faker';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import uniqid from 'uniqid';

function App() {
  let items = [...new Array(15)].map((e) => ({
    name: faker.name.firstName(),
    key: uniqid(),
  }));

  return (
    <div className="App">
      <Navbar />
      <Cart items={items} />
    </div>
  );
}

export default App;
