import './App.css';
import DragonFarmContract from "./components/Contracts/DragonFarmContract";

function App(props) {
    const dragonFarmContract = new DragonFarmContract();

    // Обновление поля с именем дракона для добавления
    const onChangeDragonAdd = (e) => {
        const value = e.target.value;
        props.onUpdateAddName(value);
    };

    // Обновления поля с индексом для получения информации
    const onChangeDragonGet = (e) => {
        const value = e.target.value;
        props.onUpdateGetIndex(value);
    };

    // Обновление полей для reforge драконов
    const onChangeReforgeDragonName = (e) => {
        const value = e.target.value;
        props.onUpdateReforgeDragonName(value);
    };

    const onChangeReforgeDragonId = (e) => {
        const value = e.target.value;
        props.onUpdateReforgeDragonId(value);
    };

    const onChangeReforgeDragonFood = (e) => {
        const value = e.target.value;
        props.onUpdateReforgeDragonFood(value);
    }

    /**
     * Метод для добавления дракона, в блокчейн
     */
    const onAddDragonClick = async () => {
        const name = props.dragonFarmPage.addDragonName;
        const dna = await dragonFarmContract.generateDna(name);
        await dragonFarmContract.addDragon(name, dna)

        props.onAddDragon(name, dna);
    };

    /**
     * Метод для получения дракона из блокчейна по индексу
     */
    const onGetDragonInfo = async () => {
        const index = props.dragonFarmPage.getDragonIndex;
        const dragon = await dragonFarmContract.getDragon(index);
        props.onSetGetDragonInfo(dragon.id, dragon.name, dragon.dna);
    };

    /**
     * Метод для reforge'а дракона и добавления его в блокчейн
     */
    const onReforgeDragonClick = async () => {
        const name = props.dragonFarmPage.reforgeDragonName;
    };



    return (
        <div className="App">
            <div className="title">
                <h2>DragonFarm & DragonForge</h2>
            </div>
            <div className='container'>
                <div className='wrapper'>
                    {/*Добавление дракона*/}
                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='dragon-add' className='input-label'>
                                Добавить дракона
                            </label>
                            <input type="text" id='dragon-add'
                                   value={props.dragonFarmPage.addDragonName}
                                   onChange={onChangeDragonAdd}
                            />
                        </div>
                        <button
                            disabled={!props.dragonFarmPage.addDragonName}
                            onClick={onAddDragonClick} className="button">Добавить
                        </button>
                    </div>

                    {/*Получение по индексу дракона*/}
                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='dragon-get' className='input-label'>
                                Получить дракона по индексу
                            </label>
                            <input type="number" id='dargon-get'
                                   value={props.dragonFarmPage.getDragonIndex}
                                   onChange={onChangeDragonGet}
                            />
                        </div>
                        <button
                            disabled={!props.dragonFarmPage.getDragonIndex}
                            onClick={onGetDragonInfo} className="button">Получить
                        </button>
                        <div className='input-div'>
                            <label htmlFor='id' className='input-label'>ID</label>
                            <output id='id'>{props.dragonFarmPage.getInfo[0].id.toString()}</output>
                        </div>
                        <div className='input-div'>
                            <label htmlFor='name' className='input-label'>Имя</label>
                            <output id='name'>{props.dragonFarmPage.getInfo[0].name}</output>
                        </div>
                        <div className='input-div'>
                            <label htmlFor='dna' className='input-label'>ДНК</label>
                            <output id='dna'>{props.dragonFarmPage.getInfo[0].dna.toString()}</output>
                        </div>
                    </div>

                    {/*Reforge дракона */}
                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='dragon-reforge-name' className='input-label'>
                                Имя
                            </label>
                            <input type="text" id='dragon-reforge-name'
                                   value={props.dragonFarmPage.reforgeDragonName}
                                   onChange={onChangeReforgeDragonName}
                            />
                        </div>
                        <div className='input-div'>
                            <label htmlFor='dragon-reforge-id' className='input-label'>
                                ID
                            </label>
                            <input type="number" id='dragon-reforge-id'
                                   value={props.dragonFarmPage.reforgeDragonId}
                                   onChange={onChangeReforgeDragonId}
                            />
                        </div>
                        <div className='input-div'>
                            <label htmlFor='dragon-reforge-food' className='input-label'>
                                Еда
                            </label>
                            <input type="number" id='dragon-reforge-food'
                                   value={props.dragonFarmPage.reforgeDragonFood}
                                   onChange={onChangeReforgeDragonFood}
                            />
                        </div>
                        <button
                            disabled={
                                !props.dragonFarmPage.reforgeDragonName
                                || !props.dragonFarmPage.reforgeDragonId
                                || !props.dragonFarmPage.reforgeDragonFood
                            }
                            onClick={null} className="button">Переделать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
