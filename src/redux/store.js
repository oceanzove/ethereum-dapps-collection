import {combineReducers, createStore} from "redux";
import authorizationReducer from "./authorizationReducer";
import adminReducer from "./adminReducer";
import registrationReducer from "./registrationReducer";

let reducers = combineReducers({
    authorizationPage: authorizationReducer,
    registrationPage: registrationReducer,
    adminPage: adminReducer,
})

let store  = createStore(reducers)

export default store;