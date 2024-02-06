import React, {useEffect, useState} from 'react';
import Web3 from 'web3';

import styles from './UploadFile.module.css';

function UploadFile() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const [account, setAccount] = useState(null); // явно указываем начальное значение

    useEffect(() => {
        async function load() {
            try {
                const web3 = new Web3(window.ethereum || 'http://localhost:7545');
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
        <div className={styles.content}>
            <div className={styles.title}>
                <h2> Загрузите любой файл </h2>
            </div>

            <div className={styles.container}>
                <div className={styles.ownerInputContainer}>
                    <label htmlFor="owner-name" className={styles.ownerInputLabel}>Введите имя владельца</label>
                    <input type="text" id="owner-name" className={styles.ownerInput}/>
                </div>
                <div className={styles.fileUpload}>
                    <label htmlFor="file-upload" className={styles.customFileUpload}>
                        {selectedFile ? selectedFile.name : 'Выберите файл'}
                    </label>
                    <input id="file-upload" type="file" onChange={handleFileChange} className={styles.inputFile}/>
                </div>
            </div>

            <div className={styles.buttonsContainer}> {/* Контейнер для кнопок */}
                <button className={styles.button}>Отправить </button>
                <button className={styles.button}>Получить информацию</button>
            </div>
            <div className={styles.transactionStatus}>
                <div>Статус транзакции: </div>
            </div>
            Your account is: {account}
        </div>
    );
}

export default UploadFile;
