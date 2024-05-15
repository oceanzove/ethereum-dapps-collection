import './App.css';
import SplitContract from "./components/Contracts/SplitContract";

function App(props) {
    const splitContract = new SplitContract();

    /**
     * Обновляет поле FromAddress
     */
    const onChangeFromAddress = (e) => {
        const value = e.target.value;
        props.onChangeFromAddress(value);
    };

    /**
     * Обновляет поле ToAddress1
     */
    const onChangeToAddress1 = (e) => {
        const value = e.target.value;
        props.onChangeToAddress1(value);
    };
    /**
     * Обновляет поле ToAddress1
     */

    const onChangeToAddress2 = (e) => {
        const value = e.target.value;
        props.onChangeToAddress2(value);
    };

    /**
     * Обновляет поле ToAddress1
     */
    const onChangeToAddress3 = (e) => {
        const value = e.target.value;
        props.onChangeToAddress3(value);
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

        await splitContract.coin(receiver, amount);
        props.onCoin();
    };

    /**
     * Переводит на указанный адрес.
     * @return {Promise<void>}
     */
    const onSendClick = async () => {
        const receiver1 = props.page.toAddress1;
        const receiver2 = props.page.toAddress2;
        const receiver3 = props.page.toAddress3;
        const amount = props.page.toAmount;

        await splitContract.send(receiver1, receiver2, receiver3, amount);
        props.onSend();
    };

    /**
     * Получает баланс аккаунта по указанному адресу.
     * @return {Promise<void>}
     */
    const onGetBalanceClick = async () => {
        const address = props.page.getBalanceAddress;

        const balance = await splitContract.balance(address);
        console.log(balance)
        props.onSetBalance(balance);
    }

    return (
        <div className="App">
            <div className="title">
                <h2>Split</h2>
            </div>
            <div className='container'>
                <div className='wrapper'>

                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='fromAddress' className='input-label'>
                                Пополнить с адреса:
                            </label>
                            <select id="fromAddress" onChange={onChangeFromAddress}>
                                <option value="">Выберите адрес</option>
                                {props.page.addresses}
                            </select>
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
                            <label htmlFor='toAmount' className='input-label'>
                                Перевести:
                            </label>
                            <input type="text" id="toAmount"
                                   value={props.page.toAmount}
                                   onChange={onChangeToAmount}
                            />
                        </div>
                        <div className='input-div'>
                            <label htmlFor='toAddress1' className='input-label'>
                                Перевести на адрес:
                            </label>
                            <select id="fromAddress1" onChange={onChangeToAddress1}>
                                <option value="">Выберите первый адрес</option>
                                {props.page.addresses}
                            </select>
                        </div>
                        <div className='input-div'>
                            <label htmlFor='toAddress3' className='input-label'>
                                Перевести на адрес:
                            </label>
                            <select id="fromAddress3" onChange={onChangeToAddress2}>
                                <option value="">Выберите второй адрес</option>
                                {props.page.addresses}
                            </select>
                        </div>
                        <div className='input-div'>
                            <label htmlFor='toAddress3' className='input-label'>
                                Перевести на адрес:
                            </label>
                            <select id="fromAddress3" onChange={onChangeToAddress3}>
                                <option value="">Выберите третий адрес</option>
                                {props.page.addresses}
                            </select>
                        </div>
                        <button
                            disabled={
                                !props.page.toAmount
                                || !props.page.toAddress1
                                || !props.page.toAddress2
                                || !props.page.toAddress3
                            }
                            onClick={onSendClick} className="button">Перевести
                        </button>
                    </div>

                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='getBalance' className='input-label'>
                                Получить баланс по адресу
                            </label>
                            <select id="getBalance" onChange={onChangeGetBalanceAddress}>
                                <option value="">Выберите адрес</option>
                                {props.page.addresses}
                            </select>
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
