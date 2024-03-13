import {combineReducers, createStore} from "redux";
import addressReducer from "./addressReducer";


let reducers = combineReducers({
    addressPage : addressReducer
})

let store  = createStore(reducers)

export default store;
