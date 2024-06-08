import './App.css';
import MyCoinContract from "./components/Contracts/MyCoinContract";

function App(props) {
    const myCoinContract = new MyCoinContract();
    /**
     * Обновляет поле BalanceAddress
     */
    const onChangeDonatAddress = (e) => {
        const value = e.target.value;
        props.onUpdateBalanceAddress(value);
    };

    /**
     * Обновляет поле ToAddress
     */
    const onChangeToAddress = (e) => {
        const value = e.target.value;
        props.onUpdateToAddress(value);
    };

    /**
     * Обновляет поле Amount
     */
    const onChangeAmount = (e) => {
        const value = e.target.value;
        props.onUpdateAmount(value);
    };

    /**
     * Получаем баланс токенов по указанному адресу
     * @return {Promise<void>}
     */
    const onBalanceOf = async () => {
        const address = props.page.balanceAddress;

        const balance = await myCoinContract.balanceOf(address);
        props.onSetBalance(balance);

    };

    /**
     * Перевести коины на адрес
     * @return {Promise<void>}
     */
    const onTransferClick = async () => {
        const address = props.page.toAddress;
        const amount = props.page.amount;

        await myCoinContract.transfer(address, amount);
        props.onTransfer();
    };
  return (
      <div className="App">
        <div className="title">
          <h2>MyCoin</h2>
        </div>
        <div className='container'>
          <div className='wrapper'>

              <div className='child'>
                  <div className='input-div'>
                      <label htmlFor='fromAddress' className='input-label'>
                          Перевести коины на:
                      </label>
                      <select id="fromAddress" onChange={onChangeToAddress}>
                          <option value="">Выберите адрес</option>
                          {props.page.addresses}
                      </select>
                  </div>
                  <div className='input-div'>
                      <label htmlFor='fromAmount' className='input-label'>
                          Перевести:
                      </label>
                      <input type="number" id='fromAmount'
                             value={props.page.amount}
                             onChange={onChangeAmount}
                      />
                  </div>
                  <button
                      disabled={!props.page.amount || !props.page.toAddress}
                      onClick={onTransferClick} className="button">Перевести
                  </button>
              </div>
              <div className='child'>
                  <div className='input-div'>
                      <label htmlFor='fromAddress' className='input-label'>
                          Узнать баланс адреса:
                      </label>
                      <select id="fromAddress" onChange={onChangeDonatAddress}>
                          <option value="">Выберите адрес</option>
                          {props.page.addresses}
                      </select>
                  </div>
                  <button
                      disabled={!props.page.balanceAddress}
                      onClick={onBalanceOf} className="button">Узнать баланс
                  </button>
                  <div className='input-div'>
                      <label htmlFor='balanceOF' className='input-label'>Баланс:</label>
                      <output id='balanceOF'>{props.page.balanceOfAddress.toString()}</output>
                  </div>
              </div>
          </div>
        </div>
      </div>
  );
}

export default App;
