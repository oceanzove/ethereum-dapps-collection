import './App.css';
import InsuranceContract from "./components/Contracts/InsuranceContract";

function App(props) {
    const insuranceContract = new InsuranceContract();

  return (
      <div className="App">
        <div className="title">
          <h2>Title ( Test )</h2>
        </div>
        <div className='container'>
            <div className='wrapper'>

                <div className='child'>
                    <div className='input-div'>
                        <label htmlFor='test' className='input-label'>
                            NewRecord
                            нужно ввести: id name date price
                        </label>
                    </div>
                </div>
                <div className='child'>
                    <div className='input-div'>
                        <label htmlFor='test' className='input-label'>
                            SignRecord
                            нужно ввести id записи для подтвержднения от больницы
                        </label>
                    </div>
                </div>
                <div className='child'>
                    <div className='input-div'>
                        <label htmlFor='test' className='input-label'>
                            SignRecord
                            нужно ввести id записи для подтвержднения от страховой компании
                            и ввести нужно количество денег
                        </label>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

export default App;
