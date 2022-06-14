import './App.css';
import { faker } from '@faker-js/faker';
import Item from './components/Item';
import Navbar from './components/Navbar';

function App() {
  let image = faker.image.abstract();
  let name = faker.name.firstName();

  return (
    <div className="App">
      <Navbar />
      <Item image={image} name={name} />
    </div>
  );
}

export default App;
