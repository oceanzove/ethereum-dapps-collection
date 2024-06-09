const UPDATE_INPUT_BINARY_TEXT = 'UPDATE_INPUT_BINARY_TEXT';
const UPDATE_INPUT_OCTAGONAL_TEXT = 'UPDATE_INPUT_OCTAGONAL_TEXT';
const SET_ANSWER_BINARY_TEXT = 'SET_ANSWER_BINARY_TEXT';
const SET_ANSWER_OCTAGONAL_TEXT = 'SET_ANSWER_OCTAGONAL_TEXT';


let initialState = {
    inputTextBinary: '',
    inputTextOctagonal: '',
    answerTextBinary: '',
    answerTextOctagonal: '',
}

const converterReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT_BINARY_TEXT:
            return {
                ...state,
                inputTextBinary: action.newInputText
            }
        case UPDATE_INPUT_OCTAGONAL_TEXT:
            return {
                ...state,
                inputTextOctagonal: action.newInputText
            }
        case SET_ANSWER_BINARY_TEXT:
            return {
                ...state,
                answerTextBinary: action.answerText
            }
        case SET_ANSWER_OCTAGONAL_TEXT:
            return {
                ...state,
                answerTextOctagonal: action.answerText
            }
        default:
            return state;
    }
}

export const updateInputBinaryTextAC = (text) => (
    {type: UPDATE_INPUT_BINARY_TEXT, newInputText: text}
);
export const updateInputOctagonalTextAC = (text) => (
    {type: UPDATE_INPUT_OCTAGONAL_TEXT, newInputText: text}
);

export const setAnswerBinaryTextAC = (text) => (
    {type: SET_ANSWER_BINARY_TEXT, answerText: text}
);
export const setAnswerOctagonalTextAC = (text) => (
    {type: SET_ANSWER_OCTAGONAL_TEXT, answerText: text}
);

export default converterReducer;
