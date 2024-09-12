"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { apiUrl } from "../utils/util";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);
  const [categories, setCategories] = useState(null);
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

  const getCategories = async () => {
    console.log("cat name ========>");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log("category", response.data);
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.log("CAT-NAME", error);
      toast.error("Failed to fetch category names");
    }
  };

  useEffect(() => {
    console.log("EFF");

    fetchUserData();
    fetchTransactions();
    getInfoCardData();
    getCategories();
  }, []);

  // console.log("PROVIDER");

  return (
    <UserContext.Provider
      value={{ user, fetchUserData, transactions, cardInfo, categories }}
    >
      {children}
    </UserContext.Provider>
  );
};
