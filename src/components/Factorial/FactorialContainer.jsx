import {connect} from "react-redux";
import Factorial from "./Factorial";




const mapStateToProps = (state) => {
    return {
        factorialPage: state.factorialPage
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FactorialContainer = connect(mapStateToProps, mapDispatchToProps) (Factorial)


export default  FactorialContainer
