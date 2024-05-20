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
     * Пополняет счет контракта
     * @return {Promise<void>}
     */
    const onBankAccount = async () => {
        const address = props.page.bankAddress;
        const amount = props.page.bankAmount;

        await bankDepositContract.bankAccount(address, amount);
        props.onBank();

        const balance = await bankDepositContract.getContractBalance();
        const normalizedBalance = Number(balance) / 1000000000000000000;
        props.onSetBalance(normalizedBalance);
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
                        Интерфейс для подключения кошелька и перевода денег на контракт
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
                            onClick={onBankAccount} className="button">Пополнить
                        </button>
                    </div>
                    <div>
                        Интерфейс для депозита в котором надо ждать 3 минуты
                        // DepositTime && DepositAmount
                    </div>
                    <div>
                        Интерфейс для сбора процентов
                        PercentAmount &&
                    </div>
                    <div>
                        Интерфейс для вывода всех денег с контракта
                        // TransferAmount
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
                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='test' className='input-label'>
                                Test
                            </label>
                            <input type="text" id='test'
                                   value={props.page.test}
                                   onChange={null}
                            />
                        </div>
                        <button
                            disabled={!props.page.test}
                            onClick={null} className="button">Test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
