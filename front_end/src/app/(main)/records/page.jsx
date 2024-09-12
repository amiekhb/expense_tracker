"use client";

import { UserContext } from "@/app/context/user-context";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { GoHomeFill, GoDotFill } from "react-icons/go";
import Sidebar from "@/app/components/record-sidebar";
import RecordsMain from "@/app/components/records";
const Records = () => {
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserToken(token);
  }, []);
  console.log("userToken", userToken);

  const { user, transactions, cardInfo, categoryName } =
    useContext(UserContext);

  return (
    <div className="bg-gray-200 flex w-screen h-screen">
      <div className="w-1/4 p-5">
        {" "}
        <Sidebar transactions={transactions} categoryName={categoryName} />
      </div>
      <div className="p-5 w-3/4">
        {" "}
        <RecordsMain transactions={transactions} cardInfo={cardInfo} />
      </div>
    </div>
  );
};

export default Records;
