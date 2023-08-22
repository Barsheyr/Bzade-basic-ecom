import React from "react";
// import images
import HeaderImg from "../assets/images/header-fashion.jpg";
// import Link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-black/10 bg-cover bg-no-repeat bg-center py-24 ">
      <div className="container mx-auto flex justify-around h-full">
        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            <div> FASHION </div>
          </div>
          <h1 className="text-[50px] leading-[1.1] font-light mb-4">
            BZADE SALE STYLISH <br />
            <span className="font-semibold"> MALE </span>
          </h1>
          <Link
            to={"/"}
            className="font-semibold border-b-2 border-primary self-start uppercase"
          >
            Discover More
          </Link>
        </div>
        {/* IMAGE */}
        <div className="hidden lg:block overflow-hidden">
          <img src={HeaderImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
