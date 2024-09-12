import React, { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { GoHomeFill, GoDotFill } from "react-icons/go";
import BarChart from "./barchart";
import DoughnutChart from "./piechart";
import { IoEyeSharp } from "react-icons/io5";
import Modal from "./modal";
import { UserContext } from "../context/user-context";

const Sidebar = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const { transactions, categories } = useContext(UserContext);
  console.log("categoryName", categories);
  console.log("transactions", transactions);
  const handleClose = () => {
    setCategoryOpen(false);
  };
  return (
    <div className="bg-white rounded-lg p-3 ">
      <div className="w-full flex flex-col gap-5 h-full">
        <button className="btn  text-white flex gap-3 rounded-full bg-blue-600 items-center w-full">
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
          <button
            className="btn rounded-full "
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            <FaPlus className="text-blue-600" /> Add Categories
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box gap-3">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Add Category</h3>
              <div className="flex gap-3 mt-3">
                <select className="select select-bordered w-1/3 max-w-xs">
                  <option disabled selected>
                    <GoHomeFill />
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-2/3 max-w-xs"
                />
              </div>

              <button className="bg-green-700 text-white rounded-full w-full mt-8 p-1">
                Add
              </button>
            </div>
          </dialog>

          <Modal categoryOpen={categoryOpen} close={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
