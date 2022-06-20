import '../styles/Home.css';
import { faker } from '@faker-js/faker';
import Navbar from './Navbar';
import uniqid from 'uniqid';
import Item from './Item';

function Home() {
  let items = [...new Array(15)].map((e) => ({
    name: faker.name.firstName(),
    key: uniqid(),
    image: faker.image.abstract(640, 480, true),
  }));

  return (
    <div className="Home">
      <Navbar />
      <div className="Items">
        {items.map((i) => (
          <Item key={i.key} name={i.name} image={i.image} />
        ))}
      </div>
    </div>
  );
}

export default Home;
