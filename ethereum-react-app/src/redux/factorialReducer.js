const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';
const SET_ANSWER_TEXT = 'SET_ANSWER_TEXT';

let initialState = {
    inputText: '',
    answerText: ''
}

const factorialReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT_TEXT:
            return {
                ...state,
                inputText: action.newInputText
            }
        case SET_ANSWER_TEXT:
            return {
                ...state,
                answerText: action.answerText
            }
        default:
            return state;
    }
};

export const updateInputTextAC = (text) => (
    {type: UPDATE_INPUT_TEXT, newInputText: text}
);

export const setAnswerTextAC = (text) => (
    {type: SET_ANSWER_TEXT, answerText: text}
)

export default factorialReducer
