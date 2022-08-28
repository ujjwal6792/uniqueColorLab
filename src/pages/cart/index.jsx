import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import HomeButton from "../../components/buttons/HomeButton";

const Cart = () => {
  const Navigate = useNavigate();
  const [cartItems, dispatch] = useReducer({
    name: "",
    price: "",
    size: "",
    id: "",
  });
  return (
    <div className="flex flex-col justify-center items-center pt-20 h-[100vh]">
      <p className="text-blue-dark text-5xl">Your Cart is Empty</p>
      <HomeButton
        function={() => Navigate('/Products')}
        text="Go to Products"
        style="rounded-md"
      />
    </div>
  );
};

export default Cart;
