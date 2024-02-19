import React from "react";
import BackgroungImg from "../assets/LandingImg.png";
import SignIn from "./SignIn";
const Landing = () => {
  return (
    <section className="flex flex-row justify-between items-center px-24  h-[550px] ">
      <div className="h-full w-full">
        <img src={BackgroungImg} alt="backgroundImg" className="h-[650px] w-[650px] min-w-[400px] min-h[400px]"/>
      </div>
      <div className="flex justify-center  w-[400px] h-[500px] pr-[25px] ">
      <SignIn />
      </div>
      
    </section>
  );
};

export default Landing;
