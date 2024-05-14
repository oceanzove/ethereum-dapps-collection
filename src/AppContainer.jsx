import {connect} from "react-redux";
import App from "./App";
import {
    coin, send,
    setBalance,
    updateFromAddress, updateGetBalanceAddress, updateToAddress
} from "./redux/transactionReducer";

const mapStateToProps = (state) => {
    return {
        page: state.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFromAddress: (value) => {
            dispatch(updateFromAddress(value));
        },
        onChangeToAddress: (value) => {
            dispatch(updateToAddress(value));
        },
        onChangeGetBalanceAddress: (value) => {
            dispatch(updateGetBalanceAddress(value));
        },
        onSetBalance: (value) => {
            dispatch(setBalance(value));
        },
        onCoin: () => {
            dispatch(coin());
        },
        onSend: () => {
            dispatch(send());
        },
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
