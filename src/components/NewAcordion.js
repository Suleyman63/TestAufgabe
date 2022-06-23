import { useState, useRef } from "react";
import accordionData from "../pages/accordion";
import { Modal } from "react-bootstrap";
import PopUp from "./PopUp";
import "../css/accordion.css";

const NewAcordion = () => {
  const divEl = useRef(null);
  const [showAcordion, setShowAcordion] = useState(-1);
  const [emaill, setEmaill] = useState("test@familienservice.de");
  const setEmailOnUI = (email) => {
    divEl.current.value = email;
    setEmaill(email);
  };

  const displayAcordion = (index) => {
    if (index === showAcordion) {
      setShowAcordion(-1);
      return;
    }
    setShowAcordion(index);
  };

  // ! modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <div className="accordion-wrap">
        {accordionData.map((item, index) => (
          <div className="accordion-cap" key={index}>
            <div
              className="accordion-heading border-bottom"
              onClick={() => displayAcordion(index)}
            >
              <div className="d-flex align-items-center">
                <i className={item.url} id="accordion-icons"></i>
                <h6 className="accordion-title mx-4">{item.title}</h6>
              </div>
              <p className="arrow-icon mt-2">
                {showAcordion === index ? (
                  <i className="fa-solid fa-angle-up float-end"></i>
                ) : (
                  <i className="fa-solid fa-angle-down float-end"></i>
                )}
              </p>
            </div>
            <div className="mt-3">
              {showAcordion === index && (
                <p className="accordion-description">
                  {item.description}
                  {showAcordion === 1 && (
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
              {showAcordion === index && (
                <button
                  onClick={handleShow}
                  className="btn btn-danger mb-2 mt-5"
                  // disabled={!item.btnActive}
                >
                  {item.buton}
                </button>
              )}
              {showAcordion === index && (
                <i
                  onClick={displayAcordion}
                  className="fa-solid fa-angle-up mb-2 mt-3"
                ></i>
              )}
            </div>
          </div>
        ))}
      </div>
      {showAcordion === 1 && (
        <Modal
          show={show}
          aria-labelledby="contained-modal-title-vcenter"
          onHide={handleClose}
          //animation={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>E-Mail-Adresse ändern</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
            <PopUp setEmailOnUI={setEmailOnUI} handleClose={handleClose} />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default NewAcordion;
