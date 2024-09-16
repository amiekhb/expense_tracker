import React, { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

import { IoEyeSharp } from "react-icons/io5";
import Modal, { RecordModal } from "./modal";
import { UserContext } from "../context/user-context";
import CatModal from "./cat-modal";

const Sidebar = () => {
  const { transactions, categories } = useContext(UserContext);
  console.log("categoryName", categories);
  console.log("transactions", transactions);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const [categoryOpen, setCategoryOpen] = useState(false);

  const handleclose = () => {
    setCategoryOpen(false);
  };
  return (
    <div className="bg-white rounded-lg p-3 ">
      <div className="w-full flex flex-col gap-5 h-full">
        <button
          className="btn  text-white flex gap-3 rounded-full bg-blue-600 items-center w-full"
          // onClick={() => setIsOpen(true)}
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <FaPlus />
          Add
        </button>

        <label className="input input-bordered flex items-center gap-2 ">
          <input type="text" className="grow" placeholder="Search" />
          <RecordModal isOpen={isOpen} close={handleClose} />
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
        <h3 className="font-semibold ">Types</h3>
        <div className="w-1/2">
          {" "}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">All</span>
              <input
                type="radio"
                name="radio-10"
                className="radio  checked:bg-blue-500"
                defaultChecked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Income</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                defaultChecked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Expense</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                defaultChecked
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-3 flex justify-between">
            <h3 className="font-semibold ">Category</h3>
            <h4 className="text-xs text-gray-400">Clear</h4>
          </div>
          <div className="flex flex-col gap-2">
            {categories?.map((a) => (
              <div className="flex items-center gap-3 mb-2">
                <IoEyeSharp />
                <p>{a.name}</p>
              </div>
            ))}
          </div>
          <CatModal categoryOpen={categoryOpen} close={handleclose} />
          <RecordModal />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
