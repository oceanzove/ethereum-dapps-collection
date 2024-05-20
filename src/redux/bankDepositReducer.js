import BankDepositContract from "../components/Contracts/BankDepositContract";

const UPDATE_BANK_ADDRESS = 'UPDATE_BANK_ADDRESS';
const UPDATE_BANK_AMOUNT = 'UPDATE_BANK_AMOUNT';
const BANK = 'BANK';

const UPDATE_DEPOSIT_ADDRESS = 'UPDATE_DEPOSIT_ADDRESS';
const UPDATE_DEPOSIT_AMOUNT = 'UPDATE_DEPOSIT_AMOUNT';
const DEPOSIT = 'DEPOSIT';

const PERCENT_AMOUNT = 'PERCENT_AMOUNT';
const PERCENT = 'PERCENT';

const TRANSFER_AMOUNT = 'TRANSFER_AMOUNT';
const TRANSFER = 'TRANSFER';

const SET_BALANCE = 'SET_BALANCE';
const SET_REMAINING_TIME = 'SET_REMAINING_TIME';

const bankDepositContract = new BankDepositContract();
await bankDepositContract.init();
const addresses = await bankDepositContract.accounts.map((address, index) => (
    <option key={index} value={address}>
        {address}
    </option>
));
const balance = Number(await bankDepositContract.getContractBalance()) / 1000000000000000000;
const remainingTime = await bankDepositContract.getRemainingTime();

const initialState = {
    bankAddress: '',
    bankAmount: '',
    depositAddress: '',
    depositAmount: '',
    balance: balance,
    addresses: addresses,
    remainingTime: remainingTime,
}

const bankDepositReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BANK_ADDRESS:
            return {
                ...state,
                bankAddress: action.newValue,
            }
        case UPDATE_BANK_AMOUNT:
            return {
                ...state,
                bankAmount: action.newValue,
            }
        case BANK:
            return {
                ...state,
                bankAmount: '',
            }
        case UPDATE_DEPOSIT_ADDRESS:
            return {
                ...state,
                depositAddress: action.newValue,
            }
        case UPDATE_DEPOSIT_AMOUNT:
            return {
                ...state,
                depositAmount: action.newValue,
            }
        case DEPOSIT:
            return {
                ...state,
                depositAmount: '',
            }
        case SET_BALANCE:
            return {
                ...state,
                balance: action.newValue,
            }
        case SET_REMAINING_TIME:
            return {
                ...state,
                remainingTime: action.newValue,
            }
        default:
            return state;
    }
}

export default bankDepositReducer;

export const updateBankAddress = (value) => (
    {type: UPDATE_BANK_ADDRESS, newValue: value}
);
export const updateBankAmount = (value) => (
    {type: UPDATE_BANK_AMOUNT, newValue: value}
);

export const bank = () => (
    {type: BANK}
);

export const updateDepositAddress = (value) => (
    {type: UPDATE_DEPOSIT_ADDRESS, newValue: value}
);
export const updateDepositAmount = (value) => (
    {type: UPDATE_DEPOSIT_AMOUNT, newValue: value}
);

export const setBalance = (value) => (
    {type: SET_BALANCE, newValue: value}
);

export const setRemainingTime = (value) => (
    {type: SET_REMAINING_TIME, newValue: value}
);

export const deposit = () => (
    {type: DEPOSIT}
);
