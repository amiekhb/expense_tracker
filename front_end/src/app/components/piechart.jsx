// import React from "react";
// import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Category A", value: 400 },
//   { name: "Category B", value: 300 },
//   { name: "Category C", value: 300 },
//   { name: "Category D", value: 200 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// function MyPieChart() {
//   return (
//     <div className="">
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             data={data}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default MyPieChart;
