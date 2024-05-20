import {connect} from "react-redux";
import App from "./App";
import {
    bank, deposit, setBalance, setRemainingTime,
    updateBankAddress, updateBankAmount, updateDepositTime

} from "./redux/bankDepositReducer";

const mapStateToProps = (state) => {
    return {
        page: state.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeBankAddress: (value) => {
            dispatch(updateBankAddress(value));
        },
        onChangeBankAmount: (value) => {
            dispatch(updateBankAmount(value));
        },
        onBank: () => {
            dispatch(bank());
        },
        onChangeDepositTime: (value) => {
            dispatch(updateDepositTime(value));
        },
        onDeposit: () => {
          dispatch(deposit());
        },
        onSetBalance: (value) => {
            dispatch(setBalance(value));
        },
        onSetRemainingTime: (value) => {
            dispatch(setRemainingTime(value));
        },

    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
