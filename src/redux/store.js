import {combineReducers, createStore} from "redux";
import uploadFileReducer from "./uploadfileReducer";
import simpleContractReducer from "./simpleContractReducer";

let reducers = combineReducers({
    uploadFilePage: uploadFileReducer,
    factorialPage: simpleContractReducer,
    binaryToDecimalPage: simpleContractReducer,
})

let store  = createStore(reducers)

export default store;
