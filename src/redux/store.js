import {combineReducers, createStore} from "redux";
import voterReducer from "./voterReducer";


let reducers = combineReducers({
    voterPage : voterReducer
})

let store  = createStore(reducers)

export default store;