import { useSelector } from "react-redux";
import style from "./ContactList.module.css";
import ContactListItem from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map((user) => (
        <li key={user.id} className={style.contact}>
          <ContactListItem user={user} />
        </li>
      ))}
    </ul>
  );
}
