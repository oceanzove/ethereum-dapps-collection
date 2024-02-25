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
                <h2 className={styles.title}> Настраиваемый конвертер </h2>
            </div>
            <div className={styles.container}>
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

                <div className={styles.outputContainer}>
                    <label htmlFor='converterOutput' className={styles.outputLabel}>
                        Ответ:
                    </label>
                    <input id='converterOutput'
                           type='number'
                           className={styles.output}
                           readOnly
                           value={null}
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
                {/*<div className={styles.compile}>*/}
                {/*    <button disabled={null}*/}
                {/*            className={styles.button} onClick={null}>*/}
                {/*        Вычислить*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>

        </div>
    )
}

export default CustomConverter;
