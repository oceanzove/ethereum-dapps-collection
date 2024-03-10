import React, {useContext, useEffect, useState} from "react";
import styles from "./Authorization.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import ContractManagerContext from "../Services/ContractManagerContext";


const Authorization = (props) => {
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
          const username = props.authorizationPage.login;
          const password = props.authorizationPage.password;
          const address = props.authorizationPage.address;
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

  const onChangeLogin = (e) => {
      let text = e.target.value;
      props.updateLogin(text);
  }

  const onChangePassword = (e) => {
      let text = e.target.value;
      props.updatePassword(text);
  }

  const onChangeAddress = (e) => {
      let text = e.target.value;
      props.updateAddress(text);
  }

  return (
    <div className={styles.window}>
      <h1>Authorization</h1>
      <input name='input-username-auth'
             type="text" placeholder="Логин"
             value={props.authorizationPage.login}
             onChange={onChangeLogin}
      />
      <input name='input-password-auth'
             type="password" placeholder="Пароль"
             value={props.authorizationPage.password}
             onChange={onChangePassword}
      />
      <input name='input-address-auth'
             type="password" placeholder="Адресс"
             value={props.authorizationPage.address}
             onChange={onChangeAddress}
      />
      <button onClick={authClick}
              disabled={
          !props.authorizationPage.login || !props.authorizationPage.password || !props.authorizationPage.address
      }
      >Авторизоваться</button>
      <NavLink to="/registration">Регистрация</NavLink>
    </div>
  );
};

export default Authorization;
