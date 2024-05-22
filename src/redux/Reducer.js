
const UPDATE_NEW_RECORD_ID = 'UPDATE_NEW_RECORD_ID';
const UPDATE_NEW_RECORD_NAME = 'UPDATE_NEW_RECORD_NAME';
const UPDATE_NEW_RECORD_DATE = 'UPDATE_NEW_RECORD_DATE';
const UPDATE_NEW_RECORD_PRICE = 'UPDATE_NEW_RECORD_PRICE';
const NEW_RECORD = 'NEW_RECORD';

const initialState = {
    recordId: '',
    recordName: '',
    recordDate: '',
    recordPrice: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_RECORD_ID:
            return {
                ...state,
                recordId: action.newValue,
            }
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
        default:
            return state;
    }
}

export default reducer;

export const updateNewRecordId = (value) => (
    {type: UPDATE_NEW_RECORD_ID, newValue: value}
);

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
