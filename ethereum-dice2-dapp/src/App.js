import React, {useEffect, useRef, useState} from "react";
import ReactDice from 'react-dice-complete'
import confetti from 'canvas-confetti';
import './App.css';
import Dice2Contract from "./components/Contracts/Dice2Contract";

function App() {
    const diceContract = new Dice2Contract();
    const [p1, setP1] = useState();
    const [p2, setP2] = useState();

    const reactDice = useRef(null);
    const reactDice2 = useRef(null)

    const shootConfetti = () => {
        const count = 200;
        const defaults = {
            origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    };

    const rollDone = (totalValue) => {
        setP1(totalValue);
    }

    const rollDone2 = (totalValue) => {
        setP2(totalValue);
    }

    const onRollClick = async () => {
        const response = await diceContract.getDiceRoll();
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
        if (p1 === p2) {
            setWinnerOrLoser();
            return;
        }
        shootConfetti()
        if(p1 > p2) {
            setWinnerOrLoser('p1');
        } else {
            setWinnerOrLoser('p2');
        }
    }, [p1, p2]);


    function setWinnerOrLoser(param) {
        const input = document.getElementById("result");
        if (param === 'p1') {
            input.style.color = 'Blue'
            input.value = 'Победитель синий'
        } else if (param === 'p2') {
            input.style.color = 'Red'
            input.value = 'Победитель красный'
        } else {
            input.style.color = 'Black'
            input.value = 'Ничья'
        }

        setTimeout(function () {
            input.style.color = ''; // Сброс цвета текста
            input.value = '';
        }, 3000);
    }

    return (
        <div className="App">
            <div className="title">
                <h2>Dice</h2>
            </div>
            <div className='container'>
                <div className='player1'>
                    <label className='title'>
                        Игрок 1
                    </label>
                    <ReactDice
                        className='dice'
                        numDice={2}
                        ref={reactDice}
                        faceColor={'blue'}
                        dotColor={'white'}
                        disableIndividual
                        rollDone={rollDone}
                        dieCornerRadius={15}
                        dieSize={130}
                        margin={30}
                    />
                </div>
                <div className='roll'>
                    <div className='scoreP1'>{p1}</div>
                    <div className='winner'>
                        <output id='result' className='result'></output>
                    </div>
                    <div className='scoreP2'>{p2}</div>
                    <button className='button rolled' onClick={onRollClick}>
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
                        faceColor={'red'}
                        dotColor={'white'}
                        disableIndividual
                        rollDone={rollDone2}
                        dieCornerRadius={15}
                        dieSize={130}
                        margin={30}
                    />
                </div>
            </div>


        </div>
    );
}

export default App;


//todo загрузка счета при крутящихся кубках