import React, {useRef} from "react";
import ReactDice from 'react-dice-complete'
import './App.css';

function App() {
    const reactDice = useRef(null);
    const reactDice2 = useRef(null)

    const rollDone = (totalValue, values) => {
        console.log('individual die values array:', values)
        console.log('total dice value:', totalValue)
    }

    const onRollClick = () => {
      rollAllP1(10);
      rollAllP2(10);
    }

    const rollAllP1 = () => {
        reactDice.current?.rollAll(10)
    }

    const rollAllP2 = () => {
        reactDice2.current.rollAll([6, 6]);
    }



    return (
    <div className="App">
        <div className='container'>
            <div className='player1'>
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
                <ReactDice
                    numDice={2}
                    ref={reactDice2}
                    faceColor={'blue'}
                    disableIndividual
                    rollDone={rollDone}
                />
            </div>
        </div>


    </div>
  );
}

export default App;
