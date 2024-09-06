import React from "react";
import { GoDotFill } from "react-icons/go";
import { TbCurrencyTugrik } from "react-icons/tb";
import { FaArrowCircleUp } from "react-icons/fa";

const Income = () => {
  return (
    <div className="card bg-white text-primary-content  w-[500px]">
      <div className="card-body  ">
        <div className="flex gap-3 items-center">
          <GoDotFill className="text-green-500" />
          <p className="text-black text-2xl">Your Income</p>
        </div>
        <div className="flex flex-col border-t-2 mt-2 gap-10">
          <div className="flex flex-col gap-5">
            <div className="text-black text-3xl font-semibold mt-3 flex items-center ">
              1,200,000
              <TbCurrencyTugrik />
            </div>
            <p className="text-gray-500 text-xl">Your Income Amount</p>
          </div>
          <div className="flex gap-5 items-center">
            <FaArrowCircleUp className="text-green-500" />
            <p className="text-black">32% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
