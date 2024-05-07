import './App.css';
import DragonFarmContract from "./components/Contracts/DragonFarmContract";
import {useState} from "react";

function App() {
    const [isSetColumnVisible, setIsSetColumnVisible] = useState(true);
    const dragonFarmContract = new DragonFarmContract();

    const onToggleButtonClicked = () => {
        setIsSetColumnVisible(!isSetColumnVisible);
    }

  return (
      <div className="App">
        <div className="container">
          <div className="title">
            <h2>DragonFarm</h2>
          </div>
          <div className='wrapper'>
            {isSetColumnVisible ? (
                <div>
                    <div className='input-div'>
                        <label htmlFor='dragon-add' className='input-label'>
                            Добавить дракона
                        </label>
                        <input type="text" id='dragon-add'
                               value={null}
                               onChange={null}
                        />
                    </div>
                    <button
                        disabled={null}
                        onClick={null} className="button">Добавить
                    </button>
                    <div className='input-div'>
                        <label htmlFor='dragon-get' className='input-label'>
                            Получить дракона по индексу
                        </label>
                        <input type="text" id='dargon-get'
                               value={null}
                               onChange={null}
                        />
                    </div>
                    <button
                        disabled={null}
                        onClick={null} className="button">Получить
                    </button>
                    <div className='input-div'>
                        <label htmlFor='index' className='input-label'>Имя</label>
                        <output id='index'>{null}</output>
                    </div>
                    <div className='input-div'>
                        <label htmlFor='index' className='input-label'>ДНК</label>
                        <output id='index'>{null}</output>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='addresses'>
                        {null}
                    </div>
                </div>
            )}
          </div>
        </div>
        <button id="toggleButton" onClick={onToggleButtonClicked} className="button toggle">
          {isSetColumnVisible ? 'Список драконов' : 'Добавить дракона'}
        </button>
      </div>
  );
}

export default App;
