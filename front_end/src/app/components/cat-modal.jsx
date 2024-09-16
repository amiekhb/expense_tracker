import React from "react";
import { GoHomeFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

const CatModal = () => {
  return (
    <div>
      {" "}
      <button
        className="btn rounded-full "
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        <FaPlus className="text-blue-600" /> Add Categories
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box gap-3">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Category</h3>
          <div className="flex gap-3 mt-3">
            <select className="select select-bordered w-1/3 max-w-xs">
              <option disabled selected>
                <GoHomeFill />
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-2/3 max-w-xs"
            />
          </div>

          <button className="bg-green-700 text-white rounded-full w-full mt-8 p-1">
            Add
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default CatModal;
