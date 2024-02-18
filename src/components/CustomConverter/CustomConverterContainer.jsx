import {
    setAnswerNumberAC,
    setConvertFromAC,
    setConvertToAC,
    updateInputNumberAC
} from "../../redux/customConverterReducer";
import {connect} from "react-redux";
import CustomConverter from "./CustomConverter";

const mapStateToProps = (state) => {
    return {
        customConverterPage: state.customConverterPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setConvertFrom: (text) => {
            let action = setConvertFromAC(text);
            dispatch(action);
        },
        setConvertTo: (text) => {
            let action = setConvertToAC(text);
            dispatch(action);
        },
        setAnswerNumber: (text) => {
            let action = setAnswerNumberAC(text);
            dispatch(action);
        },
        updateInputNumber: (text) => {
            let action = updateInputNumberAC(text);
            dispatch(action);
        }
    }
}

const CustomConverterContainer = connect(mapStateToProps, mapDispatchToProps) (CustomConverter);

export default CustomConverterContainer;