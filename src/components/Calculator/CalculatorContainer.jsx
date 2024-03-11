import Calculator from "./Calculator";
import {connect} from "react-redux";
import {clearAc, setOperatorAC, setResultAC, updateNumber1AC, updateNumber2AC} from "../../redux/calculatorReducer";

const mapStateToProps = (state) => {
    return {
        calculatorPage: state.calculatorPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNumber1: (number) => {
            let action = updateNumber1AC(number);
            dispatch(action);
        },
        updateNumber2: (number) => {
            let action = updateNumber2AC(number);
            dispatch(action);
        },
        setOperator: (operator) => {
            let action = setOperatorAC(operator);
            dispatch(action);
        },
        setResult: (result) => {
            let action = setResultAC(result);
            dispatch(action);
        },
        clear: () => {
            let action = clearAc();
            dispatch(action);
        }
    }
}

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator)


export default CalculatorContainer;
