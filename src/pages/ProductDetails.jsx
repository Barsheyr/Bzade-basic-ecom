import React, { useContext } from "react";
// import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../context/CartContext";
// import product context
// import { ProductContext } from "../context/ProductContext";

import { clothDatas } from "../data";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const clothData = clothDatas.find((clothData) => {
    return clothData.id === parseInt(id);
  });

  const { title, price, description, img } = clothData;

  return (
    <section
      key={id}
      className="pb-12 pt-32 lg:py-[20%] h-screen flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={img} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left lg:pt-20">
            <h1 className="text-[26px] font-medium  mb-2 max-w-[450px] mx-auto lg:mx-0 ">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">{price}</div>
            <p className="mb-8"> {description} </p>
            <button
              onClick={() => addToCart(clothData, clothData.id)}
              className="bg-primary py-4 text-white px-8"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
