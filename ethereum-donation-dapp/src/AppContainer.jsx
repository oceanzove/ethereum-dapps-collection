import {connect} from "react-redux";
import App from "./App";
import {
    donat, setBalance, transferBalance,
    updateDonatAddress, updateDonatAmount
} from "./redux/reducer";

const mapStateToProps = (state) => {
    return {
        page: state.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDonatAddress: (value) => {
          dispatch(updateDonatAddress(value));
        },
        onUpdateDonatAmount: (value) => {
          dispatch(updateDonatAmount(value));
        },
        onSetBalance: (value) => {
          dispatch(setBalance(value));
        },
        onTransferBalance: () => {
          dispatch(transferBalance());
        },
        onDonat: (value) => {
          dispatch(donat(value));
        },
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
