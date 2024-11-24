import React from "react";
import CartModel from "./CartModel";

function NavBar({ cartProduct, setCartProduct }) {
  return (
    <nav className="flex justify-between md:justify-around items-center p-4 bg-green-500 text-white rounded-xl text-sm md:text-lg">
      <div><a href="#">E-Commerce</a></div>
      <div className="hidden md:block">
        <ul className="flex gap-4">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Products</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </div>
      <CartModel cartProduct={cartProduct} setCartProduct={setCartProduct} />
    </nav>
  );
}

export default NavBar;
