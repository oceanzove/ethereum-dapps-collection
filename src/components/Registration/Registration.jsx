import React from "react";
import {useNavigate} from "react-router-dom";
import StoreContract from "../Contracts/StoreContract";

const Registration = (props) => {
    const navigate = useNavigate();
    const storeContract = new StoreContract();

    const regClick = async () => {
        try {
            const name = props.registrationPage.loginReg;
            const password = props.registrationPage.passwordReg;
            const address = props.registrationPage.addressReg;
            await storeContract.registrationUser(name, password, address);
            navigate('/');
            props.registered();
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
        <div>
            <input
                type="text" placeholder="Логин"
                value={props.registrationPage.loginReg}
                onChange={onChangeLogin}
            />
            <input
                type="password" placeholder="Пароль"
                value={props.registrationPage.passwordReg}
                onChange={onChangePassword}
            />
            <input
                type="password" placeholder="Адресс"
                value={props.registrationPage.addressReg}
                onChange={onChangeAddress}
            />
            <button
                disabled={
                    !props.registrationPage.loginReg || !props.registrationPage.passwordReg || !props.registrationPage.passwordReg
                }
                onClick={regClick}>Зарегистрироваться
            </button>
        </div>
    );
};

export default Registration;