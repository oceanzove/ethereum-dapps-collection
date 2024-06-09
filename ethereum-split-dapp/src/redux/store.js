import {combineReducers, createStore} from "redux";
import splitReducer from "./splitReducer";


let reducers = combineReducers({
    page : splitReducer
})

let store  = createStore(reducers)

export default store;
