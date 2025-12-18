import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./api/contact";
import AddContact from "./component/AddContact";
import ContactList from "./component/ContactList";
import EditContact from "./component/EditContact";
import ContactDetails from "./component/ContactDetails";
import { ContactsCrudContextProvider } from "./context/ContactsCrudContext";

function App() {
  return (
    <ContactsCrudContextProvider>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/:id" element={<ContactDetails />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </ContactsCrudContextProvider>
  );
}

export default App;
