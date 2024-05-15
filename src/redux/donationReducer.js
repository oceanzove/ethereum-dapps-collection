import DonationContract from "../components/Contracts/DonationContract";

const TEST_ACTION = 'TEST_ACTION';
const UPDATE_DONAT_ADDRESS = 'UPDATE_DONAT_ADDRESS';
const UPDATE_DONAT_AMOUNT = 'UPDATE_DONAT_AMOUNT';
const DONAT = 'DONAT';

const SET_BALANCE = 'SET_BALANCE';

const donationContract = new DonationContract();
await donationContract.init();
const addresses = await donationContract.accounts.map((address, index) => (
    <option key={index} value={address}>
        {address}
    </option>
));
const balance = await donationContract.getContractBalance();

const initialState = {
    donatAddress: '',
    donatAmount: '',
    addresses: addresses,
    balance: balance,
}

const donationReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST_ACTION:
            return {
                ...state,
                test: action.newValue,
            }
        case UPDATE_DONAT_ADDRESS:
            return {
                ...state,
                donatAddress: action.newValue,
            }
        case UPDATE_DONAT_AMOUNT:
            return {
                ...state,
                donatAmount: action.newValue,
            }
        case DONAT:
            return {
                ...state,
                donatAmount: '',
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

export default donationReducer;

export const test = (value) => (
    {type: TEST_ACTION, newValue: value}
);

export const updateDonatAddress = (value) => (
    {type: UPDATE_DONAT_ADDRESS, newValue: value}
);

export const updateDonatAmount = (value) => (
    {type: UPDATE_DONAT_AMOUNT, newValue: value}
);

export const donat = () => (
    {type: DONAT}
);

export const setBalance = (value) => (
    {type: SET_BALANCE, newValue: value}
);
