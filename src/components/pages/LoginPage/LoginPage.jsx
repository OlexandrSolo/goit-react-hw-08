import LoginForm from "../../LoginForm/LoginForm";
import style from "../page/Register.module.css";

export default function Register() {
  return (
    <div className={style.loginForm}>
      <title>Login Form</title>
      <LoginForm />
    </div>
  );
}
