import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  const ContactsData = props.contacts.map((contact, i) => {
    return (
        <ContactCard contact={ contact } key={i} />
    );
  });
  return <div className="ui celled list">{ContactsData}</div>;
};

export default ContactList;
