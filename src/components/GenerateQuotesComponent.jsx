import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";

function GenerateQuotesComponent() {
  return (
    <div className="p-5 bg-violet-100 GenerateQuotesComponent min-w-375">
      <Header />
      <Link
        className=" bg-violet-800 text-white font-semibold py-2 text-center  px-5 absolute right-2 top-3 rounded-lg shadow-lg focus:outline-none hover:bg-violet-900 hover:cursor-pointer"
        to="/"
      >
        Home
      </Link>
      <p className="my-5 text-base text-center">
        How to use - Simply select a category of your choice and generate! You
        can also select how many quotes you want to watch!{" "}
      </p>
      <form className="w-80 m-auto py-4 flex justify-around text-md lg:w-1/2  lg:justify-between">
        <select
          className="bg-violet-800 px-4 py-2 text-center text-white font-semibold tracking-wide rounded-lg shadow-lg focus:outline-none hover:bg-violet-900 hover:cursor-pointer"
          name="category"
          id="category"
        >
          <option className="bg-violet-500" value="">Category</option>
        </select>
        <select
          className="bg-violet-800 px-4 py-2 text-center text-white font-semibold tracking-wide rounded-lg shadow-lg focus:outline-none hover:bg-violet-900 hover:cursor-pointer"
          name="amount"
          id="amount"
        >
          <option value="1" selected>
            1
          </option>
        </select>
        <input
          className="bg-violet-800 px-4 py-2 text-center text-white font-semibold tracking-wide rounded-lg shadow-lg focus:outline-none hover:bg-violet-900 hover:cursor-pointer "
          type="submit"
          value="Generate"
        />
      </form>
    </div>
  );
}

export default GenerateQuotesComponent;
