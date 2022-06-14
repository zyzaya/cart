import { faker } from '@faker-js/faker';
import Item from './components/Item';

function App() {
  let image = faker.image.abstract();
  let name = faker.name.firstName();

  return (
    <div className="App">
      <Item image={image} name={name} />
    </div>
  );
}

export default App;
