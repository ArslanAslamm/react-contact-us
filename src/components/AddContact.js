import React, { useState } from "react";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    props.newContact({
      name,
      email,
    });

    setEmail("");
    setName("");
  };
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={addContact}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Your Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue" disabled={!name || !email}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
