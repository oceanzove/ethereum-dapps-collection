import React, {useState} from 'react';
import './App.css';
import OwnerContract from "./components/Contracts/OwnerContract";

function App(props) {
    const [isSetColumnVisible, setIsSetColumnVisible] = useState(true);
    const ownerContract = new OwnerContract();

    const onToggleButtonClicked = () => {
        setIsSetColumnVisible(!isSetColumnVisible);
    }

    const onSetUserClicked = async () => {
        const name = props.page.setUserName;
        const number = props.page.setUserNumber;
        const age = Number(props.page.setUserAge);
        const address = props.page.setUserAddress;

        // Вызываем метод setUser контракта и передаем значения
        const response = await ownerContract.setUser(name, number, age, address);
        if (response === false) {
            setInvalidAddress("SET");
        }
        props.onSetUser();
    }

    const onGetUserClicked = async () => {
        // Получаем значения полей из формы получения
        const name = props.page.getUserName;
        const address = props.page.getUserAddress;

        // Вызываем метод getUser контракта и передаем значения
        const response = await ownerContract.getUser(name, address);
        if (response === false) {
            setInvalidAddress("GET");
        }
        props.onGetUser(response.number, response.age.toString());
    }

    function setInvalidAddress(param) {
        let input;
        if (param === "SET") {
            input = document.getElementById("address-set");

        } else {
            input = document.getElementById("address-get");
        }
        input.classList.add("invalid");
        input.style.background = '#F06660';
        input.style.color = '#fff'
        input.placeholder = "Введен адрес не владельца";

        setTimeout(function() {
            input.classList.remove("invalid");
            input.style.background = ''; // Сброс цвета фона
            input.style.color = ''; // Сброс цвета текста
            input.placeholder = ""; // Сброс placeholder'a
        }, 3000);
    }

    const onChangeSetName = (e) => {
        const value = e.target.value;
        props.onUpdateSetUserName(value);
    }
    const onChangeSetNumber = (e) => {
        const value = e.target.value;
        props.onUpdateSetUserNumber(value);
    }
    const onChangeSetAge = (e) => {
        const value = e.target.value;
        props.onUpdateSetUserAge(value);
    }
    const onChangeSetAddress = (e) => {
        const value = e.target.value;
        props.onUpdateSetUserAddress(value);
    }

    const onChangeGetName = (e) => {
        const value = e.target.value;
        props.onUpdateGetUserName(value);
    }
    const onChangeGetAddress = (e) => {
        const value = e.target.value;
        props.onUpdateGetUserAddress(value);
    }

    return (
        <div className="App">
            <div className="container">
                <div className="title">
                    <h2>Owner</h2>
                </div>
                <div className='wrapper'>
                    {isSetColumnVisible ? (
                        <div>
                            <div className='input-div'>
                                <label htmlFor='name-set' className='input-label'>
                                    Имя
                                </label>
                                <input type="text" id='name-set'
                                       value={props.page.setUserName}
                                       onChange={onChangeSetName}
                                />
                            </div>
                            <div className='input-div'>
                                <label htmlFor='number-set' className='input-label'>
                                    Номер
                                </label>
                                <input type="text" id='number-set'
                                       value={props.page.setUserNumber}
                                       onChange={onChangeSetNumber}
                                />
                            </div>
                            <div className='input-div'>
                                <label htmlFor='age-set' className='input-label'>
                                    Возраст
                                </label>
                                <input type="text" id='age-set'
                                       value={props.page.setUserAge}
                                       onChange={onChangeSetAge}
                                />
                            </div>
                            <div className='input-div'>
                                <label htmlFor='address-set' className='input-label'>
                                    Адресс
                                </label>
                                <input type="text" id="address-set"
                                       value={props.page.setUserAddress}
                                       onChange={onChangeSetAddress}
                                />
                            </div>
                            <button
                                disabled={
                                    !props.page.setUserName
                                    || !props.page.setUserNumber
                                    || !props.page.setUserAge
                                    || !props.page.setUserAddress
                                }
                                onClick={onSetUserClicked} className="button">Установить
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className='input-div'>
                                <label htmlFor='name-get' className='input-label'>
                                    Имя
                                </label>
                                <input type="text" id='name-get'
                                       value={props.page.getUserName}
                                       onChange={onChangeGetName}
                                />
                            </div>
                            <div className='input-div'>
                                <label htmlFor='address-get' className='input-label'>
                                    Адресс
                                </label>
                                <input type="text" id="address-get"
                                       value={props.page.getUserAddress}
                                       onChange={onChangeGetAddress}
                                />
                            </div>
                            <div className='input-div'>
                                <label htmlFor='number-get' className='input-label'>
                                    Номер
                                </label>
                                <output id='number-get'>{props.page.getUserNumber}</output>
                            </div>
                            <div className='input-div'>
                                <label htmlFor='age-get' className='input-label'>
                                    Возраст
                                </label>
                                <output id='age-get'>{props.page.getUserAge}</output>
                            </div>
                            <button
                                disabled={
                                    !props.page.getUserName
                                    || !props.page.getUserAddress
                                }
                                onClick={onGetUserClicked} className="button">Получить
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <button id="toggleButton" onClick={onToggleButtonClicked} className="button">
                {isSetColumnVisible ? 'Переключить на Получение' : 'Переключить на Установку'}
            </button>
        </div>
    );
}

export default App;
