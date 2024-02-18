import React, {useState} from "react";
import styles from './CustomConverter.module.css';
import ComboBox from "../utils/ComboBox";

const CustomConverter = (props) => {

    const handleSelectFrom = (value) => {
        props.setConvertFrom(value);
        // Дополнительные действия при выборе значения
    };
    const handleSelectTo = (value) => {
        props.setConvertTo(value);
        // Дополнительные действия при выборе значения
    }

    return (
        <div className={styles.content}>
            <div>
                <h2 className={styles.title}> Настраевыемый конвертер </h2>
            </div>
            <div className={styles.container}>
                <div className={styles.comboBoxFrom}>
                    <ComboBox
                        options={props.customConverterPage.optionsConvertFrom}
                        onSelect={handleSelectFrom}/>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="converterInput" className={styles.inputLabel}>
                        Введите цифру:
                    </label>
                    <input
                        id="converterInput"
                        type="number"
                        className={styles.input}
                        value={null}
                        onChange={null}
                    />
                </div>
                <div className={styles.comboBoxTo}>
                    <ComboBox
                        options={props.customConverterPage.optionsConvertTo}
                        onSelect={handleSelectTo}/>
                </div>
                <div className={styles.compile}>
                    <button disabled={null}
                            className={styles.button} onClick={null}>
                        Вычислить
                    </button>
                </div>
            </div>
            <div className={styles.answerContainer}>
                <label className={styles.answerText}>
                    Ответ:
                    {null}
                </label>
            </div>
        </div>
    )
}

export default CustomConverter;