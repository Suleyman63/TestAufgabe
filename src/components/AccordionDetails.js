import { useState } from "react";
import { Modal } from "react-bootstrap";
import PopUp from "./PopUp";

const AccordionDetails = ({ title, description, buton, url, email }) => {
  // ! accordion
  const [show, setShow] = useState(false);
  const display = () => {
    setShow(!show);
  };

  // ! modal
  const [visibility, setVisibility] = useState(false);
  const handleClose = () => setVisibility(false);
  const handleShow = () => setVisibility(true);

  return (
    <div className="container-details">
      <div className="content">
        <i className={url} id="acordion-icons"></i>
        <h6 className="mt-2 float-start">{title}</h6>
        <p onClick={display} className="arrow-icon mt-2">
          {show ? (
            <i className="fa-solid fa-angle-up "></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </p>
      </div>
      <div className="mt-3">
        {show && (
          <p className="text">
            {description}
            <span className="fw-bold" id="aktuel-email">
              {email}
            </span>
          </p>
        )}
        {show && (
          <button onClick={handleShow} className="btn btn-danger mb-2 mt-5">
            {buton}
          </button>
        )}
        {show && (
          <i onClick={display} className="fa-solid fa-angle-up mb-2 mt-5"></i>
        )}
      </div>
      <Modal show={visibility} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>E-Mail-Adresse ändern</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
          ad dolorem provident, eius laudantium molestias neque eligendi, animi
          molestiae accusantium consequatur excepturi itaque tempore eum nisi
          dolores, fugit nesciunt?
          <PopUp />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AccordionDetails;
