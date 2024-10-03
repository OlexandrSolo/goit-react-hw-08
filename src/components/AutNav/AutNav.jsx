import { NavLink } from "react-router-dom";
import style from "../AutNav/AutNav.module.css";

export const AutNav = () => {
  return (
    <div>
      <NavLink to="/register" className={style.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={style.link}>
        Log in
      </NavLink>
    </div>
  );
};
