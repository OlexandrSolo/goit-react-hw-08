import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}
