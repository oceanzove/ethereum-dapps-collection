import React, {useState, useEffect, useContext} from 'react';

import styles from './UploadFile.module.css';
import ContractManagerContext from "../Services/ContractManagerContext";

const UploadFile = (props) => {
    const { contractManager} = useContext(ContractManagerContext)
    const [fileStorageContract, setFileStorageContract] = useState(null);
    const [web3Instance, setWeb3Instance] = useState(null);

    useEffect(() => {
        const getContract = async () => {
            try {
                const contract = await contractManager.getContract('FileStorageContract');
                setFileStorageContract(contract);
            } catch (error) {
                console.error(error);
            }
        };
        getContract();
    }, [contractManager]);

    useEffect(() => {
        const web3 = contractManager.getWeb3()
        setWeb3Instance(web3)
    }, [contractManager])


    let onNewOwnerChange = (e) => {
        let text = e.target.value;
        props.updateNewOwnerText(text);
    }
    let onNewFileHashChange = (e) => {
        const file = e.target.files[0];
        const name = e.target.files[0].name;
        getHashFile(file).then(fileHash => props.updateNewFile(fileHash, name))
    }
    const getHashFile = (file) => {
        return new Promise((resolve, reject) => {
            try {
                const fileReader = new FileReader();
                fileReader.onloadend = async () => {
                    const arrayBuffer = fileReader.result;
                    const fileBytes = new Uint8Array(arrayBuffer);
                    const accounts = await web3Instance.eth.getAccounts();
                    const fileHash = await fileStorageContract.methods.getFileHash(fileBytes)
                        .call({ from: accounts[0], gas: '2000000', gasPrice: '1000000' });
                    resolve(fileHash);
                };
                fileReader.readAsArrayBuffer(file);
            } catch (error) {
                reject(error);
            }
        });

    }

    const handleUploadButtonClick = async () => {
        try {
            const fileHash = props.uploadFilePage.newFileHash;
            const ownerName = props.uploadFilePage.newOwnerText;
            const fileName = props.uploadFilePage.newFileName;
            const uploadTime = Date.now();
            const accounts = await web3Instance.eth.getAccounts();
            const {transactionHash} = await fileStorageContract.methods.uploadFile(fileHash, ownerName, fileName, uploadTime)
                .send({ from: accounts[0], gas: '2000000', gasPrice: '1000000' });
            props.updateTransactionHash(transactionHash);
            props.uploadFile(ownerName, fileName, fileHash, uploadTime);

        } catch (error) {
            console.error(error);
        }
    };
    const handleGetInfoButtonClick = async () => {
        try {
             const fileHash = props.uploadFilePage.newFileHash;
             const info = await fileStorageContract.methods.getFileInfoByHash(fileHash).call();
             props.uploadedFileInfo(info[0],info[1], info[2], info[3]);
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
                    <input type="text" id="owner-name" value={props.uploadFilePage.newOwnerText} onChange={onNewOwnerChange} className={styles.ownerInput}/>
                </div>

                <div className={styles.fileUpload}>
                    <label htmlFor="file-upload" className={styles.customFileUpload}>
                        {props.uploadFilePage.newFileName === '' ? 'Выберите файл' : props.uploadFilePage.newFileName}
                    </label>
                    <input id="file-upload" type="file" onChange={onNewFileHashChange} className={styles.inputFile}/>
                </div>
            </div>

            <div className={styles.buttonsContainer}>
                <button className={styles.button} disabled={!props.uploadFilePage.newOwnerText
                    || !props.uploadFilePage.newFileName}
                        onClick={handleUploadButtonClick}>Отправить</button>
                <button className={styles.button} disabled={
                    !props.uploadFilePage.newFileHash
                } onClick={handleGetInfoButtonClick}>Получить информацию</button>
            </div>

            <div className={styles.transactionStatus}>
                <div>Хэш транзакции: {props.uploadFilePage.currentTransactionHash === '' ? '' :  props.uploadFilePage.currentTransactionHash}</div>
            </div>

            <div className={styles.fileInfo}>
                {/* Отображение информации о файле */}
                    <div>
                        <p>Временная метка:
                            {props.uploadFilePage.uploadedFileTime === '' ? '' :
                                new Date(Number(props.uploadFilePage.uploadedFileTime)).toString()}
                        </p>
                        <p>Пользователь: {props.uploadFilePage.uploadedFileOwner}</p>
                        <p>Имя файла: {props.uploadFilePage.uploadedFileName}</p>
                        <p>Хэш файла: {props.uploadFilePage.uploadedFileHash}</p>
                    </div>
            </div>
        </div>

    );
}

export default UploadFile;
