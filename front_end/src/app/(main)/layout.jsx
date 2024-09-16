"use client";

import { useContext, useEffect } from "react";
import { UserContext } from "../context/user-context";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import { DashboardProvider } from "../context/dashboard-context";

const Layout = ({ children }) => {
  return (
    <DashboardProvider>
      <Header />
      {children}
    </DashboardProvider>
  );
};

export default Layout;
