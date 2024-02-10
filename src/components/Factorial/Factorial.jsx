import React from 'react';
import styles from './Factorial.module.css'
const Factorial = () => {
    return (
        <div className={styles.taskInterface}>
            <div className={styles.inputContainer}>
                <label htmlFor="answerInput" className={styles.label}>
                    Введите цифру:
                </label>
                <input
                    id="answerInput"
                    type="number"
                    className={styles.input}
                    value={null}
                    onChange={() => {}}
                />
            </div>
            <button className={styles.button} onClick={() => {}}>
                Отправить
            </button>
            {/* Здесь можно добавить вывод результата или другой обратной связи */}
        </div>
    );
}

export default Factorial;
