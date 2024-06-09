const UPDATE_TICKET = 'UPDATE_TICKET';
const UPDATE_RESULT = 'UPDATE_RESULT';
const BOUGHT_TICKET = 'BOUGHT_TICKET';

let initialState = {
    ticket: '',
    result: '',
}

const  reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TICKET:
            return {
                ...state,
                ticket: action.newValue
            }
        case UPDATE_RESULT:
            return {
                ...state,
                result: action.newValue
            }
        case BOUGHT_TICKET:
            return {
                ...state,
                ticket: ''
            }
        default:
            return state
    }
}

export default reducer;

export const updateTicket = (value) => (
    {type: UPDATE_TICKET, newValue: value}
);
export const updateResult = (value) => (
    {type: UPDATE_RESULT, newValue: value}
);

export const boughtTicket = () => (
    {type: BOUGHT_TICKET}
)

