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
            let from;
            switch (text) {
                case 'Из восьмеричной':
                    from = 8;
                    break;
                case 'Из десятичной':
                    from = 10;
                    break;
                case 'Из шестнадцатеричной':
                    from = 16;
                    break;
                default:
                    from = 2;
            }
            let action = setConvertFromAC(from);
            dispatch(action);
        },
        setConvertTo: (text) => {
            let to;
            switch (text) {
                case 'В восьмиричную':
                    to = 8;
                    break;
                case 'В десятчиную':
                    to = 10;
                    break;
                case 'В шестнадцатеричную':
                    to = 16;
                    break;
                default: to = 2;
            }
            let action = setConvertToAC(to);
            dispatch(action);
        },
        setAnswerNumber: (number) => {
            let action = setAnswerNumberAC(number);
            dispatch(action);
        },
        updateInputNumber: (number) => {
            let action = updateInputNumberAC(number);
            dispatch(action);
        }
    }
}

const CustomConverterContainer = connect(mapStateToProps, mapDispatchToProps)(CustomConverter);

export default CustomConverterContainer;
