import {connect} from "react-redux";
import App from "./App";
import {
    balance, transfer, updateAmount,
    updateBalanceAddress, updateToAddress
} from "./redux/reducer";

const mapStateToProps = (state) => {
    return {
        page: state.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateBalanceAddress: (value) => {
            dispatch(updateBalanceAddress(value));
        },
        onSetBalance: (value) => {
           dispatch(balance(value));
        },
        onUpdateToAddress: (value) => {
            dispatch(updateToAddress(value));
        },
        onUpdateAmount: (value) => {
            dispatch(updateAmount(value));
        },
        onTransfer: () => {
            dispatch(transfer());
        },
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
