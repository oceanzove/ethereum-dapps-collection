import {combineReducers, createStore} from "redux";
import dragonFarmReducer from "./dragonFarmReducer";


let reducers = combineReducers({
    dragonFarmPage : dragonFarmReducer
})

let store  = createStore(reducers)

export default store;
