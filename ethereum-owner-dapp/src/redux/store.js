import {combineReducers, createStore} from "redux";
import ownerReducer from "./ownerReducer";


let reducers = combineReducers({
    ownerPage : ownerReducer
})

let store  = createStore(reducers)

export default store;