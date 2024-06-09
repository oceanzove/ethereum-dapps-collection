import TransactionContract from "../components/Contracts/TransactionContract";

const UPDATE_FROM_ADDRESS = 'UPDATE_FROM_ADDRESS';
const UPDATE_TO_ADDRESS = 'UPDATE_TO_ADDRESS';
const UPDATE_GET_BALANCE_ADDRESS = 'UPDATE_GET_BALANCE_ADDRESS';
const UPDATE_FROM_AMOUNT = 'UPDATE_FROM_AMOUNT';
const UPDATE_TO_AMOUNT = 'UPDATE_TO_AMOUNT';
const SET_BALANCE = 'SET_BALANCE';
const COIN = 'COIN';
const SEND = 'SEND';

const transactionContract = new TransactionContract();
await transactionContract.init();
const addresses = await transactionContract.accounts.map((address, index) => (
    <option key={index} value={address}>
        {address}
    </option>
));

const initialState = {
    fromAddress: '',
    toAddress: '',
    fromAmount: '',
    toAmount: '',
    getBalanceAddress: '',
    balance: '',
    addresses: addresses,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FROM_ADDRESS:
            return {
                ...state,
                fromAddress: action.newValue,
            }
        case UPDATE_TO_ADDRESS:
            return {
                ...state,
                toAddress: action.newValue,
            }
        case UPDATE_GET_BALANCE_ADDRESS:
            return {
                ...state,
                getBalanceAddress: action.newValue,
            }
        case SET_BALANCE:
            return {
                ...state,
                balance: action.newValue,
            }
        case UPDATE_FROM_AMOUNT:
            return {
                ...state,
                fromAmount: action.newValue,
            }
        case UPDATE_TO_AMOUNT:
            return {
                ...state,
                toAmount: action.newValue,
            }
        case COIN:
            return {
                ...state,
                fromAmount: '',
            }
        case SEND:
            return {
                ...state,
                toAmount: '',
            }
        default:
            return state;
    }
}

export default reducer;

export const updateFromAddress = (value) => (
    {type: UPDATE_FROM_ADDRESS, newValue: value}
);

export const updateToAddress = (value) => (
    {type: UPDATE_TO_ADDRESS, newValue: value}
);

export const updateFromAmount = (value) => (
    {type: UPDATE_FROM_AMOUNT, newValue: value}
);

export const updateToAmount = (value) => (
    {type: UPDATE_TO_AMOUNT, newValue: value}
);

export const updateGetBalanceAddress = (value) => (
    {type: UPDATE_GET_BALANCE_ADDRESS, newValue: value}
);

export const setBalance = (value) => (
    {type: SET_BALANCE, newValue: value}
);

export const coin = () => (
    {type: COIN}
);

export const send = () => (
    {type: SEND}
);
