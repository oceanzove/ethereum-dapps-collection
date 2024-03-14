import {combineReducers, createStore} from "redux";
import rLotteryReducer from "./rLotteryReducer";



let reducers = combineReducers({
    rLotteryPage : rLotteryReducer
})

let store  = createStore(reducers)

export default store;