const UPDATE_NAME_NOTE = 'UPDATE_NAME_NOTE';
const UPDATE_NUMBER_NOTE = 'UPDATE_NUMBER_NOTE';
const UPDATE_ADDRESS_NOTE = 'UPDATE_ADDRESS_NOTE';
const SET_NOTE = 'SET_NOTE';
const GET_NOTE = 'GET_NOTE';

let initialState = {
    nameNote: '',
    numberNote: '',
    addressNote: '',
    note: [
        {name: '', number: '', noteAddress: ''}
    ]
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NAME_NOTE:
            return {
                ...state,
                nameNote: action.newText
            }
        case UPDATE_NUMBER_NOTE:
            return {
                ...state,
                numberNote: action.newText
            }
        case UPDATE_ADDRESS_NOTE:
            return {
                ...state,
                addressNote: action.newText
            }
        case SET_NOTE:
            return {
                ...state,
                nameNote: '',
                numberNote: '',
                addressNote: '',
            }
        case GET_NOTE:
            console.log(action.newNote);
            return {
                ...state,
                note: [action.newNote]
            }
        default:
            return state;
    }
};

export default noteReducer


export const updateNameNoteAC = (text) => (
    {type: UPDATE_NAME_NOTE, newText: text}
);

export const updateNumberNoteAC = (text) => (
    {type: UPDATE_NUMBER_NOTE, newText: text}
)

export const updateAddressNoteAC = (text) => (
    {type: UPDATE_ADDRESS_NOTE, newText: text}
)

export const setNoteAC = () => (
    {type: SET_NOTE}
)

export const getNoteAC = (note) => (
    {type: GET_NOTE, newNote: note}
)

