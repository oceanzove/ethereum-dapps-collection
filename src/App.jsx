import './App.css';
import DonationContract from "./components/Contracts/DonationContract";

function App(props) {
    const donationContract = new DonationContract();
    const onChangeTest = (e) => {
        const value = e.target.value;
        props.onTest(value);
    };

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

    const onDonatClick = async () => {
        const address = props.page.donatAddress;
        const amount = props.page.donatAmount;

        await donationContract.gatherDonation(address, amount);
        props.onDonat();

        const balance = await donationContract.getContractBalance();
        props.onSetBalance(balance);
    };

    return (
        <div className="App">
            <div className="title">
                <h2>Donation</h2>
            </div>
            <div className='balance'>
                Donat balance: {props.page.balance.toString()} wei
            </div>
            <div className='container'>
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
                </div>
                <button className='button'>Собрать донаты
                </button>
            </div>
        </div>
    );
}

export default App;
