"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { apiUrl } from "../utils/util";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    profile_img: "",
  });
  const [categoryData, setCategoryData] = useState({
    id: "",
    name: "",
    description: "",
    category_img: "",
  });
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
  const fetchCategoryData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/records/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setCategoryData(response.data);
        console.log("Category", response.data);
      }
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    if (!user) {
    }
    fetchUserData();
  }, [user]);

  useEffect(() => {
    if (!categoryData) {
    }
    fetchCategoryData();
  }, [categoryData]);

  return (
    <UserContext.Provider
      value={{ user, fetchUserData, fetchCategoryData, categoryData }}
    >
      {children}
    </UserContext.Provider>
  );
};
