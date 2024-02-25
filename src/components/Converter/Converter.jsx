import React, {useContext, useEffect, useState} from "react";
import styles from './Converter.module.css'
import ContractManagerContext from "../services/ContractManagerContext";

const Converter = (props) => {
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

    const [leftButtonClicked, setLeftButtonClicked] = useState(true);
    const [rightButtonClicked, setRightButtonClicked] = useState(false);

    const handleLeftButtonClick = () => {
        setLeftButtonClicked(true);
        setRightButtonClicked(false);
        // Здесь можно добавить логику для действия при нажатии на левую часть кнопки
    };

    const handleRightButtonClick = () => {
        setRightButtonClicked(true);
        setLeftButtonClicked(false);
        // Здесь можно добавить логику для действия при нажатии на правую часть кнопки
    };

    const BTD = 'Перевода целого шестнадцатиразрядного числа из двоичной системы в десятичную.'
    const OTD = 'Перевода целого восьмиразрядного числа из восьмеричной системы в десятичную.'

    let onChangeInputText = (e) => {
        let text = e.target.value;
        if (leftButtonClicked) {
            props.updateInputBinaryText(text);
        } else if (rightButtonClicked) {
            props.updateInputOctagonalText(text);
        }
    }

    const onButtonClick = async () => {
        if (leftButtonClicked) {
            try {
                const binaryNumber = Number(props.converterPage.inputTextBinary);
                const response = await converterContract.methods.binaryToDecimal(binaryNumber).call();
                props.setAnswerBinaryText(response.toString());
            } catch (error) {
                console.error(error);
            }
        } else if (rightButtonClicked) {
            try {
                const octagonalNumber = Number(props.converterPage.inputTextOctagonal);
                const response = await converterContract.methods.octagonalToDecimal(octagonalNumber).call();
                props.setAnswerOctagonalText(response.toString());
            } catch (error) {
                console.error(error);
            }
        }

    };


    return (
    <div className={styles.content}>
        <div>
            <h2 className={styles.title}> {leftButtonClicked ? BTD : OTD}  </h2>
            <div className={styles.toggleButton}>
                <button
                    className={styles.leftButton}
                    style={{background: leftButtonClicked ?  '#2196F3' : 'none'
                        ,color: leftButtonClicked ? 'white' : "black"
                }}
                    onClick={handleLeftButtonClick}
                >
                    Из двочиной в десятичную
                </button>
                <button
                    className={styles.rightButton}
                    style={{background: rightButtonClicked ?  '#2196F3' : 'none'
                            ,color: rightButtonClicked? 'white' : 'black'
                }}
                    onClick={handleRightButtonClick}
                >
                    Из восьмиричной в десятичную
                </button>
            </div>
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
                    value={leftButtonClicked ? props.converterPage.inputTextBinary : props.converterPage.inputTextOctagonal}
                    onChange={onChangeInputText}
                />
            </div>
            <div className={styles.compile}>
                <button disabled={leftButtonClicked ? !props.converterPage.inputTextBinary : !props.converterPage.inputTextOctagonal}
                        className={styles.button} onClick={onButtonClick}>
                    Вычислить
                </button>
            </div>
        </div>
        <div className={styles.answerContainer}>
            <label className={styles.answerText}>
                Ответ:
                {leftButtonClicked ? props.converterPage.answerTextBinary : props.converterPage.answerTextOctagonal}
            </label>
        </div>
    </div>
)
}

export default Converter;
