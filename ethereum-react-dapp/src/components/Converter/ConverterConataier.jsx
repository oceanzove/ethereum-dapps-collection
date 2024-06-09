import {connect} from "react-redux";
import Converter from "./Converter";
import {
    setAnswerBinaryTextAC,
    setAnswerOctagonalTextAC,
    updateInputBinaryTextAC,
    updateInputOctagonalTextAC
} from "../../redux/converterReducer";


const mapStateToProps = (state) => {
    return {
        converterPage: state.converterPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateInputBinaryText: (text) => {
            let action = updateInputBinaryTextAC(text);
            dispatch(action);
        },
        updateInputOctagonalText: (text) => {
            let action = updateInputOctagonalTextAC(text);
            dispatch(action);
        },
        setAnswerBinaryText: (text) => {
            let action = setAnswerBinaryTextAC(text);
            dispatch(action);
        },
        setAnswerOctagonalText: (text) => {
            let action = setAnswerOctagonalTextAC(text);
            dispatch(action);
        }
    }
}

const ConverterContainer = connect(mapStateToProps, mapDispatchToProps) (Converter);

export default ConverterContainer;
