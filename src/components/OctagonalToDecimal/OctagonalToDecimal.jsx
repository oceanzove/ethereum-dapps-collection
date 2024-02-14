import styles from "../Factorial/Factorial.module.css";
import React, {useContext, useEffect, useState} from "react";
import ContractManagerContext from "../services/ContractManagerContext";


const OctagonalToDecimal = (props) => {
    const {contractManager} = useContext(ContractManagerContext);
    const [converterContract, setConverterContract] = useState(null);
    useEffect(() => {
        const getContract = async () => {
            try {
                const contract = await contractManager.getContract('ConverterContract');
                setConverterContract(contract);
            } catch (error) {
                console.error(error);
            }
        };
        getContract();
    }, [contractManager]);

    let onChangeInputText = (e) => {
        let text = e.target.value;
        props.updateInputText(text);
    }

    const onButtonClick = async () => {
        try {
            const octagonalNumber = Number(props.octagonalToDecimalPage.inputText);
            const response = await converterContract.methods.OctagonalToDecimal(octagonalNumber).call();
            props.setAnswerText(response.toString());
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.content}>
            <div>
                <h2 className={styles.title}> Перевода целого
                    восьмиразрядного числа из восьмеричной системы в десятичную. </h2>
            </div>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <label htmlFor="answerInput" className={styles.inputLabel}>
                        Введите цифру:
                    </label>
                    <input
                        id="answerInput"
                        type="number"
                        className={styles.input}
                        value={props.octagonalToDecimalPage.inputText}
                        onChange={onChangeInputText}
                    />
                </div>
                <div className={styles.compile}>
                    <button disabled={!props.octagonalToDecimalPage.inputText}
                            className={styles.button} onClick={onButtonClick}>
                        Вычислить
                    </button>
                </div>
            </div>
            <div className={styles.answerContainer}>
                <label className={styles.answerText}>
                    Ответ:
                    {props.octagonalToDecimalPage.answerText}
                </label>
            </div>
        </div>
    );
}

export default OctagonalToDecimal;
