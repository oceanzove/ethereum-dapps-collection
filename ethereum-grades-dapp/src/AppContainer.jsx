import {connect} from "react-redux";
import App from "./App";
import {
    getResults,
    setGrade, updateGetTitle,
    updateSetGrade,
    updateSetTitle

} from "./redux/gradesReducer";

const mapStateToProps = (state) => {
    return {
        gradesPage: state.gradesPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateSetTitle: (value) => {
            dispatch(updateSetTitle(value));
        },
        onUpdateSetGrade: (value) => {
            dispatch(updateSetGrade(value));
        },
        onSetGrade: () => {
            dispatch(setGrade());
        },
        onUpdateGetTitle: (value) => {
            dispatch(updateGetTitle(value));
        }
        ,onGetResults: (amount, average, sum) => {
            dispatch(getResults(amount, average, sum));
        },

    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default  AppContainer;