const UPDATE_LOGIN_INPUT = 'UPDATE_LOGIN_INPUT';
const UPDATE_PASSWORD_INPUT = 'UPDATE_PASSWORD_INPUT';
const UPDATE_ADDRESS_INPUT = 'UPDATE_ADDRESS_INPUT';
const AUTHORIZED = 'AUTHORIZED';

let initialState = {
    login: '',
    password: '',
    address: '',
}

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
      case UPDATE_LOGIN_INPUT:
          return {
              ...state,
              login: action.newText
          }
      case UPDATE_PASSWORD_INPUT:
          return {
              ...state,
              password: action.newText
          }
      case UPDATE_ADDRESS_INPUT:
          return {
              ...state,
              address: action.newText
          }
      case AUTHORIZED:
          return {
              ...state,
              login: '',
              password: '',
              address: '',
          }
      default:
          return state
  }
}

export default authorizationReducer;

export const updateLoginInputAC = (text) => (
    {type: UPDATE_LOGIN_INPUT, newText: text}
);

export const updatePasswordInputAc = (text) => (
    {type: UPDATE_PASSWORD_INPUT, newText: text}
);

export const updateAddressInputAc = (text) => (
    {type: UPDATE_ADDRESS_INPUT, newText: text}
);

export const authorizedAc = () => (
    {type: AUTHORIZED}
)