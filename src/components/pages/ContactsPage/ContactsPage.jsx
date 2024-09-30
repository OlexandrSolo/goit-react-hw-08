import ContactForm from "../../ContactForm/ContactForm";
import ContactList from "../../ContactList/ContactList";
import SearchBox from "../../SearchBox/SearchBox";

export default function ContactsPage() {
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
