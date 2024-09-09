import { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { UserContext } from "../context/user-context";
import { apiUrl } from "../utils/util";

const BarChart = ({ cardInfo }) => {
  const data1 = {
    labels: ["Jan"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: [cardInfo?.income?.sum],
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: [cardInfo?.expense?.sum],
      },
    ],
  };

  const options1 = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  console.log("EXP", cardInfo);
  return (
    <div className="flex items-center justify-center p-4 bg-white card  w-1/2">
      <h1 className="font-semibold">Income - Expense</h1>
      <Bar data={data1} options={options1} />
    </div>
  );
};

export default BarChart;
