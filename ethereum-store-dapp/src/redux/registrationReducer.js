const UPDATE_LOGIN_REGISTRATION_INPUT = 'UPDATE_LOGIN_INPUT';
const UPDATE_PASSWORD_REGISTRATION_INPUT = 'UPDATE_PASSWORD_REGISTRATION_INPUT';
const UPDATE_ADDRESS_REGISTRATION_INPUT = 'UPDATE_ADDRESS_REGISTRATION_INPUT';
const REGISTERED = 'REGISTERED';


let initialState = {
    loginReg: '',
    passwordReg: '',
    addressReg: '',
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOGIN_REGISTRATION_INPUT:
            return {
                ...state,
                loginReg: action.newText
            }
        case UPDATE_PASSWORD_REGISTRATION_INPUT:
            return {
                ...state,
                passwordReg: action.newText
            }
        case UPDATE_ADDRESS_REGISTRATION_INPUT:
            return {
                ...state,
                addressReg: action.newText
            }
        case REGISTERED:
            return {
                ...state,
                loginReg: '',
                passwordReg: '',
                addressReg: '',
            }
        default:
            return state
    }
}

export default registrationReducer;

export const updateLoginRegInputAC = (text) => (
    {type: UPDATE_LOGIN_REGISTRATION_INPUT, newText: text}
);

export const updatePasswordRegInputAc = (text) => (
    {type: UPDATE_PASSWORD_REGISTRATION_INPUT, newText: text}
);

export const updateAddressRegInputAc = (text) => (
    {type: UPDATE_ADDRESS_REGISTRATION_INPUT, newText: text}
);

export const registeredAc = () => (
    {type: REGISTERED}
)
