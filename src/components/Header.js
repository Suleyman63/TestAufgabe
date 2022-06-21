import React from "react";
// import image from "../assets/fotos/header.png";
const Header = () => {
  return (
    <div className="header">
      <div className="div-icon">
        <i className="fas fa-user header-icon-img"></i>
        <div className="pen-div">
          <i className="fas fa-pen"></i>
        </div>
      </div>
      <div>
        <h5 className="header-h5">devel oper</h5>
      </div>
    </div>
  );
};

export default Header;
