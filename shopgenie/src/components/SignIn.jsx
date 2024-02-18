import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
const SignIn = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(false);
  function submitHandler(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    // data.acquisition = acquisitionChannel;

    console.log(data.userName);
    console.log(data.password);

    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: data.userName,
            password: data.password,
          }),
        });

        if (!response.ok) {
          // If response status is not okay, set error to true and return
          setError(true);
          return;
        }

        const data2 = await response.json();
        console.log(data2.token);

        async function checkData() {
          try {
            const response2 = await fetch("https://dummyjson.com/auth/me", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${data2.token}`,
              },
            });

            const data3 = await response2.json();
            console.log(data3);
            setResponseData(data3);
            setError(false);
            console.log("success");
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        checkData();
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setResponseData(null);
      }
    }
    fetchData();
    event.target.reset();
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <h2 className="text-3xl shadow-[#535C91] font-semibold mb-4 text-[#535C91]">
          Welcome to ShopGenie !!
        </h2>
      </div>

      <div className="bg-white bg-opacity-30 shadow-xl shadow-[#535C91] rounded-md p-8 items-center w-[400px] h-[400px]">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-row justify-center items-center  mb-4">
            <h2 className="text-2xl font-semibold  text-[#070F2B] pr-[8px]">
              Sign In
            </h2>
            <FaSignInAlt className="text-[#535C91] text-2xl mt-1" />
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className="mb-6">
            <label
              htmlFor="userName"
              className="block font-medium text-[#211C6A]"
            >
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              required
              className="form-input rounded-md border-[#535C91] opacity-90 bg-[#E5E3FF] mt-1 block w-full"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-medium text-[#211C6A] "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="off"
              className="form-input rounded-md border-[#535C91] opacity-90 bg-[#E5E3FF] mt-1 block w-full"
            />
          </div>
          <div className="mb-2px">
            {error && (
              <div className="text-[#BF3131]">*Invalid credentials</div>
            )}
          </div>
          <div className=" flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#535C91]  m-auto hover:bg-[#070F2B] text-[#E5E3FF] py-2 mt-2 w-[8em] px-4 rounded-md shadow-md hover:shadow-[#535C91] hover:shadow-xl transform transition duration-300 ease-in-out hover:-translate-y-1 "
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
