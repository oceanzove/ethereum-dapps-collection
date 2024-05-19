import DonationContract from "../components/Contracts/DonationContract";

const UPDATE_DONAT_ADDRESS = 'UPDATE_DONAT_ADDRESS';
const UPDATE_DONAT_AMOUNT = 'UPDATE_DONAT_AMOUNT';
const DONAT = 'DONAT';

const SET_BALANCE = 'SET_BALANCE';
const TRANSFER_BALANCE = 'TRANSFER_BALANCE';

const donationContract = new DonationContract();
await donationContract.init();
const addresses = await donationContract.accounts.map((address, index) => (
    <option key={index} value={address}>
        {address}
    </option>
));
const donators = await donationContract.getDonators();

const balance = Number(await donationContract.getContractBalance()) / 1000000000000000000;

const initialState = {
    donatAddress: '',
    donatAmount: '',
    addresses: addresses,
    donators: donators,
    balance: balance,
}

const donationReducer = (state = initialState, action) => {
    switch (action.type) {
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
                donators: [...state.donators, action.newValue],
            }
        case SET_BALANCE:
            return {
                ...state,
                balance: action.newValue,
            }
        case TRANSFER_BALANCE:
            return {
                ...state,
                balance: '',
                donators: []
            }
        default:
            return state;
    }
}

export default donationReducer;

export const updateDonatAddress = (value) => (
    {type: UPDATE_DONAT_ADDRESS, newValue: value}
);

export const updateDonatAmount = (value) => (
    {type: UPDATE_DONAT_AMOUNT, newValue: value}
);

export const donat = (value) => (
    {type: DONAT, newValue: value}
);

export const setBalance = (value) => (
    {type: SET_BALANCE, newValue: value}
);

export const transferBalance = () => (
    {type: TRANSFER_BALANCE}
);
