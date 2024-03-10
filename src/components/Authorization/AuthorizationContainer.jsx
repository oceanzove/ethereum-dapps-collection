import {connect} from "react-redux";
import Authorization from "./Authorization";
import {
    authorizedAc,
    updateAddressInputAc,
    updateLoginInputAC,
    updatePasswordInputAc
} from "../../redux/authorizationReducer";


const mapStateToProps = (state) => {
    return {
        authorizationPage: state.authorizationPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLogin: (text) => {
            let action = updateLoginInputAC(text);
            dispatch(action);
        },
        updatePassword: (text) => {
            let action = updatePasswordInputAc(text);
            dispatch(action);
        },
        updateAddress: (text) => {
            let action = updateAddressInputAc(text);
            dispatch(action);
        },
        authorized: () => {
            let action = authorizedAc();
            dispatch(action);
        }
    }

}

const AuthorizationContainer = connect(mapStateToProps, mapDispatchToProps) (Authorization)

export default  AuthorizationContainer;