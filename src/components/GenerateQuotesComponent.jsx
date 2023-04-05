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
          <option value="anxiety">Anxiety</option>
          <option value="change">Change</option>
          <option value="choice">Choice</option>
          <option value="confidence">Confidence</option>
          <option value="courage" selected>Courage</option>
          <option value="death">Death</option>
          <option value="dreams">Dreams</option>
          <option value="excellence">Excellence</option>
          <option value="failure">Failure</option>
          <option value="fairness">Fairness</option>
          <option value="fear">Fear</option>
          <option value="forgiveness">Forgiveness</option>
          <option value="freedom">Freedom</option>
          <option value="future">Future</option>
          <option value="happiness">Happiness</option>
          <option value="inspiration">Inspiration</option>
          <option value="kindness">Kindness</option>
          <option value="leadership">Leadership</option>
          <option value="life">Life</option>
          <option value="living">Living</option>
          <option value="love">Love</option>
          <option value="pain">Pain</option>
          <option value="past">Past</option>
          <option value="success">Success</option>
          <option value="time">Time</option>
          <option value="today">Today</option>
          <option value="truth">Truth</option>
          <option value="work">Work</option>
          
        </select>
        <select
          className="bg-violet-800 px-4 py-2 text-center text-white font-semibold tracking-wide rounded-lg shadow-lg focus:outline-none hover:bg-violet-900 hover:cursor-pointer"
          name="amount"
          id="amount"
        >
          <option className="text-left " value="1" selected>
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            4
          </option>
          <option value="5" >
            5
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
