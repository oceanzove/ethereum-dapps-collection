import './App.css';
import InsuranceContract from "./components/Contracts/InsuranceContract";
import RecordItem from "./components/RecordItem/RecordItem";

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
        const name = props.page.recordName;
        const date = props.page.recordDate;
        const price = props.page.recordPrice;

        await insuranceContract.newRecord(id, name, date, price);
        props.onNewRecord(id, name, date, price);
    }

    /**
     * Подтверждает запись от больницы
     * @return {Promise<void>}
     */
    const onSubmitFromHospital = async () => {
        const id = props.page.signRecordIdHospital;
        await insuranceContract.onSubmitFromHospital(id);
        props.onSignRecordHospital();
    }

    /**
     * Подтверждает запись от страховой компании
     * @return {Promise<void>}
     */
    const onSubmitFromInsurer = async () => {
        await insuranceContract.init();
        const id = props.page.signRecordIdInsurer;

        const record = props.page.records.find(record => record.id === Number(id));
        await insuranceContract.onSubmitFromInsurer(id, record.price);
        props.onSignRecordInsurer(id);
    }


    const recordItems = props.page.records.map(
        r => <RecordItem key={r.id} id={r.id} name={r.name} date={r.date} price={r.price}/>
    )
    return (
        <div className="App">
            <div className="title">
                <h2>Insurance</h2>
            </div>
            <div className='container'>
                <div className='wrapper'>
                    {/*Создание новой записи*/}
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
                    {/*Подтверждение записи от больницы*/}
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
                            onClick={onSubmitFromHospital} className="button">Подтвердить
                        </button>
                    </div>
                    {/*Подтверждение записи от страховой компании*/}
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
                            onClick={onSubmitFromInsurer} className="button">Подтвердить
                        </button>
                    </div>
                    {/*Список записей*/}
                    <div className='child'>
                        <div className='items'>
                            {recordItems}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
