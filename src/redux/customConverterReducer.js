const SET_CONVERT_FROM = 'SET_CONVERT_FROM';
const SET_CONVERT_TO = ' SET_CONVERT_TO';
const UPDATE_INPUT_NUMBER = 'UPDATE_INPUT_NUMBER';
const SET_ANSWER_NUMBER = 'SET_ANSWER_NUMBER'

let initialSate = {
    optionsConvertFrom: ['Из двоичной', 'Из восьмеричной', 'Из десятичной', 'Из шестнадцатеричной'],
    optionsConvertTo: ['В двоичную', 'В восьмиричную', 'В десятчиную', 'В шестнадцатеричную'],
    convertFrom: '',
    convertTo: '',
    inputNumber: '',
    answerNumber: ''
}

const customConverterReducer = (state = initialSate, action) => {
  switch (action.type) {
      case SET_CONVERT_FROM:
          return {
              ...state,
              convertFrom: action.convertFrom
          }
      case SET_CONVERT_TO:
          return {
              ...state,
              convertTo: action.convertTo
          }
      case UPDATE_INPUT_NUMBER:
          return {
              ...state,
              inputNumber: action.inputNumber
          }
      case SET_ANSWER_NUMBER:
          return {
              ...state,
              answerNumber: action.answerNumber
          }
      default:
            return state;
  }
}

export default customConverterReducer;

export const setConvertToAC = (text) => (
    {type: SET_CONVERT_TO, convertTo: text}
)
export const setConvertFromAC = (text) => (
    {type: SET_CONVERT_FROM, convertFrom: text}
)

export const updateInputNumberAC = (text) => (
    {type: UPDATE_INPUT_NUMBER, inputNumber: text}
)

export const setAnswerNumberAC = (text) => (
    {type: SET_ANSWER_NUMBER, answerNumber: text}
)