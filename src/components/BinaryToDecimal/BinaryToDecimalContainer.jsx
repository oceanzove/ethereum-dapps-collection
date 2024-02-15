import {setAnswerTextAC, updateInputTextAC} from "../../redux/factorialReducer";
import {connect} from "react-redux";
import BinaryToDecimal from "./BinaryToDecimal";

const mapStateToProps = (state) => {
    return {
        binaryToDecimalPage: state.binaryToDecimalPage
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        updateInputText: (text) => {
            let action = updateInputTextAC(text);
            dispatch(action);
        },
        setAnswerText: (text) => {
            let action = setAnswerTextAC(text);
            dispatch(action);
        }
    }
}

const BinaryToDecimalContainer = connect(mapStateToProps, mapDispatchToProps) (BinaryToDecimal)


export default  BinaryToDecimalContainer
