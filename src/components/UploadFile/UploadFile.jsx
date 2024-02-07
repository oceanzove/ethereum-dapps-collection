import React, {useEffect, useState} from 'react';
import Web3 from 'web3';

import styles from './UploadFile.module.css';

function UploadFile(props) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    let onUploadClick = () => {
        const userName = document.getElementById('owner-name').value;

        props.uploadFile(userName);

    }



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
                <button className={styles.button} onClick={onUploadClick}>Отправить </button>
                <button className={styles.button}>Получить информацию</button>
            </div>
            <div className={styles.transactionStatus}>
                <div>Статус транзакции: </div>
            </div>
        </div>
    );
}

export default UploadFile;
