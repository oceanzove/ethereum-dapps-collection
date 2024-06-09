import React, {useContext, useEffect, useState} from "react";
import ContractManagerContext from "../Services/ContractManagerContext";
import styles from './BitwiseCalculator.module.css'

const BitwiseCalculator = (props) => {
    const {contractManager} = useContext(ContractManagerContext);
    const [bitwiseCalculatorContract, setBitwiseCalculatorContract] = useState(null);
    useEffect(() => {
        const getContract = async () => {
            try {
                const contract = await contractManager.getContract('BitwiseCalculatorContract');
                setBitwiseCalculatorContract(contract);
            } catch (error) {
                console.error(error);
            }
        };
        getContract();
    }, [contractManager]);

    const numberClick = (e) => {
        const number = e.target.name;
        if (!props.bitwiseCalculatorPage.operatorBit) {
            let number1 = props.bitwiseCalculatorPage.numberBit1.concat(number)
            props.updateNumber1(number1);
        } else {
            let number2 = props.bitwiseCalculatorPage.numberBit2.concat(number)
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

    const resultClick = async () => {
        try {
            const x = props.bitwiseCalculatorPage.numberBit1;
            const operator = props.bitwiseCalculatorPage.operatorBit;
            const y = props.bitwiseCalculatorPage.numberBit2;

            if (x.length === 0) {
                return;
            }

            const response = await bitwiseCalculatorContract.methods.calculate(x, operator, y).call();
            console.log(response);
            props.setResult(response.toString())

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.screen}>
                <div className={styles.display}>
                    {props.bitwiseCalculatorPage.resultBit ? props.bitwiseCalculatorPage.resultBit
                        : (!props.bitwiseCalculatorPage.operatorBit ? props.bitwiseCalculatorPage.numberBit1
                            : props.bitwiseCalculatorPage.numberBit2)}
                </div>
            </div>
            <div className={styles.buttonBox}>
                <button name="AND" onClick={operatorClick}>AND</button>
                <button name="OR" onClick={operatorClick}>OR</button>
                <button name="NOT" onClick={operatorClick}>NOT</button>
                <button name="1" onClick={numberClick}>1</button>
                <button name="NAND" onClick={operatorClick}>NAND</button>
                <button name="NOR" onClick={operatorClick}>NOR</button>
                <button name="XOR" onClick={operatorClick}>XOR</button>
                <button name="0" onClick={numberClick}>0</button>
                <button onClick={clear}>C</button>
                <button onClick={resultClick}>=</button>
            </div>
        </div>
    )
}

export default BitwiseCalculator;
