import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { cartContext } from '../context/CartContext';

function Productdetails() {

  const { addToCart } = useContext(cartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error('Error fetching product:', err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>

      <button onClick={() => addToCart(product)} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}>
        Add to Cart
      </button>

      </div>
  );
}

export default Productdetails;
