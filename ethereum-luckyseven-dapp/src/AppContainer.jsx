import {connect} from "react-redux";
import App from "./App";
import {updateSet} from "./redux/reducer";


const mapStateToProps = (state) => {
    return {
        page: state.page
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
