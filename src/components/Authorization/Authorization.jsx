import React, {useContext, useEffect, useState} from "react";
import styles from "./Authorization.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import ContractManagerContext from "../Services/ContractManagerContext";


const Authorization = () => {
    const navigate = useNavigate();
    const { contractManager } = useContext(ContractManagerContext);
    const [StoreContract, setStoreContract] = useState(null);

    useEffect(() => {
        const getContract = async () => {
            try {
                const contract = await contractManager.getContract('StoreContract');
                setStoreContract(contract);
            } catch (error) {
                console.error(error);
            }
        };
        getContract();
    }, [contractManager]);

  const authClick = async () => {
      try {
          const username = document.querySelector('input[name="input-username-auth"]').value;
          const password = document.querySelector('input[name="input-password-auth"]').value;
          const address = document.querySelector('input[name="input-address-auth"]').value;
          const response = await StoreContract.methods.authUser(username, password)
              .call({from: address});
          if (response) {
              const response = await StoreContract.methods.isAdmin(username, password)
                  .call({from: address});
              if (response) {
                  navigate('/admin');
              } else {
                  navigate('/user')
              }
          } else {
              alert('Пароль или логин веденны не правильно')
          }
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <div className={styles.window}>
      <h1>Authorization</h1>
      <input name='input-username-auth' type="text" placeholder="Логин" />
      <input name='input-password-auth' type="password" placeholder="Пароль" />
      <input name='input-address-auth' type="password" placeholder="Адресс" />
      <button onClick={authClick}>Авторизоваться</button>
      <NavLink to="/registration">Регистрация</NavLink>
    </div>
  );
};

export default Authorization;
