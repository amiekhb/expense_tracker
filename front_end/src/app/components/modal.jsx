import React, { useState } from "react";

export const RecordModal = ({ isOpen, close }) => {
  return (
    <dialog open={isOpen} className="modal">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="modal-box max-w-[800px]">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={close}
          >
            ✕
          </button>
          <h3 className="text-lg font-bold">Add Record</h3>
          <div className="divider"></div>
          <div className="flex gap-12">
            <RightSide />
            <LeftSide />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export const RightSide = ({ categories }) => {
  const [activeTab, setActiveTab] = useState("INC");
  const [recordFormData, setRecordFormData] = useState({
    name: "",
    amount: 0,
    cid: "",
    uid: "329ba2e1-ac59-40d8-9e0b-d5b32fb57455",
    description: "",
  });

  const handleChangeForm = (e) => {
    setRecordFormData({ ...recordFormData, [e.target.name]: e.target.value });
  };

  const addRecordData = async () => {
    const newData = {
      ...recordFormData,
      transaction_type: activeTab,
    };
    console.log("DD", newData);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(`${apiUrl}/records`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 201) {
        toast.success("Record amjilttai nemegdlee");
      }
    } catch (error) {
      toast.error("Record nemeh uyd aldaa garlaa");
    }
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box  flex flex-col gap-5">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-bold text-lg">Add Record</h3>
          <div className="flex gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex space-x-1 bg-gray-200 rounded-full mb-3">
                <button
                  className={`px-11 py-2 rounded-full transition-colors duration-300 ${
                    activeTab === "EXP"
                      ? "bg-blue-500 text-white"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() => setActiveTab("EXP")}
                >
                  Expense
                </button>
                <button
                  className={`px-11 py-2 rounded-full transition-colors duration-300 ${
                    activeTab === "INC"
                      ? "bg-green-500 text-white"
                      : "bg-transparent text-black"
                  }`}
                  onClick={() => setActiveTab("INC")}
                >
                  Income
                </button>
              </div>
              <input
                type="text"
                placeholder="Amount"
                className="input input-bordered input-lg w-full max-w-xs"
                onChange={handleChangeForm}
              />
              <div>
                {" "}
                Category
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Choose
                  </option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div className="flex gap-3">
                <div>
                  Date
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Date
                    </option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div>
                  Time
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Time
                    </option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
              </div>
              <button
                className={`btn ${
                  activeTab === "EXP" ? "bg-blue-500" : "bg-green-500"
                } text-white w-full`}
              >
                Add Record
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                {" "}
                Payee
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Payee
                  </option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div>
                Note
                <input
                  type="text"
                  placeholder="Write here"
                  className="input input-bordered input-lg w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export const LeftSide = () => {
  return (
    <div className="flex flex-col w-3/5 gap-3">
      <label>Note</label>
      <textarea
        name="note"
        id="note"
        className="h-[280px] textarea textarea-bordered"
        placeholder="Write here"
      ></textarea>
    </div>
  );
};
