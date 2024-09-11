"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { apiUrl } from "../utils/util";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);
  const [categoryName, setCategoryName] = useState({
    name: "",
  });
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    profile_img: "",
  });

  // const [userToken, setUserToken] = useState(null);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   setUserToken(token);
  // }, []);
  // console.log("userToken", userToken);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setUser(response.data);
        console.log("USER", response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records`);
      console.log("transaction", res.data.guilgee);
      setTransactions(res.data.guilgee);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  const getInfoCardData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`);
      console.log("card info", res.data);
      setCardInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch card info");
    }
  };

  const getCategoryName = async () => {
    try {
      const res = await axios.get(`${apiUrl}/auth/categories`);
      console.log("cat name", res.user);
      setCategoryName(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch category names");
    }
  };

  useEffect(() => {
    if (!user) {
    }
    fetchUserData();
    fetchTransactions();
    getInfoCardData();
    getCategoryName();
  }, [user]);

  return (
    <UserContext.Provider
      value={{ user, fetchUserData, transactions, cardInfo, categoryName }}
    >
      {children}
    </UserContext.Provider>
  );
};
