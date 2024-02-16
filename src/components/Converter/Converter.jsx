import React, {useState} from "react";
import styles from './Converter.module.css'
const Converter = (props) => {
    const [isToggled, setIsToggled] = useState(false);
    const [leftButtonClicked, setLeftButtonClicked] = useState(true);
    const [rightButtonClicked, setRightButtonClicked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [answer, setAnswer] = useState('');

    const handleLeftButtonClick = () => {
        setIsToggled(isToggled)
        setLeftButtonClicked(true);
        setRightButtonClicked(false);
        // Здесь можно добавить логику для действия при нажатии на левую часть кнопки
        setAnswer(`Левая часть кнопки: ${inputValue}`);
    };

    const handleRightButtonClick = () => {
        setRightButtonClicked(true);
        setLeftButtonClicked(false);
        // Здесь можно добавить логику для действия при нажатии на правую часть кнопки
        setAnswer(`Правая часть кнопки: ${inputValue}`);
    };

    const BTD = 'Перевода целого шестнадцатиразрядного числа из двоичной системы в десятичную.'
    const OTD = 'Перевода целого восьмиразрядного числа из восьмеричной системы в десятичную.'


    const handleToggle = () => {
        setIsToggled(!isToggled);
        // Очищаем input и ответ при переключении
        // setInputValue('');
        // setAnswer('');
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
                    Левая часть кнопки
                </button>
                <button
                    className={styles.rightButton}
                    style={{background: rightButtonClicked ?  '#2196F3' : 'none'
                            ,color: rightButtonClicked? 'white' : 'black'
                }}
                    onClick={handleRightButtonClick}
                >
                    Правая часть кнопки
                </button>
            </div>
            {/*<button onClick={handleToggle}>*/}
            {/*    {isToggled ? 'Переключить на Действие 2' : 'Переключить на Действие 1'}*/}
            {/*</button>*/}
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
                    value={null}
                    onChange={null}
                />
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

export default Converter;
