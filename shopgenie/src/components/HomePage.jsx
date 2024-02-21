import React from "react";
import HeroImg from "../assets/HeroImg.svg";
const HomePage = () => {
  return (
    <div className="flex flex-row mt-[4.5%] w-[100%] justify-between px-[5em] items-center bg-gradient-to-b from-[#E5E3D2] to-[#E5E3FF]">
      <div className="flex flex-col pl-[7em] w-[50%]">
        <div className="p-0 ">
          <p className="p-0 text-[#535C9f] text-[2.2em] font-[550] leading-[1.9em] tracking-wide">
            Welcome to{" "} <br/>
            <span className="p-0 text-[#FF914D] text-[2em] mt-32  font-[550] tracking-wide">
              ShopGenie
            </span>
          </p>
        </div>
        <div className="pt-[1.5em] leading-[1.4em] ">
          <p className="p-0 text-[#535C9f] text-[1.7em] font-[450] tracking-wide">
            Your one-stop <span className="p-0 text-[#535C9f] text-[1em] m-0  font-[650] tracking-wide">destination </span>for all
          </p>
        </div>
        <div className="pb-[2.5em]">
          <p className="p-0 text-[#535C9f] text-[1.7em] font-[450] tracking-wide">
            your <span className="p-0 text-[#535C9f] text-[1em]  font-[650] tracking-wide">shopping </span>needs!
          </p>
        </div>
        <div>
        <div className="">
            <button
              type="submit"
              className="bg-[#535C9f]  m-auto text-[#E5E3FF] text-[1.2em] py-1 mt-2 w-[8em] px-3 font-[550] rounded-md  transform transition duration-300 ease-in-out hover:-translate-y-1 "
            >
              Explore
            </button>
            </div>
        </div>
        {/* <div className="pt-[4em] leading-[1.4em] ">
          <p className="p-0 text-[#535C9f] text-[1.7em] font-[450] tracking-wide">Explore our vast <span className="p-0 text-[#535C9f] text-[1em] m-0  font-[650] tracking-wide">collection </span>of products</p>
        </div>
        <div className="">
          <p className="p-0 text-[#535C9f] text-[1.7em] font-[450] tracking-wide">
            and find <span className="p-0 text-[#535C9f] text-[1em] m-0  font-[650] tracking-wide">everything </span>you need.
          </p>
        </div> */}
      </div>
      <div className="w-[50%] pr-[2em]">
        <div>
          <img src={HeroImg} alt="HeroImg" className="w-[650px]" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
