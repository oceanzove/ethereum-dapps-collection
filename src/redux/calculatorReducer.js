const UPDATE_NUMBER1 = 'UPDATE_NUMBER1';
const UPDATE_NUMBER2 = 'UPDATE_NUMBER2';
const SET_OPERATOR = 'SET_OPERATOR';

let initialState = {
    number1: '',
    number2: '',
    operator: '',
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
