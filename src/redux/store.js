import {combineReducers, createStore} from "redux";
import donationReducer from "./donationReducer";


let reducers = combineReducers({
    page : donationReducer
})

let store  = createStore(reducers)

export default store;
