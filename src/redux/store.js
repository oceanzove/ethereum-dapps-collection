import {combineReducers, createStore} from "redux";
import uploadFileReducer from "./uploadfileReducer";
import factorialReducer from "./factorialReducer";
import converterReducer from "./converterReducer";

let reducers = combineReducers({
    uploadFilePage: uploadFileReducer,
    factorialPage: factorialReducer,
    converterPage: converterReducer,
})

let store  = createStore(reducers)

export default store;
