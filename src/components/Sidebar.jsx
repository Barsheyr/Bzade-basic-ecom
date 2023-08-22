import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
// import { FiTrash2 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/Cartitem";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { clothDatas } from "../data";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-gray-100 fixed top-0 h-full shadow-2xl md:w-[35w] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b border-red-500">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>

        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div className=" flex flex-col gap-y-2 h-[450px] lg:h-[400px] overflow-y-auto overflow-x-hidden ">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div>
        {/* total */}
        <div className="font-semibold">
          <span className="mr-2"> Total: </span> {parseFloat(total).toFixed(2)}
        </div>

        {/* clear cart icon */}

        <div
          onClick={clearCart}
          className="cursor-pointer shadow-2xl py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
        >
          <FiTrash2 />
        </div>
      </div>

      <Link
        to="/"
        className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
      >
        View Cart
      </Link>
      <Link className="bg-primary text-white justify-center items-center w-full flex p-4">
        Checkout
      </Link>
    </div>
  );
};

export default Sidebar;
