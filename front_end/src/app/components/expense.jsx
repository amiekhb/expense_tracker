import React from "react";
import { GoDotFill } from "react-icons/go";
import { TbCurrencyTugrik } from "react-icons/tb";
import { FaArrowCircleDown } from "react-icons/fa";

const Expense = () => {
  return (
    <div className="card bg-white text-primary-content  w-[500px] ">
      <div className="card-body  ">
        <div className="flex gap-3 items-center">
          <GoDotFill className="text-blue-800" />
          <p className="text-black text-2xl">Total Expenses</p>
        </div>
        <div className="flex flex-col border-t-2 mt-2 gap-10">
          <div className="flex flex-col gap-5">
            <div className="text-black text-3xl font-semibold mt-3 flex items-center ">
              -1,200,000
              <TbCurrencyTugrik />
            </div>
            <p className="text-gray-500 text-xl">Your expence Amount</p>
          </div>
          <div className="flex gap-5 items-center">
            <FaArrowCircleDown className="text-blue-800" />
            <p className="text-black">32% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;
