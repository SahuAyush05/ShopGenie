import React from "react";
import HeaderHome from "../components/HeaderHome";
import HomePage from "../components/HomePage";
import DisplayItem from "../components/UI/DisplayItem";
import { UserProgressContexProvider } from "../store/UserProgressContext";
import { CartContextProvider } from "../store/CartContext";

const Home = () => {
  const data = {};
  localStorage.setItem("searchData", JSON.stringify(data));
  const searchvalue = null;
  return (
    <div>
      <UserProgressContexProvider>
        <CartContextProvider>
          <HeaderHome />
          <HomePage />
          <DisplayItem search="null" />
        </CartContextProvider>
      </UserProgressContexProvider>
    </div>
  );
};

export default Home;
