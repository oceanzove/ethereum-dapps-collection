import './App.css';
import TransactionContract from "./components/Contracts/TransactionContract";

function App(props) {
    const transactionContract = new TransactionContract();

  const onChangeFromAddress = (e) => {
    const value = e.target.value;
    props.onChangeFromAddress(value);
  };

  const onChangeToAddress = (e) => {
      const value = e.target.value;
      props.onChangeToAddress(value);
  }

    const onChangeGetBalanceAddress = (e) => {
        const value = e.target.value;
        props.onChangeGetBalanceAddress(value);
    }

    const onCoinClick = async () => {
      const receiver = props.page.fromAddress;
      const amount = props.page.fromAmount;

      await transactionContract.coin(receiver, amount);
      props.onCoin();
    }

    const onSendClick = async () => {
      const receiver = props.page.toAddress;
      const amount = props.page.toAmount
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
                        <label htmlFor='from' className='input-label'>
                            Пополнить с адреса
                        </label>
                        <input type="text" id='from'
                               value={props.page.fromAddress}
                               onChange={onChangeFromAddress}
                        />
                    </div>
                    <button
                        disabled={!props.page.fromAddress}
                        onClick={null} className="button">Пополнить
                    </button>
                </div>
                <div className='child'>
                    <div className='input-div'>
                        <label htmlFor='to' className='input-label'>
                            Перевести на адрес
                        </label>
                        <input type="text" id='to'
                               value={props.page.toAddress}
                               onChange={onChangeToAddress}
                        />
                    </div>
                    <button
                        disabled={!props.page.toAddress}
                        onClick={null} className="button">Перевести
                    </button>
                </div>

                <div className='child'>
                    <div className='input-div'>
                        <label htmlFor='getBalance' className='input-label'>
                            Получить баланс по адресу
                        </label>
                        <input type="number" id='getBalance'
                               value={props.page.getBalanceAddress}
                               onChange={onChangeGetBalanceAddress}
                        />
                    </div>
                    <button
                        disabled={!props.page.getBalanceAddress}
                        onClick={null} className="button">Получить
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
