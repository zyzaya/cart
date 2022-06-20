import '../styles/Home.css';
import Item from './Item';

function Home(props) {
  return (
    <div className="Home">
      <div className="Items">
        {props.items.map((i) => (
          <Item
            key={i.key}
            name={i.name}
            image={i.image}
            onAdd={() => props.onAddToCart(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
