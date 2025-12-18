import { Link, useLocation } from "react-router-dom";

const ContactDetails = () => {
  const location = useLocation();
  const { id, name, number } = location.state.contact;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-purple-200">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          Contact Details
        </h1>

        <div className="p-5 bg-purple-50 rounded-xl border border-purple-200 mb-4">
          <p className="text-gray-600 text-sm">Name</p>
          <p className="text-2xl font-semibold text-gray-900">{name}</p>
        </div>

        <div className="p-5 bg-purple-50 rounded-xl border border-purple-200 mb-6">
          <p className="text-gray-600 text-sm">Phone Number</p>
          <p className="text-2xl font-semibold text-gray-900">{number}</p>
        </div>

        <div className="text-center">
          <Link to="/">
            <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 hover:shadow-lg transition-all cursor-pointer">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
