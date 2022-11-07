import React from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const imageStyle = {
    width: "25px",
    height: "25px",
    marginRight: "10px",
  };
  const iconStyle = {
    marginLeft: "auto",
    color: "red",
    marginTop: "10px",
  };
  const deleteContact = (contact) => {
    props.deleteFunction(contact);
  };
  return (
    <div className="item" style={{ display: "flex" }}>
      <img src={require("../images/user.png")} alt="user" style={imageStyle} />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={iconStyle}
        onClick={() => deleteContact(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
