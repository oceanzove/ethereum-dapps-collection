const UPDATE_SET = 'UPDATE_SET';


let initialState = {
    set: ''
}

const luckysevenReducer = (state = initialState, action) => {
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

export default luckysevenReducer;

export const updateSet = (value) => (
    {type: UPDATE_SET, newValue: value}
);

