import ModalLoginForm from "../ModalLoginForm/ModalLoginForm";
import style from "../page/Register.module.css";

export default function Register() {
  return (
    <div className={style.register}>
      <title>Register Form</title>
      <ModalLoginForm />
    </div>
  );
}
