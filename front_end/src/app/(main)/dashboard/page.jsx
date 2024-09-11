"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { apiUrl } from "@/app/utils/util";

import { GoHomeFill, GoDotFill } from "react-icons/go";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
import Modal from "@/app/components/modal";
import BarChart from "@/app/components/barchart";
import DoughnutChart from "@/app/components/piechart";
import { UserContext } from "@/app/context/user-context";
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Dashboard = () => {
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserToken(token);
  }, []);
  console.log("userToken", userToken);

  const { user, cardInfo, transactions } = useContext(UserContext);

  const [barChartData, setBarChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  const getBarChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      console.log("dougnut", res.data.bar);
      setBarChartData(res.data.bar);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch doughnut data");
    }
  };

  const getDougnutChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      console.log("dougnut", res.data.donut);
      setDonutChartData(res.data.donut);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch doughnut data");
    }
  };

  useEffect(() => {
    getBarChartData();
    getDougnutChartData();
  }, [user]);

  return (
    <div className="grid bg-gray-200 p-10 justify-between gap-5 w-screen">
      <div className="grid grid-cols-3 justify-between gap-5">
        <div className="card bg-blue-600 text-primary-content w-[500px]">
          <div className="card-body flex flex-col gap-20">
            <img width={100} height={50} src="./image/logoW.png" alt="" />
            <div className="flex justify-between items-end">
              <div>
                <p className="text-gray-300">Cash</p>
                <div className="text-white text-3xl font-semibold mt-3">
                  {cardInfo?.income.sum - cardInfo?.expense.sum}$
                </div>
              </div>

              <PiContactlessPaymentFill className="w-10 h-10" />
            </div>
          </div>
        </div>
        <div className="card bg-white text-primary-content  w-[500px]">
          <div className="card-body  ">
            <div className="flex gap-3 items-center">
              <GoDotFill className="text-green-500" />
              <p className="text-black text-2xl">Your Income</p>
            </div>
            <div className="flex flex-col border-t-2 mt-2 gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-black text-3xl font-semibold mt-3 flex items-center ">
                  {cardInfo?.income.sum}$
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
        <div className="card bg-white text-primary-content  w-[500px] ">
          <div className="card-body  ">
            <div className="flex gap-3 items-center">
              <GoDotFill className="text-blue-800" />
              <p className="text-black text-2xl">Total Expenses</p>
            </div>
            <div className="flex flex-col border-t-2 mt-2 gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-black text-3xl font-semibold mt-3 flex items-center ">
                  -{cardInfo?.expense.sum}$
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
      </div>
      <div className="w-full flex gap-5">
        <BarChart barChartData={barChartData} />
        <DoughnutChart donutChartData={donutChartData} />
      </div>
      <div className=" bg-white rounded-xl">
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-lg text-black">Last Records</th>
              </tr>
            </thead>
            {transactions?.map((tr) => (
              <tbody>
                {/* row 1 */}
                <tr>
                  <th className="flex gap-5">
                    <div className="bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center">
                      {" "}
                      <GoHomeFill className="text-white w-5 h-5" />
                    </div>

                    <div>
                      {" "}
                      <p className="text-xl">
                        <div>{tr.name}</div>
                      </p>
                      <p className="text-gray-400">{tr.updatedat}</p>
                    </div>
                  </th>

                  <td className="text-green-500">{tr.amount}$</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Dashboard;
