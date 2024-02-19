import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import logoImg from "../assets/GenieLogo.png";
const HeaderHome = () => {
  return (
    <header
      id="main-header"
      className="flex flex-row items-between h-[4.5em] px-8 bg-white bg-opacity-70 fixed top-0 w-[100%] z-50"
    >
      <div id="title" className="h-[100%] w-[20%]">
        <img src={logoImg} alt="logoImage" className="h-[100%]" />
        <h1>ShopGenie</h1>
      </div>
      <div className="flex justify-center items-center w-[40%] h-full ">
        <input
          type="text"
          placeholder="Search for Products"
          className=" p-[1em] rounded-md border-[1px] text-[#211C6A] outline-none  opacity-90 bg-gradient-to-r from-[#E5E3D2] to-[#E5E3FF] mt-1 block w-[50%] h-[40%]"
        />
        <button className="p-1 flex justify-center items-center mt-1 ">
          <FaSearch className="text-[#211C6A]" />
        </button>
      </div>
      <div className="w-[30%] h-full flex justify-center items-center gap-[2em] ">
        <button>
          <FaFilter className="text-[#070F2B] text-[1.5em]" />
        </button>
        <button className="flex flex-row">
          <FaShoppingCart className="text-[#070F2B] text-[1.5em]" />
          <p className="text-[#211C6A] px-[5px]">Cart (0)</p>
        </button>
        <div>
          <h2 className="text-[#070F2B] text-[1.2em] font-medium">
            AYUSH SAHU
          </h2>
        </div>
        <button>
          <PiSignOutBold className="text-[#070F2B] text-[1.5em] font-extrabold" />
        </button>
      </div>
    </header>
  );
};

export default HeaderHome;
