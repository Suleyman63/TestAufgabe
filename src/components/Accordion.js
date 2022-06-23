import { useState, useRef } from "react";
import accordionData from "../pages/accordion";
import { Modal } from "react-bootstrap";
import PopUpEmailForm from "./PopUpEmailForm";
import "../css/accordion.css";

const Accordion = () => {
  // ! email
  const divEl = useRef(null);
  const [emaill, setEmaill] = useState("test@familienservice.de");
  const setEmailOnUI = (email) => {
    divEl.current.value = email;
    setEmaill(email);
  };

  // ! accordion
  const [showAcordion, setShowAcordion] = useState(-1);
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
        {accordionData &&
          accordionData.map((item, index) => {
            const { title, icon, description, buton } = item;
            return (
              <div className="accordion-cap" key={index}>
                <div
                  className="accordion-heading border-bottom"
                  onClick={() => displayAcordion(index)}
                >
                  <div className="d-flex align-items-center">
                    <i className={icon} id="accordion-icons"></i>
                    <h6 className="accordion-title mx-4">{title}</h6>
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
                      {description}
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
                    >
                      {buton}
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
            );
          })}
      </div>
      {showAcordion === 1 && (
        <Modal
          show={show}
          aria-labelledby="contained-modal-title-vcenter"
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>E-Mail-Adresse ändern</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
            <PopUpEmailForm
              setEmailOnUI={setEmailOnUI}
              handleClose={handleClose}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Accordion;
