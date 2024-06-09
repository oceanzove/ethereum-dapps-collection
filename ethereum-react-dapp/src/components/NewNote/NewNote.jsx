import React, {useContext, useEffect, useState} from "react";
import styles from './NewNote.module.css'
import ContractManagerContext from "../Services/ContractManagerContext";

const NewNote = (props) => {
    const {contractManager} = useContext(ContractManagerContext);
    const [newNoteContract, setNewNoteContract] = useState(null);
    const [web3Instance, setWeb3Instance] = useState(null);

    useEffect(() => {
        const getContract = async () => {
            try {
                const contract = await contractManager.getContract('NewNoteContract');
                setNewNoteContract(contract);
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

    const onChangeName = (e) => {
        const text = e.target.value;
        props.updateNameUser(text);
    }
    const onChangeSearchName = (e) => {
        const text = e.target.value;
        props.updateNameSearchUser(text);
    }
    const onChangeNumber = (e) => {
        const text = e.target.value;
        props.updateNumberUser(text);
    }
    const onChangeAddress = (e) => {
        const text = e.target.value;
        props.updateAddressUser(text);
    }

    const onSetClick = async () => {
        try {
            const name = props.newNotePage.nameUser;
            const number = props.newNotePage.numberUser;
            const userAddress = props.newNotePage.addressUser;
            const accounts = await web3Instance.eth.getAccounts();
            await newNoteContract.methods.setUser(name, number, userAddress)
                .send({from: accounts[0], gas: 200000, gasPrice: '1000000'});
            props.setUser();
        } catch (error) {
            console.error(error);
        }
    }

    const onGetClick = async () => {
        try {
            const name = props.newNotePage.nameSearchUser;
            const user = await newNoteContract.methods.getUser(name).call();
            props.getUser(user);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>NewNote</h2>
            </div>
            <div className={styles.form}>
                <input type="text" placeholder="Введите имя"
                       value={props.newNotePage.nameUser}
                       onChange={onChangeName}
                />
                <input type="text" placeholder="Введите номер"
                       value={props.newNotePage.numberUser}
                       onChange={onChangeNumber}
                />
                <input type="text" placeholder="Ввведите адресс"
                       value={props.newNotePage.addressUser}
                       onChange={onChangeAddress}
                />
                <button
                    disabled={!props.newNotePage.nameUser || !props.newNotePage.numberUser || !props.newNotePage.addressUser}
                    onClick={onSetClick} className={styles.button}>Установить
                </button>
            </div>
            <input type="text" placeholder="Введите имя"
                   value={props.newNotePage.nameSearchUser}
                   onChange={onChangeSearchName}
            />
            <button onClick={onGetClick} className={styles.button}>Получить</button>
            <div className={styles.info}>
                <p>Номер: {props.newNotePage.user[0].number}</p>
                <p>Адресс: {props.newNotePage.user[0].userAddress}</p>
            </div>
        </div>
    );
}

export default NewNote;
