import './App.css';
import InsuranceContract from "./components/Contracts/InsuranceContract";

function App(props) {
    const insuranceContract = new InsuranceContract();

    /**
     * Обновляет поле RecordId
     */
    const onChangeRecordId = (e) => {
        const value = e.target.value;
        props.onUpdateNewRecordId(value);
    };

    /**
     * Обновляет поле RecordName
     */
    const onChangeRecordName = (e) => {
        const value = e.target.value;
        props.onUpdateNewRecordName(value);
    };

    /**
     * Обновляет поле RecordDate
     */
    const onChangeRecordDate = (e) => {
        const value = e.target.value;
        props.onUpdateNewRecordDate(value);
    };

    /**
     * Обновляет поле RecordPrice
     */
    const onChangeRecordPrice = (e) => {
        const value = e.target.value;
        props.onUpdateNewRecordPrice(value);
    };


    return (
        <div className="App">
            <div className="title">
                <h2>Insurance</h2>
            </div>
            <div className='container'>
                <div className='wrapper'>

                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='test' className='input-label'>
                                Новая запись
                            </label>
                            <label htmlFor='recordId' className='input-label'>
                                ID
                            </label>
                            <input type="text" id='recordId'
                                   value={props.page.recordId}
                                   onChange={onChangeRecordId}
                            />
                            <label htmlFor='recordName' className='input-label'>
                                Имя
                            </label>
                            <input type="text" id='recordName'
                                   value={props.page.recordName}
                                   onChange={onChangeRecordName}
                            />
                            <label htmlFor='recordDate' className='input-label'>
                                Дата
                            </label>
                            <input type="text" id='recordDate'
                                   value={props.page.recordDate}
                                   onChange={onChangeRecordDate}
                            />
                            <label htmlFor='recordPrice' className='input-label'>
                                Сумма
                            </label>
                            <input type="text" id='recordPrice'
                                   value={props.page.recordPrice}
                                   onChange={onChangeRecordPrice}
                            />
                        </div>
                        <button
                            disabled={
                                !props.page.recordId
                                || !props.page.recordName
                                || !props.page.recordDate
                                || !props.page.recordPrice
                            }
                            onClick={null} className="button">Записать
                        </button>
                    </div>
                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='test' className='input-label'>
                                Подтверждение от больницы
                            </label>
                            <label htmlFor='signRecordHospital' className='input-label'>
                                ID
                            </label>
                            <input type="text" id='signRecordHospital'
                                   value={null}
                                   onChange={null}
                            />
                        </div>
                        <button
                            disabled={null}
                            onClick={null} className="button">Подтвердить
                        </button>
                    </div>
                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='test' className='input-label'>
                                Подтверждение от страховой компании
                            </label>
                            <label htmlFor='signRecordHospital' className='input-label'>
                                ID
                            </label>
                            <input type="text" id='signRecordHospital'
                                   value={null}
                                   onChange={null}
                            />
                        </div>
                        <button
                            disabled={null}
                            onClick={null} className="button">Подтвердить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
