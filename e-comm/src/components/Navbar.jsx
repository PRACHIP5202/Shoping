import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/cart" style={{ marginRight: "1rem" }}>Cart</Link>
      <Link to="/chat" style={{ marginRight: "1rem" }}>Bot</Link>
      <Link to="/products" style={{ marginRight: "1rem" }}>Productdetails</Link>
      <Link to="/cart"> Go to cart </Link>  
      
    </nav>
  );
}

export default Navbar;
