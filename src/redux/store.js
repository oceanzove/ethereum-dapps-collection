import {combineReducers, createStore} from "redux";
import transactionReducer from "./transactionReducer";


let reducers = combineReducers({
    page : transactionReducer
})

let store  = createStore(reducers)

export default store;
