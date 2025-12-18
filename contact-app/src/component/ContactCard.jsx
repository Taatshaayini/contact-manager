import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactCard = ({ contact }) => {
  const { deleteContactHandler } = useContactsCrud();
  const { id, name, number } = contact;

  const deleteContact = (id) => {
    deleteContactHandler(id);
  };

  return (
    <div
      className="flex items-center justify-between w-full max-w-md mx-auto 
      bg-white/70 backdrop-blur-md rounded-2xl p-5 mb-4 border border-gray-200 
      shadow-md hover:shadow-xl hover:bg-white/80 transition-all duration-300"
    >
      <Link to={`/${id}`} state={{ contact: contact }}>
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-gray-900">{name}</span>
          <span className="text-gray-600 text-sm mt-1">{number}</span>
        </div>
      </Link>

      <div className="flex items-center gap-3">
        <Link to={`/edit/${id}`} state={{ contact: contact }}>
          <button
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-xl 
          hover:bg-blue-600 active:scale-95 transition"
          >
            Edit
          </button>
        </Link>

        <button
          onClick={() => deleteContact(id)}
          className="px-4 py-2 text-sm bg-red-500 text-white rounded-xl 
          hover:bg-red-600 active:scale-95 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
