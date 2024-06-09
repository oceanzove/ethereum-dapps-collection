import {combineReducers, createStore} from "redux";
import luckysevenReducer from "./luckysevenReducer";



let reducers = combineReducers({
    luckysevenPage : luckysevenReducer
})

let store  = createStore(reducers)

export default store;