import { Bar } from "react-chartjs-2";

const BarChart = ({ barChartData }) => {
  console.log("barChartData", barChartData);
  const data1 = {
    labels: barChartData?.map((a) => a.sar),

    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: barChartData?.map((a) => a.total_inc),
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: barChartData?.map((a) => a.total_exp),
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

  return (
    <div className="flex items-center justify-center p-4 bg-white card  w-1/2">
      <h1 className="font-semibold">Income - Expense</h1>
      <Bar data={data1} options={options1} />
    </div>
  );
};
export default BarChart;
