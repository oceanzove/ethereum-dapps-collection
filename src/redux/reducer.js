import GenerateSeedContract from "../components/Contracts/GenerateSeedContract";

const UPDATE_SEED = 'UPDATE_SEED';
const UPDATE_SEED_AMOUNT = 'UPDATE_SEED_AMOUNT';
const GENERATE_SEED = 'GENERATE_SEED';

const UPDATE_FROM_ADDRESS = 'UPDATE_FROM_ADDRESS';
const UPDATE_TO_ADDRESS = 'UPDATE_TO_ADDRESS';
const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
const SEND = 'SEND';

const initialState = {
    seed: '',
    seedAmount: '',
    fromAddress: '',
    toAddress: '',
    amount: '',
}
const generateSeedContract = new GenerateSeedContract();
const qwe = await generateSeedContract.wallets();
console.log(qwe)

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEED:
            return {
                ...state,
                seed: action.newValue,
            }
        case UPDATE_SEED_AMOUNT:
            return {
                ...state,
                seedAmount: action.newValue,
            }
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
        case UPDATE_AMOUNT:
            return {
                ...state,
                amount: action.newValue,
            }
        default:
            return state;
    }
}

export default reducer;

export const updateSeed = (value) => (
    {type: UPDATE_SEED, newValue: value}
);

export const updateSeedAmount = (value) => (
    {type: UPDATE_SEED_AMOUNT, newValue: value}
);
export const updateFromAddress = (value) => (
    {type: UPDATE_FROM_ADDRESS, newValue: value}
);

export const updateToAddress = (value) => (
    {type: UPDATE_TO_ADDRESS, newValue: value}
);

export const updateAmount = (value) => (
    {type: UPDATE_AMOUNT, newValue: value}
);
