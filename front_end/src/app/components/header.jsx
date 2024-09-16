import Link from "next/link";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { UserContext } from "../context/user-context";
import { RecordModal } from "./modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="p-8 flex justify-between">
        <div className="flex gap-5">
          <img src="./image/Vector.png" alt="" />
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/records"}>Records</Link>
          <Link href="/records">
            <p>{user?.name}</p>
          </Link>
        </div>
        <div className="flex gap-5 items-center ">
          <button
            className="btn  text-white flex gap-3 rounded-full p-3 bg-blue-600 items-center"
            onClick={() => document.getElementById("my_modal_3").showModal()}
            // onClick={() => setIsOpen(true)}
          >
            <FaPlus />
            Records
          </button>
          <RecordModal isOpen={isOpen} close={handleClose} />
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
