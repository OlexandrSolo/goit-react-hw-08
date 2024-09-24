import style from "./ModalLoginForm.module.css";

import { useDispatch } from "react-redux";
import { useId } from "react";
import { Form, Field, Formik } from "formik";
import { register } from "../../redux/auth/operations";

export default function ModalLoginForm() {
  const dispatch = useDispatch();
  const labelID = useId();
  const handleSubmitForm = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmitForm}
    >
      <Form autocomlete="off">
        <h1>Register Form</h1>
        <div className="group">
          <label htmlFor={`${labelID}-name`}>User Name</label>
          <Field
            type="text"
            name="name"
            id={`${labelID}-name`}
            placeholder=" "
          />
        </div>
        <div className="group">
          <label htmlFor={`${labelID}-email`}>Email</label>
          <Field
            type="email"
            name="email"
            id={`${labelID}-email`}
            placeholder=" "
          />
        </div>
        <div className="group">
          <label htmlFor={`${labelID}-password`}>Password</label>
          <Field
            type="password"
            name="password"
            id={`${labelID}-password`}
            placeholder=" "
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
