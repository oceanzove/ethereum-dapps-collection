import styles from "../Converter/Converter.module.css";
import React, {useContext, useEffect, useState} from "react";
import ContractManagerContext from "../Services/ContractManagerContext";


const ConverterAdvance = (props) => {
    const {contractManager} = useContext(ContractManagerContext);
    const [converterContract, setConverterContract] = useState(null);
    useEffect(() => {
        const getContract = async () => {
            try {
                const contract = await contractManager.getContract('ConverterAdvanceContract');
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

    const DTH = 'Перевод целого шестиразрядного числа из десятичной системы в шестнадцатеричную.'
    const DTB = 'перевода целого шестиразрядного числа из десятичной системы в двоичную.'

    let onChangeInputText = (e) => {
        let text = e.target.value;
        if (leftButtonClicked) {
            props.updateInputDecimalToHex(text);
        } else if (rightButtonClicked) {
            props.updateInputDecimalToBinary(text);
        }
    }

    const onButtonClick = async () => {
        if (leftButtonClicked) {
            try {
                const decimalNumber = Number(props.converterAdvancePage.inputDecimalToHex);
                const response = await converterContract.methods.decimalToHex(decimalNumber).call();
                props.setAnswerHexFromDecimal(response.toString());
            } catch (error) {
                console.error(error);
            }
        } else if (rightButtonClicked) {
            try {
                const decimalNumber = Number(props.converterAdvancePage.inputDecimalToBinary);
                const response = await converterContract.methods.decimalToBinary(decimalNumber).call();
                props.setAnswerBinaryFromDecimal(response.toString());
            } catch (error) {
                console.error(error);
            }
        }

    };

    return (
        <div className={styles.content}>
            <div>
                <h2 className={styles.title}> {leftButtonClicked ? DTH : DTB}  </h2>
                <div className={styles.toggleButton}>
                    <button
                        className={styles.leftButton}
                        style={{background: leftButtonClicked ?  '#2196F3' : 'none'
                            ,color: leftButtonClicked ? 'white' : "black"
                        }}
                        onClick={handleLeftButtonClick}
                    >
                        Из десятчиной в шестнадцатиричную
                    </button>
                    <button
                        className={styles.rightButton}
                        style={{background: rightButtonClicked ?  '#2196F3' : 'none'
                            ,color: rightButtonClicked? 'white' : 'black'
                        }}
                        onClick={handleRightButtonClick}
                    >
                        Из десятчиной в двоичную
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
                        value={leftButtonClicked ? props.converterAdvancePage.inputDecimalToHex : props.converterAdvancePage.inputDecimalToBinary}
                        onChange={onChangeInputText}
                    />
                </div>
                <div className={styles.compile}>
                    <button disabled={leftButtonClicked ? !props.converterAdvancePage.inputDecimalToHex : !props.converterAdvancePage.inputDecimalToBinary}
                        className={styles.button} onClick={onButtonClick}>
                        Вычислить
                    </button>
                </div>
            </div>
            <div className={styles.answerContainer}>
                <label className={styles.answerText}>
                    Ответ:
                    {leftButtonClicked ? props.converterAdvancePage.answerHexFromDecimal : props.converterAdvancePage.answerBinaryFromDecimal}
                </label>
            </div>
        </div>
    )
}

export default ConverterAdvance;
