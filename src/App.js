import './App.css';
import OwnerContract from "./components/Contracts/OwnerContract";

function App() {
    const ownerContract = new OwnerContract();

    const onTestClick = async () => {
        //name, number, age, userAddress
        const name = '123';
        const number = '123';
        const age = 18;
        const userAddress = '0xC7d5D2Ab11C319E1916775334d83ac1623362c97'
        const response = await ownerContract.setUser(name, number, age, userAddress);
        const response1 = await ownerContract.getUser(name, userAddress);
        console.log(response1);
    }
    return (
        <div className="App">
            <div className="container">
                <div className="title">
                    <h2>Owner</h2>
                </div>
                <div className='wrapper'>
                    <div>
                        <div className='input-div'>
                            <label htmlFor='name-set' className='input-label'>
                                Имя
                            </label>
                            <input type="text" id='name-set'
                                   value={null}
                                   onChange={null}
                            />
                        </div>
                        <div className='input-div'>
                            <label htmlFor='number-set' className='input-label'>
                                Номер
                            </label>
                            <input type="text" id='number-set'
                                   value={null}
                                   onChange={null}
                            />
                        </div>
                        <div className='input-div'>
                            <label htmlFor='age-set' className='input-label'>
                                Возраст
                            </label>
                            <input type="text" id='age-set'
                                   value={null}
                                   onChange={null}
                            />
                        </div>
                        <div className='input-div'>
                            <label htmlFor='address-set' className='input-label'>
                                Адресс
                            </label>
                            <input type="text" id="address-set"
                                   value={null}
                                   onChange={null}
                            />
                        </div>
                        <button disabled={null}
                                onClick={null} className="button">Установить
                        </button>
                    </div>
                    <div>
                        <div className='input-div'>
                            <label htmlFor='name-get' className='input-label'>
                                Имя
                            </label>
                            <input type="text" id='name-get'
                                   value={null}
                                   onChange={null}
                            />
                        </div>
                        <div className='input-div'>
                            <label htmlFor='address-get' className='input-label'>
                                Адресс
                            </label>
                            <input type="text" id="address-get"
                                   value={null}
                                   onChange={null}
                            />
                        </div>
                        <div className='input-div'>
                            <label htmlFor='number-get' className='input-label'>
                                Номер
                            </label>
                            <output id='number-get'
                                   content={null}
                            />
                        </div>
                        <div className='input-div'>
                            <label htmlFor='age-get' className='input-label'>
                                Возраст
                            </label>
                            <output id='age-get'
                                   content={''}
                            />
                        </div>


                        <button onClick={null} className="button">Получить</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
