import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";

import style from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/selectors";
import Register from "../page/Register";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.formWrapper}>
      <Register />
      {/* <div className={style.container}>
        <ContactForm />
        <SearchBox />
        {loading && !error && <b>Loading Contacts Book...</b>}
        <ContactList />
      </div> */}

      {/*  МАРШРУТИЗАЦІЯ  */}
      {/* <Routers>
        <Route path='/' element={ }>Home</Route>
        <Route path='/contacts' element={ }>Contacts</Route>
        <Route paths="/tasks" element={}>Tasks</Route>
      </Routers> */}
    </div>
  );
}

export default App;
