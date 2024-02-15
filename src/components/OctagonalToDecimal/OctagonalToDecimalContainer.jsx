import {connect} from "react-redux";
import {setAnswerTextAC, updateInputTextAC} from "../../redux/factorialReducer";
import OctagonalToDecimal from "./OctagonalToDecimal";




const mapStateToProps = (state) => {
    return {
        octagonalToDecimalPage: state.octagonalToDecimalPage
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

const OctagonalToDecimalContainer = connect(mapStateToProps, mapDispatchToProps) (OctagonalToDecimal)


export default  OctagonalToDecimalContainer
