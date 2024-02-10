import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import FileStorageContract from '../../solidity-contracts/build/contracts/FileStorage.json';

import styles from './UploadFile.module.css';

const UploadFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [transactionHash, setTransactionHash] = useState('');
    const [fileInfo, setFileInfo] = useState(null);
    const [ownerName, setOwnerName] = useState('');
    const [web3, setWeb3] = useState(null);
    const [fileStorageContract, setFileStorageContract] = useState(null);

    useEffect(() => {
        const init = async () => {
            try {
                // Подключение к локальной сети Ethereum (Ganache)
                const ganacheUrl = 'http://localhost:7545'; // Замените на ваш URL Ganache
                const web3Instance = new Web3(ganacheUrl);
                setWeb3(web3Instance);

                // Использование ABI и адреса контракта из файла FileStorage.json
                const networkId = await web3Instance.eth.net.getId();
                const deployedNetwork = FileStorageContract.networks[networkId];
                const contractInstance = new web3Instance.eth.Contract(
                    FileStorageContract.abi,
                    deployedNetwork && deployedNetwork.address,
                );
                setFileStorageContract(contractInstance);
            } catch (error) {
                console.error(error);
            }
        };

        init();
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUploadButtonClick = async () => {
        if (!selectedFile || !ownerName || !web3 || !fileStorageContract) return;

        try {
            const fileReader = new FileReader();
            fileReader.onloadend = async () => {
                const arrayBuffer = fileReader.result;
                const fileBytes = new Uint8Array(arrayBuffer);
                const accounts = await web3.eth.getAccounts();

                // Увеличьте значение gasLimit для выполнения транзакции
                const gasLimit = 2000000; // Установите желаемое значение газа

                const fileHash = await fileStorageContract.methods.uploadFile(fileBytes, ownerName, selectedFile.name).send({ from: accounts[0], gas: gasLimit });
                setTransactionHash(fileHash.transactionHash);
            };
            fileReader.readAsArrayBuffer(selectedFile);
        } catch (error) {
            console.error(error);
        }
    };



    const handleGetInfoButtonClick = async () => {
        if (!selectedFile || !web3 || !fileStorageContract) return;

        try {
            const fileReader = new FileReader();
            fileReader.onloadend = async () => {
                const arrayBuffer = fileReader.result;
                const fileBytes = new Uint8Array(arrayBuffer);
                const fileHash = await fileStorageContract.methods.getFileHash(fileBytes).call();
                const info = await fileStorageContract.methods.getFileInfoByHash(fileHash).call();
                setFileInfo(info);
            };
            fileReader.readAsArrayBuffer(selectedFile);
        } catch (error) {
            console.error(error);
        }
    };




    return (
        <div className={styles.content}>
            <div className={styles.title}>
                <h2>Загрузите любой файл</h2>
            </div>

            <div className={styles.container}>
                <div className={styles.ownerInputContainer}>
                    <label htmlFor="owner-name" className={styles.ownerInputLabel}>Введите имя владельца</label>
                    <input type="text" id="owner-name" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} className={styles.ownerInput}/>
                </div>

                <div className={styles.fileUpload}>
                    <label htmlFor="file-upload" className={styles.customFileUpload}>
                        {selectedFile ? selectedFile.name : 'Выберите файл'}
                    </label>
                    <input id="file-upload" type="file" onChange={handleFileChange} className={styles.inputFile}/>
                </div>
            </div>

            <div className={styles.buttonsContainer}>
                <button className={styles.button} onClick={handleUploadButtonClick}>Отправить</button>
                <button className={styles.button} onClick={handleGetInfoButtonClick}>Получить информацию</button>
            </div>

            <div className={styles.transactionStatus}>
                <div>Хэш транзакции: {transactionHash}</div>
            </div>

            <div className={styles.fileInfo}>
                {/* Отображение информации о файле */}
                {fileInfo && (
                    <div>
                        <p>Временная метка: {fileInfo[0]}</p>
                        <p>Пользователь: {fileInfo[1]}</p>
                        <p>Имя файла: {fileInfo[2]}</p>
                        <p>Хэш файла: {fileInfo[3]}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UploadFile;
