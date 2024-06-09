import {combineReducers, createStore} from "redux";
import bankDepositReducer from "./bankDepositReducer";


let reducers = combineReducers({
    page : bankDepositReducer
})

let store  = createStore(reducers)

export default store;
