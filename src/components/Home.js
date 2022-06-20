import '../styles/Home.css';
import { faker } from '@faker-js/faker';
import uniqid from 'uniqid';
import Item from './Item';

function Home() {
  let items = [...new Array(15)].map((e) => ({
    name: faker.name.firstName(),
    key: uniqid(),
    image: faker.image.abstract(640, 480, true),
  }));

  function addToCart(item) {
    console.log(item);
  }

  return (
    <div className="Home">
      <div className="Items">
        {items.map((i) => (
          <Item
            key={i.key}
            name={i.name}
            image={i.image}
            onAdd={() => addToCart(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
