const UPDATE_NAME_USER = 'UPDATE_NAME_USER';
const UPDATE_NUMBER_USER = 'UPDATE_NUMBER_USER';
const UPDATE_ADDRESS_USER = 'UPDATE_ADDRESS_USER';
const UPDATE_NAME_SEARCH_USER = 'UPDATE_NAME_SEARCH_USER';
const SET_USER = 'SET_USER';
const GET_USER = 'GET_USER';

let initialState = {
    nameUser: '',
    numberUser: '',
    addressUser: '',
    nameSearchUser: '',
    user: [
        {number: '', userAddress: ''}
    ]
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NAME_USER:
            return {
                ...state,
                nameUser: action.newText
            }
        case UPDATE_NUMBER_USER:
            return {
                ...state,
                numberUser: action.newText
            }
        case UPDATE_ADDRESS_USER:
            return {
                ...state,
                addressUser: action.newText
            }
        case UPDATE_NAME_SEARCH_USER:
            return {
                ...state,
                nameSearchUser: action.newText
            }
        case SET_USER:
            return {
                ...state,
                nameUser: '',
                numberUser: '',
                addressUser: '',
            }
        case GET_USER:
            return {
                ...state,
                user: [action.newUser]
            }
        default:
            return state;
    }
};

export default noteReducer


export const updateNameUserAC = (text) => (
    {type: UPDATE_NAME_USER, newText: text}
);

export const updateNumberUserAC = (text) => (
    {type: UPDATE_NUMBER_USER, newText: text}
)

export const updateAddressUserAC = (text) => (
    {type: UPDATE_ADDRESS_USER, newText: text}
)
export const updateNameSearchUserAC = (text) => (
    {type: UPDATE_NAME_SEARCH_USER, newText: text}
)

export const setUserAC = () => (
    {type: SET_USER}
)

export const getUserAC = (user) => (
    {type: GET_USER, newUser: user}
)

