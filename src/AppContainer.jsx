import {connect} from "react-redux";
import App from "./App";
import {
    getUser,
    setUser, updateGetUserAddress, updateGetUserName,
    updateSetUserAddress,
    updateSetUserAge,
    updateSetUserName,
    updateSetUserNumber
} from "./redux/ownerReducer";

const mapStateToProps = (state) => {
    return {
        ownerPage: state.ownerPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateSetUserName: (value) => {
            dispatch(updateSetUserName(value));
        },
        onUpdateSetUserNumber: (value) => {
            dispatch(updateSetUserNumber(value));
        },
        onUpdateSetUserAge: (value) => {
            dispatch(updateSetUserAge(value));
        },
        onUpdateSetUserAddress: (value) => {
            dispatch(updateSetUserAddress(value));
        },
        onSetUser: () => {
            dispatch(setUser());
        },
        onUpdateGetUserName: (value) => {
            dispatch(updateGetUserName(value));
        }
        ,onUpdateGetUserAddress: (value) => {
            dispatch(updateGetUserAddress(value));
        }
        ,onGetUser: (userNumber, userAge) => {
            console.log(userNumber)
            dispatch(getUser(userNumber, userAge));
        },

    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default  AppContainer;