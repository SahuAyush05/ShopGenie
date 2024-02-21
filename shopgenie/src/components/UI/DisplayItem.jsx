import React from "react";
import Card1 from "./Card1.jsx";
import useHttp from "../../hooks/useHttp.js";
const requestConfig = {};

const DisplayItem = (props) => {
  let url="https://dummyjson.com/products"
  console.log(props.search)
  if(props.search!=="null"){
    url=`https://dummyjson.com/products/search?q=${props.search}`
  }
  console.log(url);
  const { data: displayItems, isLoading, error } = useHttp(
    url,
    requestConfig,
    []
  );

  if (isLoading) {
    return <p>Fetching items...</p>;
  }

  if (error) {
    return <p>Failed to fetch items</p>;
  }

  if (!displayItems || !displayItems.products) {
    return <p>No items found</p>;
  }

  const storedData=localStorage.getItem("searchData");
  const data = JSON.parse(storedData);
  if(storedData)
  {
    console.log("seacrched data");
    console.log(data);
  }

 

  return (
    <div className="bg-[#e5e3ff] px-[3.4em]">
      <div className="grid grid-cols-3 justify-items-center bg-[#e5e3ff]">
        {displayItems.products.map((item) => (
          <Card1 key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DisplayItem;
