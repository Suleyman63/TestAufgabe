import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PopUp = () => {
  const regex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [isDisabled, setDisibility] = useState(true);
  const [aktuelEmail, setAktuelEmail] = useState("");
  const [confirmAktuelEmail, setConfirmAktuelEmail] = useState("");

  const validateEmail = (event) => {
    const emailValue = event.target.value;
    const confirmEmailValue = event.target.value;
    if (regex.test(emailValue) && regex.test(confirmEmailValue)) {
      setMessage("Your email is valid!");
      setIsValid(true);
      setDisibility(false);
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
    }
  };

  const handleEmailClick = (event) => {
    alert(emailValue);
    alert(confirmEmailValue);
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
          <Form.Control
            value={aktuelEmail}
            name="email"
            type="email"
            placeholder="Neue E-Mail-Adresse"
            onChange={validateEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Control
            value={confirmAktuelEmail}
            name="confirmEmail"
            type="email"
            placeholder="Neue E-Mail-Adresse widerholen"
            onChange={validateEmail}
          />
        </Form.Group>
        <div className={`message ${isValid ? "success" : "error"}`}>
          {message}
        </div>
        <Button
          type="submit"
          className="popup-btn btn-danger"
          disabled={isDisabled}
          onClick={handleEmailClick}
        >
          Speichern
        </Button>
      </Form>
    </div>
  );
};

export default PopUp;
