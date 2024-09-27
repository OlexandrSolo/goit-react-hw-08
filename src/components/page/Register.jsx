import RegisterForm from "../RegisterForm/RegisterForm";
import style from "../page/Register.module.css";

export default function Register() {
  return (
    <div className={style.register}>
      <title>Register Form</title>
      <RegisterForm />
    </div>
  );
}
