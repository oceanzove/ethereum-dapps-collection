import React, {useEffect, useRef, useState} from "react";
import ReactDice from 'react-dice-complete'
import './App.css';
import DiceContract from "./components/Contracts/DiceContract";

function App() {
    const diceContract = new DiceContract();
    const [p1, setP1] = useState();
    const [p2, setP2] = useState();

    const reactDice = useRef(null);
    const reactDice2 = useRef(null)

    const rollDone = (totalValue) => {
        console.log('1:', totalValue)
        setP1(totalValue);
    }

    const rollDone2 = (totalValue) => {
        console.log('2:', totalValue)
        setP2(totalValue);
    }

    const onRollClick = async () => {
        const response = await diceContract.getDiceRoll();
        console.log(response);
        rollAllPlayer1(response[0].map(Number));
        rollAllPlayer2(response[1].map(Number));
    }

    const rollAllPlayer1 = (dices) => {
        reactDice.current?.rollAll(dices);
    }

    const rollAllPlayer2 = (dices) => {
        reactDice2.current.rollAll(dices);
    }

    useEffect(() => {
        console.log('p1', p1);
        console.log('p2', p2);
        if (p1 > p2) {
            alert("Победил игрок 1")
        } else {
            alert("Победил игрок 2")
        }
    }, [p1, p2]);

    return (
    <div className="App">
        <div className='container'>
            <div className='player1'>
                <label className='title'>
                    Игрок 1
                </label>
                <ReactDice
                    numDice={2}
                    ref={reactDice}
                    disableIndividual
                    rollDone={rollDone}
                />
            </div>
            <div className='roll'>
                <button className='button' onClick={onRollClick}>
                    Крутить
                </button>
            </div>
            <div className='player2'>
                <label className='title'>
                    Игрок 2
                </label>
                <ReactDice
                    numDice={2}
                    ref={reactDice2}
                    faceColor={'blue'}
                    disableIndividual
                    rollDone={rollDone2}
                />
            </div>
        </div>


    </div>
  );
}

export default App;
