import {connect} from "react-redux";
import {
    setAnswerBinaryFromDecimalAC,
    setAnswerHexFromDecimalAC,
    updateInputDecimalToBinaryAC,
    updateInputDecimalToHexAC
} from "../../redux/converterAdvanceReducer";
import ConverterAdvance from "./ConverterAdvance";


const mapStateToProps = (state) => {
    return {
        converterAdvancePage: state.converterAdvancePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateInputDecimalToHex: (text) => {
            let action = updateInputDecimalToHexAC(text);
            dispatch(action);
        },
        updateInputDecimalToBinary: (text) => {
            let action = updateInputDecimalToBinaryAC(text);
            dispatch(action);
        },
        setAnswerHexFromDecimal: (text) => {
            let action = setAnswerHexFromDecimalAC(text);
            dispatch(action);
        },
        setAnswerBinaryFromDecimal: (text) => {
            let action = setAnswerBinaryFromDecimalAC(text);
            dispatch(action);
        }
    }
}

const ConverterAdvanceContainer = connect(mapStateToProps, mapDispatchToProps) (ConverterAdvance);

export default ConverterAdvanceContainer;
