import React from "react";
import Image1 from "../../assets/SignIn.png";
import { currencyFormatter } from "../../Util/Formatting";
import { FaStar } from "react-icons/fa";
const Card1 = () => {
  return (
    <div className="w-[350px] h-[450px] bg-white bg-opacity-30 shadow-md shadow-[#9290C3] m-[2em] rounded-md transform transition duration-300 ease-in-out hover:-translate-y-0.3">
      <div className="">
        <img src={Image1} alt="image" className="" />
      </div>
      <div className="flex align-center justify-center mx-[8px] my-[0.7em]">
        <h2 className="text-[#070F2B] font-[600]">
          Microsoft Surface: Microsoft Surface Laptop 4
        </h2>
      </div>
      <div className="mx-[8px]">
        <p className="text-[0.7em]">
          SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED
          technology A12 Bionic chip with ...
        </p>
      </div>
      <div className="mx-[8px] my-[0.7em] flex flex-row gap-2">
        <h2 className="text-[0.9em] font-[600]">Category: </h2>
        <p className="text-[0.9em] font-[470]">laptops</p>
      </div>
      <div className="mx-[8px] my-[0.7em] flex flex-row justify-between h-[1.7em]">
        <div className="flex flex-row justify-center items-center p-2 gap-[0.5] rounded-md bg-[#535C91]">
          <p1 className="text-[white]">4.5</p1>
          <FaStar className="flex align-center text-[white] " />
        </div>
        <div className="flex flex-row gap-1 mx-[1em]">
          <h2 className="font-[600]">InStock:</h2>
          <h2>68</h2>
        </div>
      </div>
      <div className="flex flex-row gap-[0.8em] mx-[8px] items-baseline">
        <p className="text-[1.3em] font-[600]">
          {currencyFormatter.format(480)}
        </p>
        <p className=" text-[#535C91]">78% off</p>
      </div>
      <div className=" flex justify-center items-center">
        <button
          type="submit"
          className="bg-[#535C91]  m-auto hover:bg-[#070F2B] text-[#E5E3FF] py-2 mt-2 w-[8em] px-4 rounded-md   transform transition duration-300 ease-in-out hover:-translate-y-0.5 "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card1;
