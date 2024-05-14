import './App.css';
import TransactionContract from "./components/Contracts/TransactionContract";

function App(props) {
    const transactionContract = new TransactionContract();

    /**
     * Обновляет поле FromAddress
     */
    const onChangeFromAddress = (e) => {
        const value = e.target.value;
        props.onChangeFromAddress(value);
    };

    /**
     * Обновляет поле ToAddress
     */
    const onChangeToAddress = (e) => {
        const value = e.target.value;
        props.onChangeToAddress(value);
    };

    /**
     * Обновляет поле FromAmount
     */
    const onChangeFromAmount = (e) => {
        const value = e.target.value;
        props.onChangeFromAmount(value);
    };

    /**
     * Обновляет поле ToAmount
     */
    const onChangeToAmount = (e) => {
        const value = e.target.value;
        props.onChangeToAmount(value);
    }

    /**
     * Обновляет поле GetBalanceAmount
     */
    const onChangeGetBalanceAddress = (e) => {
        const value = e.target.value;
        props.onChangeGetBalanceAddress(value);
    };

    /**
     * Пополняет счет для перевода.
     * @return {Promise<void>}
     */
    const onCoinClick = async () => {
        const receiver = props.page.fromAddress;
        const amount = props.page.fromAmount;

        await transactionContract.coin(receiver, amount);
        props.onCoin();
    };

    /**
     * Переводит на указанный адрес.
     * @return {Promise<void>}
     */
    const onSendClick = async () => {
        const receiver = props.page.toAddress;
        const amount = props.page.toAmount;

        await transactionContract.send(receiver, amount);
        props.onSend();
    };

    /**
     * Получает баланс аккаунта по указанному адресу.
     * @return {Promise<void>}
     */
    const onGetBalanceClick = async () => {
        const address = props.page.getBalanceAddress;

        const balance = await transactionContract.balance(address);
        props.onSetBalance(balance);
    }

    return (
        <div className="App">
            <div className="title">
                <h2>Transaction</h2>
            </div>
            <div className='container'>
                <div className='wrapper'>

                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='fromAddress' className='input-label'>
                                Пополнить с адреса:
                            </label>
                            <input type="text" id="fromAddress"
                                   value={props.page.fromAddress}
                                   onChange={onChangeFromAddress}
                            />
                        </div>
                        <div className='input-div'>
                            <label htmlFor='fromAmount' className='input-label'>
                                Пополнить на:
                            </label>
                            <input type="text" id='fromAmount'
                                   value={props.page.fromAmount}
                                   onChange={onChangeFromAmount}
                            />
                        </div>
                        <button
                            disabled={!props.page.fromAddress || !props.page.fromAmount}
                            onClick={onCoinClick} className="button">Пополнить
                        </button>
                    </div>
                     {/*Перевод*/}
                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='toAddress' className='input-label'>
                                Перевести на адрес:
                            </label>
                            <input type="text" id="toAddress"
                                   value={props.page.toAddress}
                                   onChange={onChangeToAddress}
                            />
                        </div>
                        <div className='input-div'>
                            <label htmlFor='toAmount' className='input-label'>
                                Перевести:
                            </label>
                            <input type="text" id="toAmount"
                                   value={props.page.toAmount}
                                   onChange={onChangeToAmount}
                            />
                        </div>
                        <button
                            disabled={!props.page.toAddress || !props.page.toAmount}
                            onClick={onSendClick} className="button">Перевести
                        </button>
                    </div>

                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='getBalance' className='input-label'>
                                Получить баланс по адресу
                            </label>
                            <input type="text" id='getBalance'
                                   value={props.page.getBalanceAddress}
                                   onChange={onChangeGetBalanceAddress}
                            />
                        </div>
                        <button
                            disabled={!props.page.getBalanceAddress}
                            onClick={onGetBalanceClick} className="button">Получить
                        </button>
                        <div className='input-div'>
                            <label htmlFor='balance' className='input-label'>Баланс</label>
                            <output id='balance'>{props.page.balance.toString()}</output>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
