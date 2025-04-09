import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Productdetails() {
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
    </div>
  );
}

export default Productdetails;
