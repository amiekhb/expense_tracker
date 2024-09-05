"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserToken(token);
  }, []);
  console.log("userToken", userToken);
  return <div>dash context</div>;
};

export default Dashboard;
