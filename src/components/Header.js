import React from "react";
import Avatar from "../assets/avatar.png";
import "../css/header.css";
import NewAcordion from "./NewAcordion";

function Header2() {
  return (
    <header>
      <div
        id="profile-picture-switch-container"
        className="d-flex flex-sm-column align-items-center justify-content-around justify-content-sm-center profil-bild position-relative"
      >
        <button
          id="profilePictureButton"
          className="justify-content-end align-items-end position-relative"
        >
          <div className="image-wrapper">
            <div id="profilePictureImageDesktop">
              <img src={Avatar} alt="" />
            </div>
            <div className="custom-badge">
              <i className="fas fa-pen"></i>
            </div>
          </div>
        </button>
        <p className="pt-3 profil-name">Devel Oper</p>
      </div>
      <NewAcordion />
    </header>
  );
}

export default Header2;
