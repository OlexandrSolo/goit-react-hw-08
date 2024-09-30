import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from "./ContactList.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import ContactListItem from "../Contact/Contact";
import { selectContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const listContact = useSelector(selectContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <ul>
      {listContact &&
        listContact.map((user) => (
          <li key={user.id} className={style.contact}>
            <ContactListItem user={user} />
          </li>
        ))}
    </ul>
  );
}
