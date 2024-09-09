import React from "react";

const Modal = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Record</h3>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Category
              </option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Payee
              </option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
