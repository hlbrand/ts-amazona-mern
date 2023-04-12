import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { fashionMale, sampleProducts } from './data';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>TS Amazona</header>
      <main>
        {fashionMale.map((product) => (
          <li key={product.slug}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p className="text-orange-500">₫ {product.price}</p>
          </li>
        ))}
      </main>
      <footer>All right reserved</footer>
    </div>
  );
}

export default App;
