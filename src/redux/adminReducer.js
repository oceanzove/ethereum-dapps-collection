import StoreContract from "../components/Contracts/StoreContract";

const ADD_STORE = 'ADD_STORE';
const DELETE_STORE = 'DELETE_STORE';
const UPDATE_NEW_STORE_NAME = 'UPDATE_NEW_STORE_NAME';
const UPDATE_NEW_STORE_ADDRESS = 'UPDATE_NEW_STORE_ADDRESS';

const storeContract = new StoreContract();

let initialState = {
    stores: await storeContract.getStores(),
    users: await storeContract.getUsers(),
    newStoreName: '',
    newStoreAddress: '',
}

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_STORE:
          let newStore ={
              name: state.newStoreName,
              owner: state.newStoreAddress,
          }
          return {
              ...state,
              stores: [...state.stores, newStore],
              newStoreName: '',
              newStoreAddress: '',
          }
      case UPDATE_NEW_STORE_NAME:
          return {
              ...state,
              newStoreName: action.newText
          }
      case UPDATE_NEW_STORE_ADDRESS:
          return {
              ...state,
              newStoreAddress: action.newText
          }
      case DELETE_STORE:
          const updatedStores = state.stores.filter(store => store.owner !== action.owner);
          return {
              ...state,
              stores: updatedStores,
          };
      default:
          return state;
  }
}

export default adminReducer;

export const updateNewStoreNameAc = (text) => (
    {type: UPDATE_NEW_STORE_NAME, newText: text}
);

export const updateNewStoreAddressAc = (text) => (
    {type: UPDATE_NEW_STORE_ADDRESS, newText: text}
);

export const addStoreAc = () => (
    {type: ADD_STORE}
);

export const deleteStoreAc = (owner) => (
    {type: DELETE_STORE, owner: owner}
);
