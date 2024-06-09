const UPDATE_BIT_NUMBER1 = 'UPDATE_BIT_NUMBER1';
const UPDATE_BIT_NUMBER2 = 'UPDATE_BIT_NUMBER2';
const SET_BIT_OPERATOR = 'SET_BIT_OPERATOR';
const SET_BIT_RESULT = 'SET_BIT_RESULT';
const BIT_CLEAR = 'BIT_CLEAR';

let initialState = {
    numberBit1: '',
    numberBit2: '',
    operatorBit: '',
    resultBit: '',
}

const bitwiseCalculatorReducer = (state = initialState, action) => {
  switch (action.type) {
      case UPDATE_BIT_NUMBER1:
          return {
              ...state,
              numberBit1: action.newBitNumber1
          };
      case UPDATE_BIT_NUMBER2:
          return {
              ...state,
              numberBit2: action.newBitNumber2
          };
      case SET_BIT_OPERATOR:
          return {
              ...state,
              operatorBit: action.newBitOperator
          };
      case SET_BIT_RESULT:
          return {
              ...state,
              numberBit1: '',
              numberBit2: '',
              operatorBit: '',
              resultBit: action.newBitResult
          }
      case BIT_CLEAR:
          return {
              numberBit1: '',
              numberBit2: '',
              operatorBit: '',
              resultBit: '',
          }
      default:
          return state
  }
}

export default bitwiseCalculatorReducer;

export const updateBitNumber1AC = (number) => (
    {type: UPDATE_BIT_NUMBER1, newBitNumber1: number}
);
export const updateBitNumber2AC = (number) => (
    {type: UPDATE_BIT_NUMBER2, newBitNumber2: number}
);

export const setBitOperatorAC = (operator) => (
    {type: SET_BIT_OPERATOR, newBitOperator: operator}
);

export const setBitResultAC = (result) => (
    {type: SET_BIT_RESULT, newBitResult: result}
);

export const clearBitAc = () => (
    {type: BIT_CLEAR}
)
