import React from "react";

const Modal = () => {
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
              <ul className="menu menu-horizontal bg-base-200">
                <li>
                  <a>Expense</a>
                </li>
                <li>
                  <a>Income</a>
                </li>
              </ul>
              <input
                type="text"
                placeholder="Amount"
                className="input input-bordered input-lg w-full max-w-xs"
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
              <button className="bg-blue-600 rounded-full p-2 btn">
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

export default Modal;
