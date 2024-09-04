"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "@/app/utils/util";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    const { email, password } = userData;

    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("User successfully signed in", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);

        router.push("/dashboard");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <img src="./image/geld.png" alt="logo" />
        <div className=" flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-medium">Welcome Back</h1>
          <p className="text-gray-500">
            Welcome back, Please enter your details
          </p>
        </div>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs border p-3 rounded-lg bg-gray-100"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs border p-3 rounded-lg bg-gray-100"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button
          onClick={logIn}
          className="bg-blue-600  w-full max-w-xs rounded-full p-3 text-white"
        >
          Log in
        </button>
        <div className="flex gap-3">
          <p>Don’t have account?</p>
          <Link className="text-blue-600" href={"/signup"}>
            Sign up
          </Link>
        </div>
      </div>
      <div className=" bg-blue-600 w-full h-full"></div>
    </div>
  );
};

export default LogIn;
