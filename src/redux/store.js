import {combineReducers, createStore} from "redux";
import uploadFileReducer from "./uploadfileReducer";

let reducers = combineReducers({
    uploadFilePage: uploadFileReducer()
})

let store  = createStore(reducers)

export default store;
