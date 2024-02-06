import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

function UploadFile() {
    const [account, setAccount] = useState(null); // явно указываем начальное значение

    useEffect(() => {
        async function load() {
            try {
                const web3 = new Web3(window.ethereum || 'http://localhost:8545');
                const accounts = await web3.eth.getAccounts(); // Получаем кошельки Ethereum

                // Устанавливаем аккаунт в состояние
                setAccount(accounts[0]);
            } catch (error) {
                console.error('Error loading account:', error);
            }
        }

        load();
    }, []);

    return (
        <div>
            Your account is: {account}
        </div>
    );
}

export default UploadFile;
