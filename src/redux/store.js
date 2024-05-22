import {combineReducers, createStore} from "redux";
import reducer from "./Reducer";


let reducers = combineReducers({
    page : reducer
})

let store  = createStore(reducers)

export default store;
