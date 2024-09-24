import { Routers, Route, NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header>
      <div>
        <p>Welcome</p>
        <span>User</span>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="'/tasks">Tasks</NavLink>
      </nav>
    </header>
  );
}
