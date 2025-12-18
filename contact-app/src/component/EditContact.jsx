import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = () => {
  const { editContactHandler } = useContactsCrud();
  const location = useLocation();
  const { id, name, number } = location.state.contact;
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newNumber === "") {
      alert("Please add all information");
      return;
    }

    editContactHandler({ id, name: newName, number: newNumber });
    setNewName("");
    setNewNumber("");
    navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 transform transition-all hover:scale-[1.01]">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Add Contact
        </h1>

        <form className="space-y-6" onSubmit={update}>
          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Insert Name.."
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          {/* Number Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Number
            </label>
            <input
              type="tel"
              placeholder="Insert Number.."
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 hover:shadow-lg transition-all"
          >
            Edit Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
