import React, { useState } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const [contact, setContact] = useState([]);

  const newContact = (contactData) => {
    alert(JSON.stringify(contactData));
    setContact((old) => {
      return [...old, contactData];
    });
  };
  return (
    <div className="ui container">
      <Header />
      <AddContact newContact={newContact} />
      <ContactList contacts={contact} />
    </div>
  );
}
export default App;
