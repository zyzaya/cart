import './App.css';
import { faker } from '@faker-js/faker';
import Item from './components/Item';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import uniqid from 'uniqid';

function App() {
  let image = faker.image.abstract();
  let name = faker.name.firstName();
  let items = [...new Array(15)].map((e) => ({
    name: faker.name.firstName(),
    key: uniqid(),
  }));

  return (
    <div className="App">
      <Navbar />
      {/* <Item image={image} name={name} /> */}
      <Cart items={items} />
    </div>
  );
}

export default App;
