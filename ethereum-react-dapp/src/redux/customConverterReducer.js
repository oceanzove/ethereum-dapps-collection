const SET_CONVERT_FROM = 'SET_CONVERT_FROM';
const SET_CONVERT_TO = ' SET_CONVERT_TO';
const UPDATE_INPUT_NUMBER = 'UPDATE_INPUT_NUMBER';
const SET_ANSWER_NUMBER = 'SET_ANSWER_NUMBER'

let initialSate = {
    optionsConvertFrom: ['Из двоичной', 'Из восьмеричной', 'Из десятичной', 'Из шестнадцатеричной'],
    optionsConvertTo: ['В двоичную', 'В восьмиричную', 'В десятчиную', 'В шестнадцатеричную'],
    convertFrom: '2',
    convertTo: '2',
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

export const setConvertToAC = (number) => (
    {type: SET_CONVERT_TO, convertTo: number}
)
export const setConvertFromAC = (number) => (
    {type: SET_CONVERT_FROM, convertFrom: number}
)

export const updateInputNumberAC = (number) => (
    {type: UPDATE_INPUT_NUMBER, inputNumber: number}
)

export const setAnswerNumberAC = (number) => (
    {type: SET_ANSWER_NUMBER, answerNumber: number}
)
