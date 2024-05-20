import BankDepositContract from "../components/Contracts/BankDepositContract";

const UPDATE_BANK_ADDRESS = 'UPDATE_BANK_ADDRESS';
const UPDATE_BANK_AMOUNT = 'UPDATE_BANK_AMOUNT';
const BANK = 'BANK';

const UPDATE_DEPOSIT_TIME = 'UPDATE_DEPOSIT_TIME';
const UPDATE_DEPOSIT_AMOUNT = 'UPDATE_DEPOSIT_AMOUNT';
const DEPOSIT = 'DEPOSIT';

const PERCENT_AMOUNT = 'PERCENT_AMOUNT';
const PERCENT = 'PERCENT';

const TRANSFER_AMOUNT = 'TRANSFER_AMOUNT';
const TRANSFER = 'TRANSFER';

const SET_BALANCE = 'SET_BALANCE';

const bankDepositContract = new BankDepositContract();
await bankDepositContract.init();
const addresses = await bankDepositContract.accounts.map((address, index) => (
    <option key={index} value={address}>
        {address}
    </option>
));
const balance = Number(await bankDepositContract.getContractBalance()) / 1000000000000000000;

const initialState = {
    bankAddress: '',
    bankAmount: '',
    balance: balance,
    addresses: addresses,
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
        case SET_BALANCE:
            return {
                ...state,
                balance: action.newValue,
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

export const setBalance = (value) => (
    {type: SET_BALANCE, newValue: value}
);
