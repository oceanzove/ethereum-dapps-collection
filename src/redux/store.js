import {combineReducers, createStore} from "redux";
import authorizationReducer from "./authorizationReducer";

let reducers = combineReducers({
    authorizationPage: authorizationReducer,
})

let store  = createStore(reducers)

export default store;