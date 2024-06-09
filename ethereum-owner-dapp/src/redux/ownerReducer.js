const UPDATE_SET_USER_NAME = 'UPDATE_SET_USER_NAME';
const UPDATE_SET_USER_NUMBER = 'UPDATE_SET_USER_NUMBER';
const UPDATE_SET_USER_AGE = 'UPDATE_SET_USER_AGE';
const UPDATE_SET_USER_ADDRESS = 'UPDATE_SET_USER_ADDRESS';
const SET_USER = 'SET_USER'

const UPDATE_GET_USER_NAME = 'UPDATE_GET_USER_NAME';
const UPDATE_GET_USER_ADDRESS = 'UPDATE_GET_USER_ADDRESS';
const GET_USER = 'GET_USER'

const initialState = {
    setUserName: '',
    setUserNumber: '',
    setUserAge: '',
    setUserAddress: '',
    getUserName: '',
    getUserNumber: '',
    getUserAge: '',
    getUserAddress: '',
}

const ownerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SET_USER_NAME:
            return {
                ...state,
                setUserName: action.newValue
            }
        case UPDATE_SET_USER_NUMBER:
            return {
                ...state,
                setUserNumber: action.newValue
            }
        case UPDATE_SET_USER_AGE:
            return {
                ...state,
                setUserAge: action.newValue
            }
        case UPDATE_SET_USER_ADDRESS:
            return {
                ...state,
                setUserAddress: action.newValue
            }
        case SET_USER:
            return {
                ...state,
                setUserName: '',
                setUserNumber: '',
                setUserAge: '',
                setUserAddress: '',
            }
        case UPDATE_GET_USER_NAME:
            return {
                ...state,
                getUserName: action.newValue
            }
        case UPDATE_GET_USER_ADDRESS:
            return {
                ...state,
                getUserAddress: action.newValue
            }
        case GET_USER:
            console.log(action.userNumber);
            return {
                ...state,
                getUserName: '',
                getUserAddress: '',
                getUserNumber: action.userNumber,
                getUserAge: action.userAge,
            }
        default:
            return state;
    }
}

export default ownerReducer;

export const updateSetUserName = (value) => (
    {type: UPDATE_SET_USER_NAME, newValue: value}
);

export const updateSetUserNumber = (value) => (
    {type: UPDATE_SET_USER_NUMBER, newValue: value}
);

export const updateSetUserAge = (value) => (
    {type: UPDATE_SET_USER_AGE, newValue: value}
);

export const updateSetUserAddress = (value) => (
    {type: UPDATE_SET_USER_ADDRESS, newValue: value}
);

export const setUser = () => (
    {type: SET_USER}
);

export const updateGetUserName = (value) => (
    {type: UPDATE_GET_USER_NAME, newValue: value}
);

export const updateGetUserAddress = (value) => (
    {type: UPDATE_GET_USER_ADDRESS, newValue: value}
);

export const getUser = (userNumber, userAge) => (
    {type: GET_USER, userNumber: userNumber, userAge: userAge}
);

