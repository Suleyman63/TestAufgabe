import { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import PopUp from "./PopUp";
import "../css/accordion.css";

const AccordionDetails = ({ title, description, buton, url, btnActive }) => {
  // ! accordion
  const [show, setShow] = useState(false);
  const display = () => {
    setShow(!show);
  };

  // ! modal
  const [visibility, setVisibility] = useState(false);
  const handleClose = () => setVisibility(false);
  const handleShow = () => setVisibility(true);

  // ! email
  const divEl = useRef(null);
  const [emaill, setEmaill] = useState("test@familienservice.de");
  const setEmailOnUI = (email) => {
    divEl.current.value = email;
    setEmaill(email);
  };

  return (
    <div className="container">
      <div className="accordion-wrap">
        <div className="accordion-cap">
          <div className="accordion-heading" onClick={display}>
            <div className="d-flex align-items-center">
              <i className={url} id="accordion-icons"></i>
              <h6 className="accordion-title mx-4">{title}</h6>
            </div>
            <p className="arrow-icon">
              {show ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </p>
          </div>
          <div className="mt-3">
            {show && (
              <p className="accordion-description">
                {description}
                {title === "E-Mail-Adresse ändern" && (
                  <input
                    value={emaill}
                    ref={divEl}
                    className="fw-bold"
                    id="aktuel-email"
                    onChange={setEmailOnUI}
                  />
                )}
              </p>
            )}
            {show && (
              <button
                onClick={handleShow}
                className="btn btn-danger mb-2 mt-5"
                // disabled={!btnActive}
              >
                {buton}
              </button>
            )}
            {show && (
              <i
                onClick={display}
                className="fa-solid fa-angle-up mb-2 mt-3"
              ></i>
            )}
          </div>
        </div>
      </div>
      {title === "E-Mail-Adresse ändern" && (
        <Modal show={visibility} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>E-Mail-Adresse ändern</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
            ad dolorem provident, eius laudantium molestias neque eligendi.
            <PopUp setEmailOnUI={setEmailOnUI} handleClose={handleClose} />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default AccordionDetails;
