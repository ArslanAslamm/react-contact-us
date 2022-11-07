import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const Local_Storage_Key = "contacts";
  const [contact, setContact] = useState([]);

  const newContact = (contactData) => {
    if (contact.find((data) => data.email === contactData.email)) {
      alert("Email already Exist.");
      return;
    }
    setContact([...contact, contactData]);
  };

  const deleteFunction = (data) => {
    const remain = contact.filter((single) => single.id !== data);
    setContact(remain);
  };
  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if (getContacts && getContacts.length !== 0) {
      setContact(getContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(contact));
  }, [contact]);
  return (
    <div className="ui container">
      <Header />
      <AddContact newContact={newContact} />
      <ContactList contacts={contact} deleteFunction={deleteFunction} />
    </div>
  );
}
export default App;
