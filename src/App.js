
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Menu } from './components/Menu';
import Cart from "../src/components/Cart.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const [pizzas,setPizzas]=useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleAddToCart =(pizza)=>{
    setCart((prevCart)=>[...prevCart,pizza]);
  }
  useEffect(()=>{
    fetch("http://localhost:5233/api/pizza")
    .then(response=>response.json())
    .then(data=>setPizzas(data))
  },
[]);
  return(
    <>
    <Routes>
    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
    <Header/>
    <Menu pizzas={pizzas} handleAddToCart={handleAddToCart}/>
    <Footer/>
    </>
  );
}

export default App;
