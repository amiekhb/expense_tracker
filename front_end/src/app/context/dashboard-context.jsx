"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { apiUrl } from "../utils/util";
import { toast } from "react-toastify";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [chartData, setChartData] = useState(null);

  const getChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      console.log("ST", res.data.donut, res.data.bar);
      setChartData({ donut: res.data.donut, bar: res.data.bar });
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch chart");
    }
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{ bar: chartData?.bar, donut: chartData?.donut }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
