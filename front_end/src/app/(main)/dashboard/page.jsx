"use client";

import Image from "next/image";
import Link from "next/link";

import { GoDotFill } from "react-icons/go";
import { TbCurrencyTugrik } from "react-icons/tb";

import { useEffect, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import Card from "@/app/components/card";
import Income from "@/app/components/income";
import Expense from "@/app/components/expense";
import LastRecords from "@/app/components/last-records";

const Dashboard = () => {
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserToken(token);
  }, []);
  console.log("userToken", userToken);

  const getInfoCardData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`);
      console.log("ST", res.data);
      setCardInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    fetchTransactions();
    getInfoCardData();
  }, [user]);

  return (
    <div className="grid grid-cols-3 bg-gray-200 p-10 justify-between gap-5 w-screen">
      <Card />
      <Income />
      <Expense />
      <LastRecords />
    </div>
  );
};

export default Dashboard;
