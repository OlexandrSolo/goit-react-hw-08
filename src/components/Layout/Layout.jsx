import AppBar from "../AppBar/AppBar";
import style from "../Layout/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <AppBar />
        {children}
      </div>
    </div>
  );
}
