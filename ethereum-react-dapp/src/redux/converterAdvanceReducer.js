const UPDATE_INPUT_DECIMAL_TO_HEX = 'UPDATE_INPUT_DECIMAL_TO_HEX';
const UPDATE_INPUT_DECIMAL_TO_BINARY = 'UPDATE_INPUT_DECIMAL_TO_BINARY';
const SET_ANSWER_HEX_FROM_DECIMAL = 'SET_ANSWER_HEX_FROM_DECIMAL';
const SET_ANSWER_BINARY_FROM_DECIMAL = 'SET_ANSWER_BINARY_FROM_DECIMAL';

let initialState = {
    inputDecimalToHex: '',
    inputDecimalToBinary: '',
    answerHexFromDecimal: '',
    answerBinaryFromDecimal: '',
}

const converterAdvanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT_DECIMAL_TO_HEX:
            return {
                ...state,
                inputDecimalToHex: action.newInputText
            }
        case UPDATE_INPUT_DECIMAL_TO_BINARY:
            return {
                ...state,
                inputDecimalToBinary: action.newInputText
            }
        case SET_ANSWER_HEX_FROM_DECIMAL:
            return {
                ...state,
                answerHexFromDecimal: action.answerText
            }
        case SET_ANSWER_BINARY_FROM_DECIMAL:
            return {
                ...state,
                answerBinaryFromDecimal: action.answerText
            }
        default:
            return state;
    }
}

export const updateInputDecimalToHexAC = (text) => (
    {type: UPDATE_INPUT_DECIMAL_TO_HEX, newInputText: text}
)

export const updateInputDecimalToBinaryAC = (text) => (
    {type: UPDATE_INPUT_DECIMAL_TO_BINARY, newInputText: text}
)

export const setAnswerBinaryFromDecimalAC = (text) => (
    {type: SET_ANSWER_BINARY_FROM_DECIMAL, answerText: text}
)

export const setAnswerHexFromDecimalAC = (text) =>(
    {type: SET_ANSWER_HEX_FROM_DECIMAL, answerText: text}
)

export default converterAdvanceReducer;