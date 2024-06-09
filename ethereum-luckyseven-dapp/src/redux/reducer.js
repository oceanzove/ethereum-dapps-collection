const UPDATE_SET = 'UPDATE_SET';


let initialState = {
    set: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SET:
            return {
                ...state,
                set: action.newValue
            }
        default:
            return state
    }
}

export default reducer;

export const updateSet = (value) => (
    {type: UPDATE_SET, newValue: value}
);

