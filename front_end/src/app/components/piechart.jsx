import { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { DashboardContext } from "../context/dashboard-context";

const DoughnutChart = () => {
  const { donut } = useContext(DashboardContext);
  const data2 = {
    datasets: [
      {
        data: donut?.map((a) => a.sum),
        // categoryData?.map((a) => a.amount)
        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: donut?.map((a) => a.cat_name),
    // categoryData?.map((a) => a.name)
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-4 bg-white card w-1/2 ">
      <h1 className="font-semibold">Income - Expense</h1>
      <div className="h-96 w-96">
        <Doughnut options={options2} data={data2} />
      </div>
    </div>
  );
};

export default DoughnutChart;
