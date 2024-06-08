import GenerateSeedContract from "../components/Contracts/GenerateSeedContract";

const UPDATE_SEED = 'UPDATE_SEED';
const UPDATE_SEED_AMOUNT = 'UPDATE_SEED_AMOUNT';
const GENERATE_SEED = 'GENERATE_SEED';

const UPDATE_FROM_ADDRESS = 'UPDATE_FROM_ADDRESS';
const UPDATE_TO_ADDRESS = 'UPDATE_TO_ADDRESS';
const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
const SEND = 'SEND';

const UPDATE_WALLETS = 'UPDATE_WALLETS';

const generateSeedContract = new GenerateSeedContract();
const wallets = await generateSeedContract.wallets();

const wordsArray = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
    "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry",
    "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yellowfruit", "zucchini",
    "apricot", "blueberry", "cantaloupe", "dragonfruit", "eggplant", "fennel", "grapefruit", "huckleberry",
    "imbe", "jackfruit", "kumquat", "lime", "mulberry", "naranjilla", "olive", "peach",
    "plum", "pomegranate", "quandong", "rambutan", "salmonberry", "tamarillo", "ugni", "voavanga",
    "waxapple", "ximenia", "youngberry", "zinfandel", "ackee", "bilberry", "cloudberry", "durian",
    "entawak", "feijoa", "gooseberry", "hawthorn", "ilama", "jambolan", "kaffir", "loquat",
    "mammee", "nutmeg", "orangeberry", "persimmon", "pomelo", "quenepa", "rosehip", "sapodilla",
    "tamarind", "umbu", "velvetapple", "wolfberry", "ximenia", "yangmei", "zabergau", "acerola",
    "breadfruit", "casaba", "damson", "elderberry", "fingerlime", "grumichama", "hackberry", "indianfig",
    "jaboticaba", "kepel", "langsat", "mangosteen", "nance", "osageorange", "pandan", "quenepa",
    "rowan", "soursop", "tangelo", "urava", "velvetapple", "wampee", "ximenia", "yumberry"
];

const initialState = {
    seed: '',
    seedAmount: '',
    fromAddress: '',
    toAddress: '',
    amount: '',
    wallets: wallets,
    words: wordsArray
}


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
        case GENERATE_SEED:
            return {
                ...state,
                seed: '',
                seedAmount: '',
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
        case SEND:
            return {
                ...state,
                fromAddress: '',
                toAddress: '',
                amount: '',
            }
        case UPDATE_WALLETS:
            return {
                ...state,
                wallets: action.wallets,
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

export const generateSeed = () => (
    {type: GENERATE_SEED}
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

export const send = () => (
    {type: SEND}
);

export const updateWallets = (wallets) => (
    {type: UPDATE_WALLETS, wallets: wallets}
);


