import {connect} from "react-redux";
import App from "./App";
import {
    getResults,
    setGrade, updateGetTitle,
    updateSetGrade,
    updateSetTitle

} from "./redux/reducer";

const mapStateToProps = (state) => {
    return {
        page: state.page
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
