import React, { useState, useEffect, useContext } from "react";

//  sidebar context
import { SidebarContext } from "../context/SidebarContext";
// cart context
import { CartContext } from "../context/CartContext";

// import icons
import { BsBag } from "react-icons/bs";

// import link
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listeners
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div>
      <div
        className={`${
          isActive ? "bg-white py-4 shadow-md " : "bg-none py-6"
        } fixed w-full z-10 transition-all`}
      >
        <div className="container mx-auto  flex item-center justify-between h-full">
          <Link to={"/"}>
            <div>
              <h1 className="text-3xl">BZADE</h1>
            </div>
          </Link>
          {/* cart */}
          <div
            className="cursor-pointer flex relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full text-white flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
