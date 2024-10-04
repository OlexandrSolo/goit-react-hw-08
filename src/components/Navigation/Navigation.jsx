import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={style.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={style.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
