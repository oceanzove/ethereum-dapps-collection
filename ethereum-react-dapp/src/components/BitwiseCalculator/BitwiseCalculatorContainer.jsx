import {connect} from "react-redux";
import {
    clearBitAc,
    setBitOperatorAC,
    setBitResultAC,
    updateBitNumber1AC,
    updateBitNumber2AC
} from "../../redux/bitwiseCalculatorReducer";
import BitwiseCalculator from "./BitwiseCalculator";

const mapStateToProps = (state) => {
    return {
        bitwiseCalculatorPage: state.bitwiseCalculatorPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNumber1: (number) => {
            let action = updateBitNumber1AC(number);
            dispatch(action);
        },
        updateNumber2: (number) => {
            let action = updateBitNumber2AC(number);
            dispatch(action);
        },
        setOperator: (operator) => {
            let action = setBitOperatorAC(operator);
            dispatch(action);
        },
        setResult: (result) => {
            let action = setBitResultAC(result);
            dispatch(action);
        },
        clear: () => {
            let action = clearBitAc();
            dispatch(action);
        }
    }
}

const BitwiseCalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(BitwiseCalculator)


export default BitwiseCalculatorContainer;
