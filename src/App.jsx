import './App.css';
import InsuranceContract from "./components/Contracts/InsuranceContract";

function App(props) {
    const insuranceContract = new InsuranceContract();

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

    /**
     * Обновляет поле SignRecordIdHospital
     */
    const onChangeSignRecordIdHospital = (e) => {
        const value = e.target.value;
        props.onUpdateRecordIdHospital(value);
    };
    /**
     * Обновляет поле SignRecordIdInsurer
     */
    const onChangeSignRecordIdInsurer = (e) => {
        const value = e.target.value;
        props.onUpdateRecordIdInsurer(value);
    };

    /**
     * Создает новую запись для Hospital
     * @return {Promise<void>}
     */
    const onNewRecordClick = async () => {
        const id = Number(await insuranceContract.getLastId()) + 1;
        console.log(id)
        const name = props.page.recordName;
        const date = props.page.recordDate;
        const price = props.page.recordPrice;

        await insuranceContract.newRecord(id, name, date, price);
        props.onNewRecord();
    }
    /**
     * Устанавливает адреса необходимые для работы контракта
     * @return {Promise<void>}
     */
    const onSetInsurerAccount = async () => {
        await insuranceContract.setInsurerAddress();
        await insuranceContract.setHospitalAddress();
    }




    return (
        <div className="App">
            <div className="title">
                <h2>Insurance</h2>
            </div>
            <div className='container'>
                <button
                    onClick={onSetInsurerAccount} className="button">Установить аккаунты
                </button>
                <div className='wrapper'>
                    <div className='child'>
                        <div className='input-div'>
                            <label htmlFor='test' className='input-label'>
                                Новая запись
                            </label>
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
                                !props.page.recordName
                                || !props.page.recordDate
                                || !props.page.recordPrice
                            }
                            onClick={onNewRecordClick} className="button">Записать
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
                                   value={props.page.signRecordIdHospital}
                                   onChange={onChangeSignRecordIdHospital}
                            />
                        </div>
                        <button
                            disabled={!props.page.signRecordIdHospital}
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
                                   value={props.page.signRecordIdInsurer}
                                   onChange={onChangeSignRecordIdInsurer}
                            />
                        </div>
                        <button
                            disabled={!props.page.signRecordIdInsurer}
                            onClick={null} className="button">Подтвердить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
