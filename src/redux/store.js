import {combineReducers, createStore} from "redux";
import authorizationReducer from "./authorizationReducer";
import adminReducer from "./adminReducer";

let reducers = combineReducers({
    authorizationPage: authorizationReducer,
    adminPage: adminReducer,
})

let store  = createStore(reducers)

export default store;