import React from "react";
import styles from "./Authorization.module.css";
import { NavLink } from "react-router-dom";


const Authorization = () => {
  return (
    <div className={styles.window}>
      <h1>Authorization</h1>
      <input type="text" placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      <button >Авторизоваться</button>
      <NavLink to="/registration">Регистрация</NavLink>
    </div>
  );
};

export default Authorization;