import React from 'react';
import styles from './Calculator.module.css';
const Calculator = () => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.screen}>
           <div className={styles.display}>0</div>
        </div>
        <div className={styles.buttonBox}>
            <button>C</button>
            <button>+-</button>
            <button>%</button>
            <button>/</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>X</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
        </div>
      </div>
  )
}

export default Calculator;
