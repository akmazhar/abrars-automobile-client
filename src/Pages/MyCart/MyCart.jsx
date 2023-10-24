import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart/Cart";





const MyCart = () => {
  const loadedData = useLoaderData()
  const [cartItems, setCartItems] = useState(loadedData);
  console.log(cartItems)

 

  return (
    <div>
     {
      cartItems.map(item => <Cart key={item._id} cartItems={cartItems} setCartItems={setCartItems} item={item}></Cart>)
     }
    </div>
  );
};

export default MyCart;
