import '../styles/Home.css';
import { faker } from '@faker-js/faker';
import Navbar from './Navbar';
import Cart from './Cart';
import uniqid from 'uniqid';

function Home() {
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

export default Home;
