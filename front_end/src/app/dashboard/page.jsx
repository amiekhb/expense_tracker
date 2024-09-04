import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="flex gap-5">
        <img src="./image/Vector.png" alt="" />
        <Link className="font-bold " href={"/dashboard"}>
          Dashboard
        </Link>
        <Link href={"/records"}>Records</Link>
      </div>
    </div>
  );
};

export default Dashboard;
