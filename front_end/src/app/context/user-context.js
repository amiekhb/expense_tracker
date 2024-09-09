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

  useEffect(() => {
    if (!user) {
    }
    fetchUserData();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
