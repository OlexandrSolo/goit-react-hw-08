import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={style.link}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={style.link}>
        Contacts
      </NavLink>
    </nav>
  );
}
