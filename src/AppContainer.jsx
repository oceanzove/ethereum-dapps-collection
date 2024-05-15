import {connect} from "react-redux";
import App from "./App";
import {
    coin,
    send,
    setBalance,
    updateFromAddress,
    updateFromAmount,
    updateGetBalanceAddress,
    updateToAddress1,
    updateToAddress2,
    updateToAddress3,
    updateToAmount
} from "./redux/splitReducer";

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
        onChangeToAddress1: (value) => {
            dispatch(updateToAddress1(value));
        },
        onChangeToAddress2: (value) => {
            dispatch(updateToAddress2(value));
        },
        onChangeToAddress3: (value) => {
            dispatch(updateToAddress3(value));
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
        onChangeFromAmount: (value) => {
            dispatch(updateFromAmount(value));
        },
        onChangeToAmount: (value) => {
            dispatch(updateToAmount(value));
        },
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
