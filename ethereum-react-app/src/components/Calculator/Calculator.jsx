import React, {useContext, useEffect, useState} from 'react';
import styles from './Calculator.module.css';
import ContractManagerContext from "../Services/ContractManagerContext";

const Calculator = (props) => {
    const {contractManager} = useContext(ContractManagerContext);
    const [calculatorContract, setCalculatorContract] = useState(null);
    useEffect(() => {
        const getContract = async () => {
            try {
                const contract = await contractManager.getContract('CalculatorContract');
                setCalculatorContract(contract);
            } catch (error) {
                console.error(error);
            }
        };
        getContract();
    }, [contractManager]);

    const numberClick = (e) => {
        const number = e.target.name;
        if (!props.calculatorPage.operator) {
            let number1 =  props.calculatorPage.number1.concat(number)
            props.updateNumber1(number1);
        } else {
            let number2 =  props.calculatorPage.number2.concat(number)
            props.updateNumber2(number2);
        }
    }

    const operatorClick = (e) => {
        const operator = e.target.name;
        props.setOperator(operator);
    }

    const clear = () => {
        props.clear();
    }

    const inversion = () => {
        if (!props.calculatorPage.operator) {
            let number = props.calculatorPage.number1 * -1
            props.updateNumber1(number);
        } else {
            let number = props.calculatorPage.number2 * -1
            props.updateNumber2(number);
        }
    };
    const resultClick = async () => {
        try {
            const x = Number(props.calculatorPage.number1);
            const operator = props.calculatorPage.operator;
            const y = Number(props.calculatorPage.number2);

            if (isNaN(x) || isNaN(y)) {
                console.error('One of the numbers is not a valid number!');
                return;
            }

            const response = await calculatorContract.methods.calculate(x, operator, y).call();
            props.setResult(response.toString())

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.screen}>
                <div className={styles.display}>
                    {props.calculatorPage.result ? props.calculatorPage.result
                        : (!props.calculatorPage.operator ? props.calculatorPage.number1
                            : props.calculatorPage.number2)}
                </div>
            </div>
            <div className={styles.buttonBox}>
                <button onClick={clear}>C</button>
                <button onClick={inversion}>+-</button>
                <button name="^" onClick={operatorClick}>^</button>
                <button name="/" onClick={operatorClick}>&divide;</button>
                <button name="7" onClick={numberClick}>7</button>
                <button name="8" onClick={numberClick}>8</button>
                <button name="9" onClick={numberClick}>9</button>
                <button name="*" onClick={operatorClick}>X</button>
                <button name="4" onClick={numberClick}>4</button>
                <button name="5" onClick={numberClick}>5</button>
                <button name="6" onClick={numberClick}>6</button>
                <button name="-" onClick={operatorClick}>-</button>
                <button name="1" onClick={numberClick}>1</button>
                <button name="2" onClick={numberClick}>2</button>
                <button name="3" onClick={numberClick}>3</button>
                <button name="+" onClick={operatorClick}>+</button>
                <button name="0" onClick={numberClick}>0</button>
                <button name="." onClick={numberClick}>.</button>
                <button onClick={resultClick}>=</button>
            </div>
        </div>
    )
}

export default Calculator;
