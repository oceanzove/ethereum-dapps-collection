import InsuranceContract from "../components/Contracts/InsuranceContract";

const UPDATE_NEW_RECORD_NAME = 'UPDATE_NEW_RECORD_NAME';
const UPDATE_NEW_RECORD_DATE = 'UPDATE_NEW_RECORD_DATE';
const UPDATE_NEW_RECORD_PRICE = 'UPDATE_NEW_RECORD_PRICE';
const NEW_RECORD = 'NEW_RECORD';

const UPDATE_RECORD_ID_HOSPITAL = 'UPDATE_RECORD_ID_HOSPITAL';
const SIGN_RECORD_HOSPITAL = 'SIGN_RECORD_HOSPITAL';

const UPDATE_RECORD_ID_INSURER = 'UPDATE_RECORD_ID_INSURER';
const SIGN_RECORD_INSURER = 'SIGN_RECORD_INSURER';


const insuranceContract = new InsuranceContract();
await insuranceContract.init();
const ids = await insuranceContract.getAllRecordIds();
const records = await Promise.all(ids.map(async (id) => {
    const record = await insuranceContract.getRecordById(id);
    return {
        id: parseInt(record[1]),
        name: record[2],
        date: record[3],
        price: parseInt(record[4]),
        signatureCount: record[6],
    };
}));
const filteredRecords = records.filter(record => record.signatureCount < 2);

const initialState = {
    recordName: '',
    recordDate: '',
    recordPrice: '',
    signRecordIdHospital: '',
    signRecordIdInsurer: '',
    records: filteredRecords
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_RECORD_NAME:
            return {
                ...state,
                recordName: action.newValue,
            }
        case UPDATE_NEW_RECORD_DATE:
            return {
                ...state,
                recordDate: action.newValue,
            }
        case UPDATE_NEW_RECORD_PRICE:
            return {
                ...state,
                recordPrice: action.newValue,
            }
        case NEW_RECORD:
            const record = {
                id: action.id,
                name: action.name,
                date: action.date,
                price: action.price,
            }
            return {
                ...state,
                recordName: '',
                recordDate: '',
                recordPrice: '',
                records: [...state.records, record]
            }
        case UPDATE_RECORD_ID_HOSPITAL:
            return {
                ...state,
                signRecordIdHospital: action.newValue,
            }
        case SIGN_RECORD_HOSPITAL:
            return {
                ...state,
                signRecordIdHospital: '',
            }
        case UPDATE_RECORD_ID_INSURER:
            return {
                ...state,
                signRecordIdInsurer: action.newValue,
            }
        case SIGN_RECORD_INSURER: {
            return {
                ...state,
                records: state.records.filter(record => record.id !== Number(action.id)),
                signRecordIdInsurer: ''
            }
        }
        default:
            return state;
    }
}

export default reducer;

export const updateNewRecordName = (value) => (
    {type: UPDATE_NEW_RECORD_NAME, newValue: value}
);

export const updateNewRecordDate = (value) => (
    {type: UPDATE_NEW_RECORD_DATE, newValue: value}
);

export const updateNewRecordPrice = (value) => (
    {type: UPDATE_NEW_RECORD_PRICE, newValue: value}
);

export const newRecord = (id, name, date, price) => (
    {type: NEW_RECORD, id: id, name: name, date: date, price: price}
);

export const updateRecordIdHospital = (value) => (
    {type: UPDATE_RECORD_ID_HOSPITAL, newValue: value}
);

export const signRecordHospital = () => (
    {type: SIGN_RECORD_HOSPITAL}
);

export const updateRecordIdInsurer = (value) => (
    {type: UPDATE_RECORD_ID_INSURER, newValue: value}
);

export const signRecordInsurer = (id) => (
    {type: SIGN_RECORD_INSURER, id: id}
);
