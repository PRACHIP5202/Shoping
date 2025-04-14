import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { cartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems, setCartItems } = useContext(cartContext);
  const [formData, setFormData] = useState({ name: "", address: "", payment: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCartItems([]); 
    navigate("/success");
  };


  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const sendOrderToBackend = async () => {
    const orderData = {
      userId: "123",
      items: [
        { productId: "frontend_data re", quantity: 2 },
        { productId: "Should receive in backend n vs terminal", quantity: 1 }
      ],
      total: 999
    };
  
    try {
      const res = await fetch("http://localhost:5000/orders", { // where to send? wt to send? wt is the formate? 
        method: "POST", // we’re POSTing (not GET)
        headers: {
          "Content-Type": "application/json" // we are sending JSON data
        },
        body: JSON.stringify(orderData) // convert JS object to JSON string
      });
  
      // 3. Get and show the response from backend
      const result = await res.json(); // got it!!!
      console.log("I should receive it in console of front end n it is wt we send from backend, pasted in Postman", result);
    } catch (err) {
      console.error("Error sending order:", err);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>

      <div style={{ marginBottom: "20px" }}>
        <h4>Order Summary</h4>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {cartItems.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <img src={item.image} alt={item.title} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
              <span>{item.title}</span> - 
              <span
                  style={{
                    backgroundColor: "#ec2261",
                    color: "white",
                    borderRadius: "12px",
                    padding: "2px 8px",
                    marginLeft: "10px",
                    fontSize: "12px"
                  }}
              >{item.quantity}  </span> 
                
                 x ₹{item.price}
            </li>
          ))}
        </ul> 
        <h4>Total Amount: ₹{totalAmount}</h4>
      </div>


      <div style={{ marginBottom: "20px" }} >
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <textarea
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
      />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <select
        value={formData.payment}
        onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
        required
      >
        <option value="">Select Payment</option>
        <option value="card">Card</option>
        <option value="cash">Cash on Delivery</option>
        <option value="upi">UPI</option>
      </select>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button type="submit" onClick={sendOrderToBackend}>Place Order</button>
      </div>
    </form>
  );
};
export default CheckoutPage;