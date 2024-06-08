import MyCoinContract from "../components/Contracts/MyCoinContract";

const UPDATE_BALANCE_ADDRESS= 'UPDATE_BALANCE_ADDRESS';
const BALANCE = 'BALANCE';

const UPDATE_TO_ADDRESS = 'UPDATE_TO_ADDRESS';
const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
const TRANSFER = 'TRANSFER';

const myCoinContract = new MyCoinContract();
await myCoinContract.init();
const addresses = await myCoinContract.accounts.map((address, index) => (
    <option key={index} value={address}>
        {address}
    </option>
));

const initialState = {
    addresses: addresses,
    balanceAddress: '',
    balanceOfAddress: '',
    toAddress: '',
    amount: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BALANCE_ADDRESS:
            return {
                ...state,
                balanceAddress: action.newValue,
            }
        case BALANCE:
            return {
                ...state,
                balanceOfAddress: action.newValue,
            }
        case UPDATE_TO_ADDRESS:
            return {
                ...state,
                toAddress: action.newValue,
            }
        case UPDATE_AMOUNT:
            return {
                ...state,
                amount: action.newValue,
            }
        case TRANSFER:
            return {
                ...state,
                amount: '',
            }
        default:
            return state;
    }
}

export default reducer;

export const updateBalanceAddress = (value) => (
    {type: UPDATE_BALANCE_ADDRESS, newValue: value}
);

export const balance = (value) => (
    {type: BALANCE, newValue: value}
);

export const updateToAddress = (value) => (
    {type: UPDATE_TO_ADDRESS, newValue: value}
);

export const updateAmount = (value) => (
    {type: UPDATE_AMOUNT, newValue: value}
);

export const transfer = () => (
    {type: TRANSFER}
);

