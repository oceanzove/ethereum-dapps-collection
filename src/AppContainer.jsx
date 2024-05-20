import {connect} from "react-redux";
import App from "./App";
import {
    bank, deposit, setBalance, setRemainingTime,
    updateBankAddress, updateBankAmount, updateDepositAddress, updateDepositAmount

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
        onChangeDepositAddress: (value) => {
            dispatch(updateDepositAddress(value));
        },
        onChangeDepositAmount: (value) => {
            dispatch(updateDepositAmount(value));
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
