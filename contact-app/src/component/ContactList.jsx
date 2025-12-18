import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useRef, useEffect } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList = () => {
  const {
    contacts,
    retrieveContacts,
    searchTerm,
    searchResult,
    searchHandler,
  } = useContactsCrud();

  useEffect(() => {
    retrieveContacts();
  }, []);

  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResult
  ).map((contact) => {
    return <ContactCard key={contact.id} contact={contact} />;
  });

  const onSearchTerm = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-50 p-8">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800 drop-shadow-sm">
        Contact List
      </h1>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          value={searchTerm}
          onChange={(e) => onSearchTerm(e)}
          placeholder="Search contacts..."
          className="w-full max-w-md px-4 py-3 rounded-2xl shadow-sm border border-gray-300
                     bg-white focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
        />
      </div>

      {/* Add Contact Button */}
      <div className="flex justify-center mb-10">
        <Link to="/add">
          <button
            className="px-7 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl 
                             shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all"
          >
            + Add Contact
          </button>
        </Link>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-col items-center space-y-5">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts available"}
      </div>
    </div>
  );
};

export default ContactList;
