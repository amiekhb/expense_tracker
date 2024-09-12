"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { apiUrl } from "../utils/util";
import { toast } from "react-toastify";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  useEffect(() => {}, []);

  return (
    <DashboardContext.Provider value={{}}>{children}</DashboardContext.Provider>
  );
};
