import { Formik, Field, Form } from "formik";
import "../css/popup.css";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Ungültige E-Mail").required("Pflichtfeld"),
  emailConfirm: Yup.string()
    .oneOf([Yup.ref("email")], "E-Mail-Adressen müssen übereinstimmen")
    .required("Pflichtfeld"),
});
const PopUp = (props) => (
  <div>
    <Formik
      initialValues={{
        email: "",
        emailConfirm: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        const newValues = JSON.stringify(values, null, 2);
        const newEmail = JSON.parse(newValues).email;
        props.handleClose();
        props.setEmailOnUI(newEmail);
        console.log(document.getElementById("aktuel-email").value);
        console.log("Anfrage erfolgreich");
        document.getElementById("aktuel-email").value = newEmail;
      }}
    >
      {({ errors, touched }) => (
        <Form className="text-center px-4">
          <Field
            id="email"
            placeholder="Neue E-Mail-Adresse"
            className="w-100 mb-4 mt-5 custom-input px-2 fw-300"
            name="email"
            type="email"
          />
          {errors.email && touched.email ? (
            <div className="custom-error">{errors.email}</div>
          ) : null}
          <Field
            id="emailConfirm"
            placeholder="Neue E-Mail-Adresse wiederholen"
            className="w-100 mb-4 custom-input px-2 fw-300"
            name="emailConfirm"
            type="email"
          />
          {errors.emailConfirm && touched.emailConfirm ? (
            <div className="custom-error">{errors.emailConfirm}</div>
          ) : null}
          <button
            className="w-100 mb-5 mt-4 custom-input submit-button"
            type="submit"
          >
            SPEICHERN
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PopUp;
