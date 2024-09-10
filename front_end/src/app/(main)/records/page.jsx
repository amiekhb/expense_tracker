"use client";

import { UserContext } from "@/app/context/user-context";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { GoHomeFill, GoDotFill } from "react-icons/go";
const Records = () => {
  const { user, categoryData } = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records`);
      console.log("DD", res.data.guilgee);
      setTransactions(res.data.guilgee);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };
  const getInfoCardData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`);
      console.log("ST", res.data);
      setCardInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch categories");
    }
  };
  const fetchCategoryData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`);
      console.log("DD", res.data.guilgee);
      setCategories(res.data.guilgee);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch categories");
    }
  };

  // useEffect(() => {
  //   getInfoCardData();
  //   fetchTransactions();
  // }, [user]);

  // useEffect(() => {
  //   fetchCategoryData();
  // }, [categoryData]);

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
        <p>Types</p>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500"
              defaultChecked
            />
            <span className="label-text">All</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              defaultChecked
            />
            <span className="label-text">Income</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              defaultChecked
            />
            <span className="label-text">Expense</span>
          </label>
        </div>
        <p>Category</p>
        {categories?.name}
      </div>
      <div>
        {" "}
        <div className=" bg-white rounded-xl">
          <div className="overflow-x-auto w-full">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-lg text-black">Last Records</th>
                </tr>
              </thead>
              {/* {transactions?.map((tr) => ( */}
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <div className="bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center">
                      {" "}
                      <GoHomeFill className="text-white w-5 h-5" />
                    </div>
                  </th>
                  <td>
                    <p className="text-xl">
                      <div>{tr.name}</div>
                    </p>
                    <p className="text-gray-400">{tr.updatedat}</p>
                  </td>

                  <td className="text-green-500">{tr.amount}$</td>
                </tr>
              </tbody>
              {/* ))} */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
