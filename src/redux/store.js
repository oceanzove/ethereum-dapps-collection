import {combineReducers, createStore} from "redux";
import uploadFileReducer from "./uploadfileReducer";
import factorialReducer from "./factorialReducer";
import converterReducer from "./converterReducer";
import converterAdvanceReducer from "./converterAdvanceReducer";

let reducers = combineReducers({
    uploadFilePage: uploadFileReducer,
    factorialPage: factorialReducer,
    converterPage: converterReducer,
    converterAdvancePage: converterAdvanceReducer,
})

let store  = createStore(reducers)

export default store;
