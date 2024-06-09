import './App.css';
import DragonFarmContract from "./components/Contracts/DragonFarmContract";
import {useState} from "react";
import DragonItem from "./components/Dragons/DragonItem";

function App(props) {
    const [isSetColumnVisible, setIsSetColumnVisible] = useState(true);
    const dragonFarmContract = new DragonFarmContract();

    const onToggleButtonClicked = () => {
        setIsSetColumnVisible(!isSetColumnVisible);
    }
    const onChangeDragonAdd = (e) => {
        const value = e.target.value;
        props.onUpdateAddName(value);
    }

    const onChangeDragonGet = (e) => {
        const value = e.target.value;
        props.onUpdateGetIndex(value);
    }

    const onAddDragonClick = async () => {
        const name = props.page.setName;
        const dna = await dragonFarmContract.generateDna(name);
        await dragonFarmContract.addDragon(name, dna)

        const index = await dragonFarmContract.getLastDragonIndex();
        props.onAddDragon(index, name, dna);
    }

    const onGetDragonInfo = async () => {
        const index = props.page.getIndex;
        const dragon = await dragonFarmContract.getDragon(index);
        props.onSetGetDragonInfo(dragon.name, dragon.dna);
    }

    let dragonElements = props.page.dragons.map(
        d => <DragonItem key={d.index} index={d.index} name={d.name} dna={d.dna}/>
    )

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
                                       value={props.page.setName}
                                       onChange={onChangeDragonAdd}
                                />
                            </div>
                            <button
                                disabled={!props.page.setName}
                                onClick={onAddDragonClick} className="button">Добавить
                            </button>
                            <div className='input-div'>
                                <label htmlFor='dragon-get' className='input-label'>
                                    Получить дракона по индексу
                                </label>
                                <input type="text" id='dargon-get'
                                       value={props.page.getIndex}
                                       onChange={onChangeDragonGet}
                                />
                            </div>
                            <button
                                disabled={!props.page.getIndex}
                                onClick={onGetDragonInfo} className="button">Получить
                            </button>
                            <div className='input-div'>
                                <label htmlFor='name' className='input-label'>Имя</label>
                                <output id='name'>{props.page.getInfo[0].name}</output>
                            </div>
                            <div className='input-div'>
                                <label htmlFor='dna' className='input-label'>ДНК</label>
                                <output id='dna'>{props.page.getInfo[0].dna.toString()}</output>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='dragons'>
                                {dragonElements}
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
