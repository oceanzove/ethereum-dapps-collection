const UPDATE_ADD_NAME = 'UPDATE_ADD_NAME';
const UPDATE_GET_INDEX = 'UPDATE_GET_INDEX';
const SET_GET_DRAGON_INFO = 'SET_GET_DRAGON_INFO';
const ADD_DRAGON = 'ADD_DRAGON';

const UPDATE_REFORGE_DRAGON_NAME = 'UPDATE_REFORGE_DRAGON_NAME';
const UPDATE_REFORGE_DRAGON_ID = 'UPDATE_REFORGE_DRAGON_ID';
const UPDATE_REFORGE_DRAGON_FOOD = 'UPDATE_REFORGE_DRAGON_FOOD';
const REFORGE_DRAGON = 'REFORGE_DRAGON';

const initialState = {
    addDragonName: '',
    getDragonIndex: '',
    getInfo: [{id: '', name: '', dna: ''}],
    reforgeDragonName: '',
    reforgeDragonId: '',
    reforgeDragonFood: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ADD_NAME:
            return {
                ...state,
                addDragonName: action.newValue
            }
        case UPDATE_GET_INDEX:
            return {
                ...state,
                getDragonIndex: action.newValue
            }
        case SET_GET_DRAGON_INFO:
            let dragonInfo = {
                id: action.newId,
                name: action.newName,
                dna: action.newDNA,
            }
            return {
                ...state,
                getInfo: [dragonInfo]
            }
        case ADD_DRAGON:
            return {
                ...state,
                addDragonName: '',
            }
        case UPDATE_REFORGE_DRAGON_NAME:
            return {
                ...state,
                reforgeDragonName: action.newValue,
            }
        case UPDATE_REFORGE_DRAGON_ID:
            return {
                ...state,
                reforgeDragonId: action.newValue,
            }
        case UPDATE_REFORGE_DRAGON_FOOD:
            return {
                ...state,
                reforgeDragonFood: action.newValue,
            }
        case REFORGE_DRAGON:
            return {
                ...state,
                reforgeDragonName: '',
                reforgeDragonId: '',
                reforgeDragonFood: '',
            }
        default:
            return state;
    }
}

export default reducer;

export const updateAddName = (value) => (
    {type: UPDATE_ADD_NAME, newValue: value}
);

export const updateGetIndex = (value) => (
    {type: UPDATE_GET_INDEX, newValue: value}
);
export const setGetDragonInfo = (id, name, dna) => (
    {type: SET_GET_DRAGON_INFO, newId: id, newName: name, newDNA: dna}
);

export const addDragon = () => (
    {type: ADD_DRAGON}
);


export const updateReforgeDragonName = (value) => (
    {type: UPDATE_REFORGE_DRAGON_NAME, newValue: value}
);

export const updateReforgeDragonId = (value) => (
    {type: UPDATE_REFORGE_DRAGON_ID, newValue: value}
);

export const updateReforgeDragonFood = (value) => (
    {type: UPDATE_REFORGE_DRAGON_FOOD, newValue: value}
);

export const reforgeDragon = () => (
    {type: REFORGE_DRAGON}
);
