import React from 'react';
import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

export default function Cart({cart,setCart})
{
    const [customerData, setCustomerData] = useState({
        name: "",
        lastName: "",
        address: "",
        phone: "",
      });
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleConfirmOrder = (e) => {
        e.preventDefault();
    
        const orderData = {
          customerData,
          cart,
          totalPrice: cart.reduce((total, pizza) => total + pizza.price, 0),
        };
    
        console.log("Sending order data:", orderData); // Log the data being sent
    
        fetch("http://localhost:5233/api/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Order has been sent:", data);
            setCart([]);
            navigate("/"); // Redirect to home page
          })
          .catch((error) => {
            console.error("Error occurred while sending order:", error);
          });
      };
    
      const totalPrice = cart.reduce((total, pizza) => total + pizza.price, 0);
    
      return (
        <div className="cart">
          <h2>Your Cart</h2>
    
          {cart.length === 0 ? (
            <p>Your cart is empty. Add some pizzas!</p>
          ) : (
            <>
              <ul>
                {cart.map((pizza, index) => (
                  <li key={index} className="cart-item">
                    <img src={pizza.photoName} alt={pizza.name} width="50" />
                    <span>{pizza.name} - {pizza.price}$ (x1)</span>
                  </li>
                ))}
              </ul>
              <p>Total: {totalPrice}$</p>
            </>
          )}
    
          <h3>Delivery Information</h3>
          <form onSubmit={handleConfirmOrder}>
            <div>
              <label htmlFor="name">First Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={customerData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={customerData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={customerData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={customerData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn">
              Confirm Order
            </button>
          </form>
        </div>
      );
}