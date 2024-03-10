import React from "react";
import styles from "./Authorization.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import StoreContract from "../Contracts/StoreContract";


const Authorization = (props) => {
    const navigate = useNavigate();
    const storeContract = new StoreContract();
    const authClick = async () => {
        try {
            const username = props.authorizationPage.login;
            const password = props.authorizationPage.password;
            const address = props.authorizationPage.address;
            const response = storeContract.authorizationUser(username, password, address);
            if (response) {
                const response =  storeContract.isAdmin(username, password, address);
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
            >Авторизоваться
            </button>
            <NavLink to="/registration">Регистрация</NavLink>
        </div>
    );
};

export default Authorization;
