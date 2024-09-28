import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchContacts } from "../../redux/contactsOps";

import style from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/selectors";
import { AutNav } from "../AutNav/AutNav";
import Layout from "../Layout/Layout";

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <AutNav />
      {/* <Register /> */}
      {/* <div className={style.container}>
        <ContactForm />
        <SearchBox />
        {loading && !error && <b>Loading Contacts Book...</b>}
        <ContactList />
      </div> */}

      {/*  МАРШРУТИЗАЦІЯ  */}
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path='/' element={ }>Home</Route>
        <Route path='/contacts' element={ }>Contacts</Route>
        <Route paths="/tasks" element={}>Tasks</Route> */}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
