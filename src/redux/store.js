import {combineReducers, createStore} from "redux";
import uploadFileReducer from "./uploadfileReducer";
import factorialReducer from "./factorialReducer";
import converterReducer from "./converterReducer";
import converterAdvanceReducer from "./converterAdvanceReducer";
import customConverterReducer from "./customConverterReducer";
import calculatorReducer from "./calculatorReducer";
import bitwiseCalculatorReducer from "./bitwiseCalculatorReducer";

let reducers = combineReducers({
    uploadFilePage: uploadFileReducer,
    factorialPage: factorialReducer,
    converterPage: converterReducer,
    converterAdvancePage: converterAdvanceReducer,
    customConverterPage: customConverterReducer,
    calculatorPage: calculatorReducer,
    bitwiseCalculatorPage: bitwiseCalculatorReducer,
})

let store  = createStore(reducers)

export default store;
