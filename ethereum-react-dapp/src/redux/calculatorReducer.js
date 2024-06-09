const UPDATE_NUMBER1 = 'UPDATE_NUMBER1';
const UPDATE_NUMBER2 = 'UPDATE_NUMBER2';
const SET_OPERATOR = 'SET_OPERATOR';
const SET_RESULT = 'SET_RESULT';
const CLEAR = 'CLEAR';

let initialState = {
    number1: '',
    number2: '',
    operator: '',
    result: '',
}

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
      case UPDATE_NUMBER1:
          return {
              ...state,
              number1: action.newNumber1
          };
      case UPDATE_NUMBER2:
          return {
              ...state,
              number2: action.newNumber2
          };
      case SET_OPERATOR:
          return {
              ...state,
              operator: action.newOperator
          };
      case SET_RESULT:
          return {
              ...state,
              number1: '',
              number2: '',
              operator: '',
              result: action.newResult
          }
      case CLEAR:
          return {
              number1: '',
              number2: '',
              operator: '',
              result: '',
          }
      default:
          return state
  }
}

export default calculatorReducer;

export const updateNumber1AC = (number) => (
    {type: UPDATE_NUMBER1, newNumber1: number}
);
export const updateNumber2AC = (number) => (
    {type: UPDATE_NUMBER2, newNumber2: number}
);

export const setOperatorAC = (operator) => (
    {type: SET_OPERATOR, newOperator: operator}
);

export const setResultAC = (result) => (
    {type: SET_RESULT, newResult: result}
);

export const clearAc = () => (
    {type: CLEAR}
)
