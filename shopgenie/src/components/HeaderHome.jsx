import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import logoImg from "../assets/GenieLogo.png";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
const HeaderHome = () => {

  const cartCtx=  useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)
  const totalCartItem = cartCtx.items.reduce(( totalNumberOfItems,item)=>{
    return totalNumberOfItems+ item.quantity;
  },0);
  function handleShowCart(){
    userProgressCtx.showCart();
  }
  function HandleSubmit(event) {
    // event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    // localStorage.setItem('searchData', JSON.stringify(data));
    const storedData = localStorage.getItem("searchData");
    const data1 = JSON.parse(storedData);
    data1.someProperty = data;
    localStorage.setItem("searchData", JSON.stringify(data));
    navigate("/search");
    event.target.reset();
  }
  const navigate = useNavigate();
  function logOut() {
    navigate("/");
  }

  const storedData = localStorage.getItem("userData");
  const data = JSON.parse(storedData);
  return (
    <header
      id="main-header"
      className="flex flex-row items-between h-[4.5em] px-8 bg-white bg-opacity-90 fixed top-0 w-[100%] z-50"
    >
      <div id="title" className="h-[100%] w-[20%]">
        <img src={logoImg} alt="logoImage" className="h-[100%]" />
        <h1>ShopGenie</h1>
      </div>

      <div className=" w-[40%] h-full ">
        <form
          className="w-full flex flex-row justify-center items-center"
          onSubmit={HandleSubmit}
        >
          <input
            type="text"
            placeholder="Search for Products"
            id="search"
            name="search"
            className=" p-[1em] rounded-md border-[1px] text-[#211C6A] outline-none  opacity-90 bg-gradient-to-r from-[#E5E3D2] to-[#E5E3FF] mt-1 block w-[50%] h-[40%]"
          />
          <button
            type="submit"
            className="p-1 flex justify-center items-center mt-1 "
          >
            <FaSearch className="text-[#211C6A]" />
          </button>
        </form>
      </div>

      <div className="w-[30%] h-full flex justify-center items-center gap-[2em] ">
        <button>
          <FaFilter className="text-[#070F2B] text-[1.5em]" />
        </button>
        <button className="flex flex-row" onClick={handleShowCart}>
          <FaShoppingCart className="text-[#070F2B] text-[1.5em]" />
          <p className="text-[#211C6A] px-[5px]">Cart ({totalCartItem})</p>
        </button>
        <div>
          <h2 className="text-[#070F2B] text-[1.2em] font-medium">
            {data.firstName} {data.lastName}
          </h2>
        </div>
        <button onClick={logOut}>
          <PiSignOutBold className="text-[#070F2B] text-[1.5em] font-extrabold" />
        </button>
      </div>
    </header>
  );
};

export default HeaderHome;
