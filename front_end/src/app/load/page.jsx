import React from "react";

import Image from "next/image";

const Load = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center justify-center h-full gap-5">
        <img className="" src="./image/geld.png" alt="" />
        <p className="font-semibold">Түр хүлээнэ үү...</p>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </div>
  );
};

export default Load;
