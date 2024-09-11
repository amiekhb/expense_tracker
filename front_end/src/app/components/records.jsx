import React, { useContext } from "react";
import { GoHomeFill, GoDotFill } from "react-icons/go";
import { UserContext } from "../context/user-context";

const RecordsMain = () => {
  const { cardInfo, transactions } = useContext(UserContext);
  return (
    <div className="w-full">
      <div className=" bg-white rounded-xl p-3">
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-lg text-black">Last Records</th>
              </tr>
            </thead>
            {transactions?.map((tr) => (
              <tbody>
                {/* row 1 */}
                <tr>
                  <th className="flex gap-5">
                    <div className="bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center">
                      {" "}
                      <GoHomeFill className="text-white w-5 h-5" />
                    </div>

                    <div>
                      {" "}
                      <p className="text-xl">
                        <div>{tr.name}</div>
                      </p>
                      <p className="text-gray-400">{tr.updatedat}</p>
                    </div>
                  </th>

                  <td className="text-green-500">{tr.amount}$</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecordsMain;
