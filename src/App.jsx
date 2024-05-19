import './App.css';
import DonationContract from "./components/Contracts/DonationContract";
import React from "react";
import DonaterItem from "./components/Donater/DonaterItem";


function App(props) {
    const donationContract = new DonationContract();

    /**
     * Обновляет поле DonatAddress
     */
    const onChangeDonatAddress = (e) => {
      const value = e.target.value;
      props.onUpdateDonatAddress(value);
    };

    /**
     * Обновляет поле DonatAmount
     */
    const onChangeDonatAmount = (e) => {
        const value = e.target.value;
        props.onUpdateDonatAmount(value);
    };

    /**
     * Снимает с указанного баланса указанную сумму
     * @return {Promise<void>}
     */
    const onDonatClick = async () => {
        const address = props.page.donatAddress;
        const amount = props.page.donatAmount;

        await donationContract.gatherDonation(address, amount);
        props.onDonat(address);

        const balance = await donationContract.getContractBalance();
        const normalizedBalance = Number(balance) / 1000000000000000000;
        props.onSetBalance(normalizedBalance);
    };

    /**
     * Переводит сумму, которая накопилась на балансе контракта владельцу контракта
     * @return {Promise<void>}
     */
    const onTransferToOwnerClick = async () => {
        await donationContract.transferToOwner();
        props.onTransferBalance();
    }

    let donators = props.page.donators.map(
        donater => <DonaterItem donater={donater}/>
    )

    return (
        <div className="App">
            <div className="title">
                <h2>Donation</h2>
            </div>
            <div className='container'>
                <div className='child'>
                    Donat balance: {props.page.balance.toString()} ETH
                </div>
                <div className='wrapper'>
                    {/*Донат*/}
                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='fromAddress' className='input-label'>
                                Пополнить с адреса:
                            </label>
                            <select id="fromAddress" onChange={onChangeDonatAddress}>
                                <option value="">Выберите адрес</option>
                                {props.page.addresses}
                            </select>
                        </div>
                        <div className='input-div'>
                            <label htmlFor='fromAmount' className='input-label'>
                                Пополнить на:
                            </label>
                            <input type="text" id='fromAmount'
                                   value={props.page.donatAmount}
                                   onChange={onChangeDonatAmount}
                            />
                        </div>
                        <button
                            disabled={!props.page.donatAmount}
                            onClick={onDonatClick} className="button">Пополнить
                        </button>
                    </div>

                    {/*Донатеры*/}
                    <div className='child'>
                        <div className='input-div'>
                            <label className='input-label'>
                                Список донатеров
                            </label>
                            <div className='listContainer'>
                                {donators}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='child'>
                    <button disabled={!props.page.balance}
                        className='button' onClick={onTransferToOwnerClick}>Собрать донаты</button>
                </div>
            </div>

        </div>
    );
}

export default App;
