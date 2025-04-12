import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { cartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems, setCartItems } = useContext(cartContext);
  const [formData, setFormData] = useState({ name: "", address: "", payment: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send order to backend here
    setCartItems([]); // Clear cart
    navigate("/success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>

      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <textarea
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
      />

      <select
        value={formData.payment}
        onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
        required
      >
        <option value="">Select Payment</option>
        <option value="card">Card</option>
        <option value="cash">Cash on Delivery</option>
      </select>

      <button type="submit">Place Order</button>
    </form>
  );
};
export default CheckoutPage;