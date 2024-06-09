import {connect} from "react-redux";
import App from "./App";
import {
    addAddress, setGetIndexAddress,
    updateGetAddress,
    updateSetAddress
} from "./redux/addressReducer";

const mapStateToProps = (state) => {
    return {
        addressPage: state.addressPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateSetAddress: (value) => {
            dispatch(updateSetAddress(value));
        },
        onUpdateGetAddress: (value) => {
            dispatch(updateGetAddress(value));
        },
        onSetGetIndexAddress: (value) => {
            dispatch(setGetIndexAddress(value));
        },
        onAddAddress: (index, address) => {
            dispatch(addAddress(index, address));
        }
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
