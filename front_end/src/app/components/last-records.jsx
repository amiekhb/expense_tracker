import React from "react";
import { GoHomeFill } from "react-icons/go";

const LastRecords = () => {
  return (
    <div className=" bg-white rounded-xl">
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg text-black">Last Records</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <div className="bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center">
                  {" "}
                  <GoHomeFill className="text-white w-5 h-5" />
                </div>
              </th>
              <td>
                <p className="text-xl">Lending & Renting</p>
                <p className="text-gray-400">3 hours ago</p>
              </td>

              <td className="text-green-500">-1,000₮</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <div className="bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center">
                  {" "}
                  <GoHomeFill className="text-white w-5 h-5" />
                </div>
              </th>
              <td>
                <p className="text-xl">Lending & Renting</p>
                <p className="text-gray-400">3 hours ago</p>
              </td>

              <td className="text-green-500">-1,000₮</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <div className="bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center">
                  {" "}
                  <GoHomeFill className="text-white w-5 h-5" />
                </div>
              </th>
              <td>
                <p className="text-xl">Lending & Renting</p>
                <p className="text-gray-400">3 hours ago</p>
              </td>

              <td className="text-green-500">-1,000₮</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LastRecords;
