import {connect} from "react-redux";
import Factorial from "./Factorial";
import {setAnswerTextAC, updateInputTextAC} from "../../redux/factorialReducer";




const mapStateToProps = (state) => {
    return {
        factorialPage: state.factorialPage
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

const FactorialContainer = connect(mapStateToProps, mapDispatchToProps) (Factorial)


export default  FactorialContainer
