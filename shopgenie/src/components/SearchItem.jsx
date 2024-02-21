import React from "react";
import HeaderHome from "./HeaderHome";
import DisplayItem from "./UI/DisplayItem";
import UserProgressContext from "../store/UserProgressContext";
import { UserProgressContexProvider } from "../store/UserProgressContext";
import { CartContextProvider } from "../store/CartContext";

const SearchItem = () => {
  console.log("search");
  const storedData = localStorage.getItem("searchData");
  const data1 = JSON.parse(storedData);
  console.log(data1.search);
  return (
    <div>
      <UserProgressContexProvider>
        <CartContextProvider>
          <HeaderHome />
          <DisplayItem search={data1.search} />
        </CartContextProvider>
      </UserProgressContexProvider>
    </div>
  );
};

export default SearchItem;
