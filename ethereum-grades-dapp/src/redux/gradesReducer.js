const UPDATE_SET_TITLE = 'UPDATE_SET_TITLE';
const UPDATE_SET_GRADE = 'UPDATE_SET_GRADE';
const SET_GRADE = 'SET_GRADE';

const UPDATE_GET_TITLE = 'UPDATE_GET_TITLE';
const GET_RESULTS = 'GET_RESULTS';

const initialState = {
    setTitle: '',
    setGrade: '',
    getTitle: '',
    result: [{amount: '', average: '', sum: ''}],
}

const gradesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SET_TITLE:
            return {
                ...state,
                setTitle: action.newValue
            }
        case UPDATE_SET_GRADE:
            return {
                ...state,
                setGrade: action.newValue
            }
        case SET_GRADE:
            return {
                ...state,
                setTitle: '',
                setGrade: '',
            }
        case UPDATE_GET_TITLE:
            return {
                ...state,
                getTitle: action.newValue
            }
        case GET_RESULTS:
            const result = {
                amount: action.amount,
                average: action.average,
                sum: action.sum
            }
            return {
                ...state,
                result: [result]
            }
        default:
            return state;
    }
}

export default gradesReducer;

export const updateSetTitle = (value) => (
    {type: UPDATE_SET_TITLE, newValue: value}
);

export const updateSetGrade = (value) => (
    {type: UPDATE_SET_GRADE, newValue: value}
);

export const setGrade = () => (
    {type: SET_GRADE}
);

export const updateGetTitle = (value) => (
    {type: UPDATE_GET_TITLE, newValue: value}
);

export const getResults = (amount, average, sum) => (
    {type: GET_RESULTS, amount: amount, average: average, sum: sum}
);




