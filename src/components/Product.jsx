import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../context/CartContext";

const Product = ({ clothData }) => {
  const { addToCart } = useContext(CartContext);

  const { id, name, size, description, img, category, price, title } =
    clothData;

  return (
    <div key={id}>
      <div className="border border-gray-200 h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={img}
              alt="/"
              className="max-h-[200px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>

        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 shadow-sm  flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
          <button onClick={() => addToCart(clothData, id)}>
            <div className="flex justify-center items-center text-white bg-red-500 w-12 h-12">
              <BsPlus className="text-3xl" />
            </div>
          </button>

          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-gray-100 flex justify-center items-center"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      {/* categories */}
      <div>
        <div
          className="text-md  font-extrabold capitalize text-gray-500 mb-1
        "
        >
          {category}
        </div>
        <Link>
          <h2 className="font-semibold mb-1"> {title} </h2>
        </Link>

        <h2 className="font-semibold"> {price} </h2>
      </div>
    </div>
  );
};

export default Product;
