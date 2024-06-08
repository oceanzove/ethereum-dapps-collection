import {connect} from "react-redux";
import App from "./App";
import {
    generateSeed, send,
    updateAmount,
    updateFromAddress,
    updateSeed, updateSeedAmount, updateToAddress
} from "./redux/reducer";

const mapStateToProps = (state) => {
    return {
        page: state.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateSeed: (value) => {
            dispatch(updateSeed(value));
        },
        onUpdateSeedAmount: (value) => {
            dispatch(updateSeedAmount(value));
        },
        onGenerateSeed: () => {
          dispatch(generateSeed());
        },
        onUpdateFromAddress: (value) => {
            dispatch(updateFromAddress(value));
        },
        onUpdateToAddress: (value) => {
            dispatch(updateToAddress(value));
        },
        onUpdateAmount: (value) => {
            dispatch(updateAmount(value));
        },
        onSend: () => {
            dispatch(send());
        }
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
