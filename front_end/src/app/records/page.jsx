import Link from "next/link";
import React from "react";

const Records = () => {
  return (
    <div className="p-5">
      <div className="flex gap-5">
        <img src="./image/Vector.png" alt="" />
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link className="font-bold " href={"/records"}>
          Records
        </Link>
      </div>
    </div>
  );
};

export default Records;
