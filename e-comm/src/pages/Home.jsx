import { useEffect, useState } from 'react';
import { getAllProducts } from '../services/Api';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <img src={p.image} alt={p.title} style={{ width: '100px', height: '100px' }} />
            <h4>{p.title.slice(0, 30)}...</h4>
            <p>${p.price}</p>
            <Link to={`/product/${p.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
