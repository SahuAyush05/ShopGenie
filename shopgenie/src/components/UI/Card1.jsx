import React from "react";
import { currencyFormatter } from "../../Util/Formatting";
import { FaStar } from "react-icons/fa";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
const Card1 = ({ item }) => {
  const cartCtx=useContext(CartContext);
  function handleAddMealToCart(){
      cartCtx.addItem(item);
  }
  return (
    <div className="relative w-[350px] h-[500px] bg-white bg-opacity-30 shadow-md shadow-[#9290C3] m-[2em] rounded-md transform transition duration-300 ease-in-out hover:-translate-y-0.3">
      <div className="h-[45%]">
        <img src={item.thumbnail} alt="image" className="h-full w-full" />
      </div>
      <div className="flex align-center justify-center mx-[8px] my-[0.7em]">
        <h2 className="text-[#070F2B] font-[600]">
          {item.brand}:{item.title}
        </h2>
      </div>
      <div className="mx-[8px]">
        <p className="text-[0.7em]">{item.description}</p>
      </div>
      <div className="mx-[8px] my-[0.7em] flex flex-row gap-2">
        <h2 className="text-[0.9em] font-[600]">Category: </h2>
        <p className="text-[0.9em] font-[470]">{item.category}</p>
      </div>
      <div className="mx-[8px] my-[0.7em] flex flex-row justify-between h-[1.7em]">
        <div className="flex flex-row justify-center items-center p-2 gap-[0.5] rounded-md bg-[#535C91]">
          <p className="text-[white]">{item.rating}</p>
          <FaStar className="flex align-center text-[white] " />
        </div>
        <div className="flex flex-row gap-1 mx-[1em]">
          <h2 className="font-[600]">InStock:</h2>
          <h2>{item.stock}</h2>
        </div>
      </div>
      <div className="flex flex-row gap-[0.8em] mx-[8px] items-baseline">
        <p className="text-[1.3em] font-[600]">
          {currencyFormatter.format(item.price)}
        </p>
        <p className=" text-[#535C91]">{item.discountPercentage}%</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <button
          type="submit"
          onClick={handleAddMealToCart}
          className="bg-[#535C91]  m-auto hover:bg-[#070F2B] text-[#E5E3FF] py-2 w-full rounded-md   transform transition duration-300 ease-in-out hover:-translate-y-0.5 "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card1;
