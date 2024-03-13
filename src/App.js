import React from "react";
import './App.css';
import {useState} from "react";
import AddressContract from "./components/Contracts/AddressContract";
import AddressItem from "./components/Address/AddressItem";

function App(props) {
    const [isSetColumnVisible, setIsSetColumnVisible] = useState(true);
    const addressContract = new AddressContract();

    const onToggleButtonClicked = () => {
        setIsSetColumnVisible(!isSetColumnVisible);
    }

    const onSetAddressClicked = async () => {
        const address = props.addressPage.setAddress;

        await addressContract.set(address);
        const index = await addressContract.getIndex(address);

        props.onAddAddress(index, address);
    }

    const onGetAddressClicked = async () => {
        const address = props.addressPage.getAddress;

        const index = await addressContract.getIndex(address);
        props.onSetGetIndexAddress(index);
    }

    let addressElements = props.addressPage.addresses.map(
        a => <AddressItem key={a.index} index={a.index} address={a.address}/>
    )

    const onChangeSetAddress = (e) => {
        const value = e.target.value;
        props.onUpdateSetAddress(value);
    }
    const onChangeGetAddress = (e) => {
        const value = e.target.value;
        props.onUpdateGetAddress(value);
    }
    return (
        <div className="App">
            <div className="container">
                <div className="title">
                    <h2>Address</h2>
                </div>
                <div className='wrapper'>
                    {isSetColumnVisible ? (
                        <div>
                            <div className='input-div'>
                                <label htmlFor='address-set' className='input-label'>
                                    Добавить адрес
                                </label>
                                <input type="text" id='address-set'
                                       value={props.addressPage.setAddress}
                                       onChange={onChangeSetAddress}
                                />
                            </div>
                            <button
                                disabled={!props.addressPage.setAddress}
                                onClick={onSetAddressClicked} className="button">Добавить
                            </button>
                            <div className='input-div'>
                                <label htmlFor='address-get' className='input-label'>
                                    Получить индекс адреса
                                </label>
                                <input type="text" id='address-get'
                                       value={props.addressPage.getAddress}
                                       onChange={onChangeGetAddress}
                                />
                            </div>
                            <button
                                disabled={!props.addressPage.getAddress}
                                onClick={onGetAddressClicked} className="button">Получить
                            </button>
                            <div className='input-div'>
                                <label htmlFor='index' className='input-label'>Количество оценок</label>
                                <output id='index'>{props.addressPage.getIndexAddress.toString()}</output>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='addresses'>
                                {addressElements}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button id="toggleButton" onClick={onToggleButtonClicked} className="button toggle">
                {isSetColumnVisible ? 'Список адресов' : 'Добавить адрес'}
            </button>
        </div>
    );
}

export default App;
