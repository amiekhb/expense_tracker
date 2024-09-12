import React, { useContext } from "react";
import { GoHomeFill, GoDotFill } from "react-icons/go";
import { UserContext } from "../context/user-context";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const RecordsMain = () => {
  const { cardInfo, transactions } = useContext(UserContext);

  return (
    <div className="overflow-x-auto w-full">
      <div className="p-3 flex justify-between">
        <div className="flex gap-3">
          <button className="bg-gray-300 rounded-md p-3 btn">
            <IoIosArrowBack />
          </button>
          <p></p>
          <button className="bg-gray-300 rounded-md p-3 btn">
            <IoIosArrowForward />
          </button>
        </div>
        <select className="select select-bordered w-1/7 ">
          <option disabled selected>
            All
          </option>
          <option>Newest first</option>
          <option>Latest first</option>
        </select>
      </div>
      <div className="flex flex-col gap-3">
        {transactions?.map((tr) => (
          <div className="flex p-3  bg-white rounded-xl justify-between ">
            <div className="flex gap-5 text-start">
              <div className="bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center">
                <GoHomeFill className="text-white w-5 h-5 " />
              </div>
              <div>
                <p className="text-xl">
                  <div>{tr.name}</div>
                </p>
                <p className="text-gray-400">{tr.updatedat}</p>
              </div>
            </div>

            <div className="text-green-500  flex items-center justify-start ">
              {tr.amount}$
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordsMain;
