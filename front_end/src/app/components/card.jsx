import React from "react";
import { PiContactlessPaymentFill } from "react-icons/pi";

const Card = () => {
  return (
    <div className="card bg-blue-600 text-primary-content w-[500px]">
      <div className="card-body flex flex-col gap-20">
        <img width={100} height={50} src="./image/logoW.png" alt="" />
        <div className="flex justify-between items-end">
          <div>
            <p className="text-gray-300">Cash</p>
            <div className="text-white text-3xl font-semibold mt-3">
              10,000,00
            </div>
          </div>

          <PiContactlessPaymentFill className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Card;
