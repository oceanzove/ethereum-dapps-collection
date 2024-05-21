import BankDepositContract from "../components/Contracts/BankDepositContract";

const UPDATE_BANK_ADDRESS = 'UPDATE_BANK_ADDRESS';
const UPDATE_BANK_AMOUNT = 'UPDATE_BANK_AMOUNT';
const BANK = 'BANK';

const UPDATE_DEPOSIT_ADDRESS = 'UPDATE_DEPOSIT_ADDRESS';
const UPDATE_DEPOSIT_AMOUNT = 'UPDATE_DEPOSIT_AMOUNT';
const DEPOSIT = 'DEPOSIT';

const UPDATE_PERCENT_ADDRESS = 'UPDATE_PERCENT_ADDRESS';
const PERCENT_AMOUNT = 'PERCENT_AMOUNT';
const COLLECT_PERCENT = 'COLLECT_PERCENT';

const SET_BALANCE = 'SET_BALANCE';
const SET_DEPOSIT_INFO = 'SET_DEPOSIT_INFO';
const SET_DEPOSIT_COLLECT = 'SET_DEPOSIT_COLLECT';

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
    depositAddress: '',
    depositAmount: '',
    percentAddress: '',
    balance: balance,
    addresses: addresses,
    depositInfo: [{address: '', amount: '', time: '', percent: '', collect: ''}],
}

const bankDepositReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEPOSIT_COLLECT:
            return {
                ...state,
                depositInfo: state.depositInfo.map((deposit, index) => {
                    if (index === 0) {
                        return { ...deposit, collect: action.collect };
                    }
                    return deposit;
                }),
            }
        case SET_DEPOSIT_INFO:
            const info = {
                address: action.address,
                amount: action.amount,
                time: action.time,
                percent: action.percent,
            }
            return {
                ...state,
                depositInfo: [info]
            }
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
        case UPDATE_PERCENT_ADDRESS:
            return {
                ...state,
                percentAddress: action.newValue,
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

export const updateDepositAddress = (value) => (
    {type: UPDATE_DEPOSIT_ADDRESS, newValue: value}
);
export const updateDepositAmount = (value) => (
    {type: UPDATE_DEPOSIT_AMOUNT, newValue: value}
);

export const updatePercentAddress = (value) => (
    {type: UPDATE_PERCENT_ADDRESS, newValue: value}
);

export const setBalance = (value) => (
    {type: SET_BALANCE, newValue: value}
);

export const deposit = () => (
    {type: DEPOSIT}
);

export const setDepositInfo = (address, amount, time, percent) => (
    {type: SET_DEPOSIT_INFO, address: address, amount: amount, time: time, percent: percent}
);

