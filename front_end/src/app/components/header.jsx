import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

const Header = ({ user, logOut }) => {
  return (
    <div>
      <div className="p-5 flex justify-between">
        <div className="flex gap-5">
          <img src="./image/Vector.png" alt="" />
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/records"}>Records</Link>
        </div>
        <div className="flex gap-5 items-center">
          <div className=" text-white flex gap-3 rounded-full p-3 bg-blue-600 items-center ">
            <FaPlus />
            Records
          </div>
          <div className="avatar w-12 h-12">
            <div className="w-24 rounded-full">
              <img src={user?.avatarImg} />
            </div>
          </div>
          <button className="btn btn-sm" onClick={logOut}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
