import React, {useContext, useEffect, useState} from "react";
import styles from './CustomConverter.module.css';
import ComboBox from "../Utils/ComboBox";
import ContractManagerContext from "../Services/ContractManagerContext";

const CustomConverter = (props) => {
    const {contractManager} = useContext(ContractManagerContext);
    const [customConverterContract, setCustomConverterContract] = useState(null);
    useEffect(() => {
        const getContract = async () => {
            try {
                const contract = await contractManager.getContract('CustomConverterContract');
                setCustomConverterContract(contract);
            } catch (error) {
                console.error(error);
            }
        };
        getContract();
    }, [contractManager]);

    const onButtonClick = async () => {
        try {
            const number = props.customConverterPage.inputNumber;
            const from = Number(props.customConverterPage.convertFrom);
            const to =  Number(props.customConverterPage.convertTo);
            const response = await customConverterContract.methods.Converter(number, from, to).call();
            props.setAnswerNumber(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSelectFrom = (value) => {
        props.setConvertFrom(value);
        // Дополнительные действия при выборе значения
    };
    const handleSelectTo = (value) => {
        props.setConvertTo(value);
        // Дополнительные действия при выборе значения
    }

    let onChangeInputNumber = (e) => {
        let number = e.target.value;
        props.updateInputNumber(number);
    }

    return (
        <div className={styles.content}>
            <div>
                <h2 className={styles.title}> Настраиваемый конвертер </h2>
            </div>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <label htmlFor="converterInput" className={styles.inputLabel}>
                        Введите цифру:
                    </label>
                    <input
                        id="converterInput"
                        className={styles.input}
                        value={props.customConverterPage.inputNumber}
                        onChange={onChangeInputNumber}
                    />
                </div>

                <div className={styles.outputContainer}>
                    <label htmlFor='converterOutput' className={styles.outputLabel}>
                        Ответ:
                    </label>
                    <input id='converterOutput'
                           className={styles.output}
                           readOnly
                           value={props.customConverterPage.answerNumber}
                    />
                </div>

                <div className={styles.inputComboBox}>
                    <ComboBox className={styles.inputComboBox}
                        options={props.customConverterPage.optionsConvertFrom}
                        onSelect={handleSelectFrom}/>
                </div>


                <div className={styles.outputComboBox}>
                    <ComboBox
                        options={props.customConverterPage.optionsConvertTo}
                        onSelect={handleSelectTo}/>
                </div>
                <div className={styles.compile}>
                    <button disabled={!props.customConverterPage.inputNumber}
                            className={styles.button} onClick={onButtonClick}>
                        Вычислить
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CustomConverter;
