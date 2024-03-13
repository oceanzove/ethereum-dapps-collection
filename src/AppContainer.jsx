import {connect} from "react-redux";
import App from "./App";
import {updateSet} from "./redux/luckysevenReducer";


const mapStateToProps = (state) => {
    return {
        luckysevenPage: state.luckysevenPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateSet: (value) => {
            dispatch(updateSet(value));
        },
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
