import './App.css';
import confetti from 'canvas-confetti';
import LuckySevenContract from "./components/Contracts/LuckySevenContract";

function App(props) {
    const luckysevenContract = new LuckySevenContract();
  const shootConfetti = () => {
    confetti();
  };

  const onChangeSet = (e) => {
    const value = e.target.value;
    props.onUpdateSet(value);
  }

  const onTryLuckyClicker = async () => {
      const x = props.page.set;
      const result = await luckysevenContract.Random(x);
      if (result === "Winner") {
          shootConfetti();
          setWinnerOrLoser(result)
      } else {
          setWinnerOrLoser(result)
      }
  }


    function setWinnerOrLoser(param) {
        const input = document.getElementById("lucky-output");
        if (param === 'Winner') {
            input.style.color = 'Green'
            input.value = 'Winner'
        } else {
            input.style.color = 'Red'
            input.value = 'Loser'
        }

        setTimeout(function () {
            input.style.color = ''; // Сброс цвета текста
            input.value = '';
        }, 3000);
    }


    return (
      <div className="App">
          <div className='container'>
              <div className="title">
                  <h2>Lucky Seven</h2>
              </div>
              <output className='lucky' id='lucky-output'>

              </output>
              <div className='input-div'>
                  <label htmlFor='lucky' className='input-label'>
                      Испытай удачу
                  </label>
                  <input type="number" id='lucky'
                         value={props.page.set}
                         onChange={onChangeSet}
                  />
                  <button
                      disabled={!props.page.set}
                      onClick={onTryLuckyClicker} className="button">Испытать
                  </button>
              </div>
          </div>
      </div>
  );
}

export default App;
