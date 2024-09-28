import { useDispatch } from "react-redux";
import { useId } from "react";
import { Form, Field, Formik } from "formik";
import style from "../LoginForm/LoginForm.module.css";
import { signIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const labelID = useId();
  const handleSubmitForm = (values, actions) => {
    dispatch(signIn({ email: values.email, password: values.password }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmitForm}
    >
      <Form autocomlete="off" className={style.loginForm}>
        <h1 className={style.titleForm}>Login Form</h1>
        <div className={style.group}>
          <Field
            className={style.fieldForm}
            type="email"
            name="email"
            id={`${labelID}-email`}
            placeholder=" "
          />
          <label htmlFor={`${labelID}-email`} className={style.labelForm}>
            Email
          </label>
        </div>
        <div className={style.group}>
          <Field
            className={style.fieldForm}
            type="password"
            name="password"
            id={`${labelID}-password`}
            placeholder=" "
          />
          <label htmlFor={`${labelID}-password`} className={style.labelForm}>
            Password
          </label>
        </div>
        <button className={style.buttonForm} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
