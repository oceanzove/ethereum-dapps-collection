import AddressContract from "../components/Contracts/AddressContract";

const UPDATE_SET_ADDRESS = 'UPDATE_SET_ADDRESS';
const UPDATE_GET_ADDRESS = 'UPDATE_GET_ADDRESS';
const SET_GET_INDEX_ADDRESS = 'SET_GET_INDEX_ADDRESS';
const ADD_ADDRESS = 'ADD_ADDRESS';

const addressContract = new AddressContract();
const addresses = await addressContract.getAllAddress().then(
    async (result) => {
        return Promise.all(result.map(async (address, index) => ({
            index: index,
            address: address
        })));
    }
);

const initialState = {
    setAddress: '',
    getAddress: '',
    getIndexAddress: '',
    addresses: addresses
}

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SET_ADDRESS:
            return {
                ...state,
                setAddress: action.newValue
            }
        case UPDATE_GET_ADDRESS:
            return {
                ...state,
                getAddress: action.newValue
            }
        case SET_GET_INDEX_ADDRESS:
            return {
                ...state,
                getIndexAddress: action.newValue
            }
        case ADD_ADDRESS:
            let newAddress = {
                index: action.newIndex,
                address: action.newAddress
            }
            return {
                ...state,
                setAddress: '',
                addresses: [...state.addresses, newAddress]
            }
        default:
            return state;
    }
}

export default addressReducer;

export const updateSetAddress = (value) => (
    {type: UPDATE_SET_ADDRESS, newValue: value}
);

export const updateGetAddress = (value) => (
    {type: UPDATE_GET_ADDRESS, newValue: value}
);
export const setGetIndexAddress = (value) => (
    {type: SET_GET_INDEX_ADDRESS, newValue: value}
);

export const addAddress = (index, address) => (
    {type: ADD_ADDRESS, newIndex: index, newAddress: address}
);
