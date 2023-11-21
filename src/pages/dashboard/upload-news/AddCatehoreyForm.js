import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { getCookie } from "../../../utilities/helper.js";
const AddCatehoreyForm = ({ isOpen, onClose, children }) => {
  const modalClass = isOpen
    ? "fixed z-10 overflow-y-auto top-0 w-full left-0"
    : "hidden";
  const [data, setData] = useState("");
  const showToastErrotMessage = (sms) => {
    if (sms === "success") {
      toast.success("uploaded success", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("something went wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const postData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/categorey-upload",
        { categoreyName: data },
        {
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );

      if (response.status === 200) {
        onClose();
        showToastErrotMessage("success");
        setData("");
      } else {
        showToastErrotMessage("error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {/*  <div className="flex items-center justify-center h-screen">
        <button
          className="py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-700"
          onclick="toggleModal()"
        >
          Show Modal
        </button>
      </div> */}
      <div className={modalClass} id="modal">
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>

          <div
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <form onSubmit={postData}>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <label className="font-medium text-gray-800">
                  Categorey Name
                </label>
                <input
                  type="text"
                  name="categoreyName"
                  onChange={(e) => setData(e.target.value)}
                  className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                />
              </div>
              <div className="bg-gray-200 px-4 py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                  onClick={onClose}
                >
                  <i className="fas fa-times"></i> Cancel
                </button>
                <button
                  type="button"
                  onClick={() => postData()}
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                >
                  <i className="fas fa-plus"></i> Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCatehoreyForm;
