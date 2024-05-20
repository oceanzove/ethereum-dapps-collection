import {connect} from "react-redux";
import App from "./App";
import {
    bank, setBalance,
    updateBankAddress, updateBankAmount

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
        onSetBalance: (value) => {
            dispatch(setBalance(value));
        },
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
