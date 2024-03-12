import {combineReducers, createStore} from "redux";
import gradesReducer from "./gradesReducer";


let reducers = combineReducers({
    gradesPage : gradesReducer
})

let store  = createStore(reducers)

export default store;