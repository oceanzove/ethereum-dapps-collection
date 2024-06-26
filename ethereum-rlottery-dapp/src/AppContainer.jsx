import {connect} from "react-redux";
import App from "./App";
import {boughtTicket, updateResult, updateTicket} from "./redux/reducer";


const mapStateToProps = (state) => {
    return {
        page: state.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateTicket: (value) => {
            dispatch(updateTicket(value));
        },
        onUpdateResult: (value) => {
            dispatch(updateResult(value));
        },
        onBoughtTicket: () => {
            dispatch(boughtTicket());
        }
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
