import './App.css';
import BankDepositContract from "./components/Contracts/BankDepositContract";

function App(props) {
    const bankDepositContract = new BankDepositContract();
    /**
     * Обновляет поле BankAddress
     */
    const onChangeBankAddress = (e) => {
        const value = e.target.value;
        props.onChangeBankAddress(value);
    };

    /**
     * Обновляет поле BankAmount
     */
    const onChangeBankAmount = (e) => {
        const value = e.target.value;
        props.onChangeBankAmount(value);
    };

    /**
     * Обновляет поле DepositAddress
     */
    const onChangeDepositAddress = (e) => {
        const value = e.target.value;
        props.onChangeDepositAddress(value);
    };

    /**
     * Обновляет поле DepositAmount
     */
    const onChangeDepositAmount = (e) => {
        const value = e.target.value;
        props.onChangeDepositAmount(value);
    };

    /**
     * Обновляет поле PercentAddress
     */
    const onChangePercentAddress = (e) => {
        const value = e.target.value;
        props.onChangePercentAddress(value);
    };

    /**
     * Пополняет счет контракта
     * @return {Promise<void>}
     */
    const onBankAccountClick = async () => {
        const address = props.page.bankAddress;
        const amount = props.page.bankAmount;

        await bankDepositContract.bankAccount(address, amount);
        props.onBank();

        const balance = await bankDepositContract.getContractBalance();
        const normalizedBalance = Number(balance) / 1000000000000000000;
        props.onSetBalance(normalizedBalance);
    }
    /**
     * Сделать депозит
     * @return {Promise<void>}
     */
    const onDepositClick = async () => {
        const address = props.page.depositAddress;
        const amount = props.page.depositAmount;

        await bankDepositContract.deposit(address, amount);
        props.onDeposit();

        const balance = await bankDepositContract.getContractBalance();
        const normalizedBalance = Number(balance) / 1000000000000000000;
        props.onSetBalance(normalizedBalance);

        const percentRate = await bankDepositContract.percentRate(address);
        // setPercentRate
        let remainingTime = await bankDepositContract.getRemainingTime(address);
        // setRemainingTime

    }

    const onCollectClick = async () => {
        const address = props.page.percentAddress;
        await bankDepositContract.collectPercent(address);
    }

    return (
        <div className="App">
            <div className="title">
                <h2>BankDeposit</h2>
            </div>
            <div className='container'>
                <div className='child'>
                    <div className='balance'>
                        Bank balance: {props.page.balance.toString()} ETH
                    </div>
                </div>
                <div className='wrapper'>
                    <div className='child'>

                        {/*Пополнение контракта*/}
                        <div className='input-div'>
                            <label htmlFor='bankAddress' className='input-label'>
                                Пополнить с адреса:
                            </label>
                            <select id="bankAddress" onChange={onChangeBankAddress}>
                                <option value="">Выберите адрес</option>
                                {props.page.addresses}
                            </select>
                        </div>
                        <div className='input-div'>
                            <label htmlFor='bankAmount' className='input-label'>
                                Пополнить на:
                            </label>
                            <input type="text" id='bankAmount'
                                   value={props.page.bankAmount}
                                   onChange={onChangeBankAmount}
                            />
                        </div>
                        <button
                            disabled={!props.page.bankAddress || !props.page.bankAmount}
                            onClick={onBankAccountClick} className="button">Пополнить
                        </button>
                    </div>

                    {/*Депозит*/}
                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='depositAddress' className='input-label'>
                                Депозит с адреса:
                            </label>
                            <select id="depositAddress" onChange={onChangeDepositAddress}>
                                <option value="">Выберите адрес</option>
                                {props.page.addresses}
                            </select>
                        </div>
                        <div className='input-div'>
                            <label htmlFor='depositAmount' className='input-label'>
                                Введите сумма депозита:
                            </label>
                            <input type="text" id='depositAmount'
                                   value={props.page.depositAmount}
                                   onChange={onChangeDepositAmount}
                            />
                        </div>
                        <button
                            disabled={!props.page.depositAmount || !props.page.depositAddress || props.page.remainingTime === 0}
                            onClick={onDepositClick} className="button"> Депозит
                        </button>
                    </div>

                    <div className='child'>
                        Интерфейс для сбора процентов
                        PercentAmount &&
                        Вывести сколько кто на сколько и сколько получит и через сколько
                        <div className='input-div'>
                            <label htmlFor='percentAddress' className='input-label'>
                                Собрать с адреса:
                            </label>
                            <select id="percentAddress" onChange={onChangePercentAddress}>
                                <option value="">Выберите адрес</option>
                                {props.page.addresses}
                            </select>
                        </div>
                        <button
                            disabled={!props.page.percentAddress}
                            onClick={onCollectClick} className="button"> Собрать
                        </button>

                    </div>
                    <div>
                        Интерфейс для ввода времени
                        // Time
                    </div>
                    <div>
                        Интерфейс где видно процентую ставку
                        на какой адресс контракт
                        сколько времени осталось
                        и баланс кошелька
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
