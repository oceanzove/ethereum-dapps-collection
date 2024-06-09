import React, {useContext, useEffect, useState} from "react";
import styles from './Note.module.css'
import ContractManagerContext from "../Services/ContractManagerContext";

const Note = (props) => {
    const {contractManager} = useContext(ContractManagerContext);
    const [noteContract, setNoteContract] = useState(null);
    const [web3Instance, setWeb3Instance] = useState(null);

    useEffect(() => {
        const getContract = async () => {
            try {
                const contract = await contractManager.getContract('NoteContract');
                setNoteContract(contract);
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
        props.updateNameNote(text);
    }
    const onChangeNumber = (e) => {
        const text = e.target.value;
        props.updateNumberNote(text);
    }
    const onChangeAddress = (e) => {
        const text = e.target.value;
        props.updateAddressNote(text);
    }

    const onSetClick = async () => {
        try {
            const newName = props.notePage.nameNote;
            const newNumber = props.notePage.numberNote;
            const newAddress = props.notePage.addressNote;
            const accounts = await web3Instance.eth.getAccounts();
            await noteContract.methods.set(newName, newNumber, newAddress).send({from: accounts[0], gas: 200000});
            props.setNote();
        } catch (error) {
            console.error(error);
        }
    }

    const onGetClick = async () => {
        try {
            const note = await noteContract.methods.get().call();
            props.getNote(note);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Note</h2>
            </div>
            <div className={styles.form}>
                <input type="text" placeholder="Введите имя"
                       value={props.notePage.nameNote}
                       onChange={onChangeName}
                />
                <input type="text" placeholder="Введите номер"
                       value={props.notePage.numberNote}
                       onChange={onChangeNumber}
                />
                <input type="text" placeholder="Ввведите адресс"
                       value={props.notePage.addressNote}
                       onChange={onChangeAddress}
                />
                <button disabled={!props.notePage.nameNote || !props.notePage.numberNote || !props.notePage.addressNote}
                        onClick={onSetClick} className={styles.button}>Установить
                </button>
            </div>
            <button onClick={onGetClick} className={styles.button}>Получить</button>
            <div className={styles.info}>
                <p>Имя: {props.notePage.note[0].name}</p>
                <p>Номер: {props.notePage.note[0].number}</p>
                <p>Адресс: {props.notePage.note[0].noteAddress}</p>
            </div>
        </div>
    );
}

export default Note;