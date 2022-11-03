import React from "react";

const Header = () => {
  const style = {
    marginTop: 0,
  };
  return (
    <div className="ui fixed menu">
      <div className="ui container center aligned grid" style={style}>
        <h2>Contact Manager</h2>
      </div>
    </div>
  );
};

export default Header;
