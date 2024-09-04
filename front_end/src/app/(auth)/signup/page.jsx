"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/app/utils/util";

const SignUp = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const signUp = async () => {
    const { name, email, password, repassword } = userData;
    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        email,
        name,
        password,
      });

      if (response.status === 201) {
        toast.success("User successfully signed up", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  };
  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <img src="./image/geld.png" alt="logo" />
        <div className=" flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-medium">Create Geld account</h1>
          <p className="text-gray-500">
            Sign up below to create your Wallet account
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs border p-3 rounded-lg bg-gray-100"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs border p-3 rounded-lg bg-gray-100"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs border p-3 rounded-lg bg-gray-100"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Re-password"
          className="input input-bordered w-full max-w-xs border p-3 rounded-lg bg-gray-100"
          value={userData.repassword}
          onChange={(e) =>
            setUserData({ ...userData, repassword: e.target.value })
          }
        />
        <button
          onClick={
            // router.push("/login")
            signUp
          }
          className="bg-blue-600  w-full max-w-xs rounded-full p-3 text-white"
        >
          Sign up
        </button>
        <div className="flex gap-3">
          <p>Already have account?</p>
          <Link className="text-blue-600" href={"/login"}>
            Log in
          </Link>
        </div>
      </div>
      <div className=" bg-blue-600 w-full h-full"></div>
    </div>
  );
  // const signUp = async () => {

  //   // try {
  //   //   const response = await fetch("hyyt://localhost:8008/auth/signup",{
  //   //     method:"POST",
  //   //     headers:{"Content-Type": "application/json",

  //   //     }
  //   //   })
  //   // }
};
export default SignUp;
