import DragonFarmContract from "../components/Contracts/DragonFarmContract";

const UPDATE_ADD_NAME = 'UPDATE_ADD_NAME';
const UPDATE_GET_INDEX = 'UPDATE_GET_INDEX';
const SET_GET_DRAGON_INFO = 'SET_GET_DRAGON_INFO';
const ADD_DRAGON = 'ADD_DRAGON';

const dragonFarmContract = new DragonFarmContract();
const dragons = await dragonFarmContract.getAllDragons().then(
    async (result) => {
        return Promise.all(result.map(async (index, name, dna) => ({
            index: index,
            name: name,
            dna: dna,
        })));
    }
);

const initialState = {
    setName: '',
    getIndex: '',
    getInfo: '',
    dragons: dragons
}

const dragonFarmReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ADD_NAME:
            return {
                ...state,
                setName: action.newValue
            }
        case UPDATE_GET_INDEX:
            return {
                ...state,
                getIndex: action.newValue
            }
        case SET_GET_DRAGON_INFO:
            return {
                ...state,
                getIndexAddress: action.newValue
            }
        case ADD_DRAGON:
            let newDragon = {
                index: action.newIndex,
                name: action.newName,
                dna: action.newDNA,
            }
            return {
                ...state,
                setName: '',
                dragons: [...state.dragons, newDragon]
            }
        default:
            return state;
    }
}

export default dragonFarmReducer;

export const updateAddName = (value) => (
    {type: UPDATE_ADD_NAME, newValue: value}
);

export const updateGetIndex = (value) => (
    {type: UPDATE_GET_INDEX, newValue: value}
);
export const setGetDragonInfo = (value) => (
    {type: SET_GET_DRAGON_INFO, newValue: value}
);

export const addDragon = (index, name, dna) => (
    {type: ADD_DRAGON, newIndex: index, newName: name, newDNA: dna}
);
