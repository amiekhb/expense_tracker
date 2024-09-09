import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const Records = () => {
  return (
    <div className="bg-gray-200 flex">
      <div className="w-1/4">
        <button
          className="btn  text-white flex gap-3 rounded-full bg-blue-600 items-center w-full"
          // onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <FaPlus />
          Add
        </button>
        <label className="input input-bordered flex items-center gap-2 ">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div></div>
    </div>
  );
};

export default Records;
