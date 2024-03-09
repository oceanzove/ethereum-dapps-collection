import React, {useContext, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import ContractManagerContext from "../Services/ContractManagerContext";

const Registration = () => {
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

    const regClick = async () => {
        try {
            const name = document.querySelector('input[name="input-username-reg"]').value;
            const password = document.querySelector('input[name="input-password-reg"]').value;
            const address = document.querySelector('input[name="input-address-reg"]').value;
            const response
                = await StoreContract.methods.registerUser(name, password, address)
                .send({from: address, gas: 2000000});
            console.log(response);
            if (response) {
               navigate('/');
            } else {
                alert('Пароль или логин веденны не правильно')
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <h1>Registration</h1>
      <p>This is the Registration page</p>
      <input name='input-username-reg' type="text" placeholder="Логин" />
      <input name='input-password-reg' type="password" placeholder="Пароль" />
      <input name='input-address-reg' type="password" placeholder="Пароль" />
      <button onClick={regClick}>Зарегистрироваться</button>
    </div>
  );
};

export default Registration;