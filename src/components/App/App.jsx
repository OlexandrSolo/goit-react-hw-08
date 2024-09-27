import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchContacts } from "../../redux/contactsOps";

import style from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/selectors";
import Register from "../page/Register";
import { AutNav } from "../AutNav/AutNav";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.formWrapper}>
      <AutNav />
      {/* <Register /> */}
      {/* <div className={style.container}>
        <ContactForm />
        <SearchBox />
        {loading && !error && <b>Loading Contacts Book...</b>}
        <ContactList />
      </div> */}

      {/*  МАРШРУТИЗАЦІЯ  */}
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path='/' element={ }>Home</Route>
        <Route path='/contacts' element={ }>Contacts</Route>
        <Route paths="/tasks" element={}>Tasks</Route> */}
      </Routes>
    </div>
  );
}

export default App;
