
const UPDATE_NEW_RECORD_NAME = 'UPDATE_NEW_RECORD_NAME';
const UPDATE_NEW_RECORD_DATE = 'UPDATE_NEW_RECORD_DATE';
const UPDATE_NEW_RECORD_PRICE = 'UPDATE_NEW_RECORD_PRICE';
const NEW_RECORD = 'NEW_RECORD';

const UPDATE_RECORD_ID_HOSPITAL = 'UPDATE_RECORD_ID_HOSPITAL';
const SIGN_RECORD_HOSPITAL = 'SIGN_RECORD_HOSPITAL';

const UPDATE_RECORD_ID_INSURER = 'UPDATE_RECORD_ID_INSURER';
const SIGN_RECORD_INSURER = 'SIGN_RECORD_INSURER';

const initialState = {
    recordName: '',
    recordDate: '',
    recordPrice: '',
    signRecordIdHospital: '',
    signRecordIdInsurer: '',
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
            return {
                ...state,
                recordId: '',
                recordName: '',
                recordDate: '',
                recordPrice: '',
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

export const newRecord = () => (
    {type: NEW_RECORD}
);

export const updateRecordIdHospital = (value) => (
    {type: UPDATE_RECORD_ID_HOSPITAL, newValue: value}
);

export const signRecordHospital = (value) => (
    {type: SIGN_RECORD_HOSPITAL, newValue: value}
);

export const updateRecordIdInsurer = (value) => (
    {type: UPDATE_RECORD_ID_INSURER, newValue: value}
);

export const signRecordInsurer = (value) => (
    {type: SIGN_RECORD_INSURER, newValue: value}
);
