import {connect} from "react-redux";
import {
    registeredAc,
    updateAddressRegInputAc,
    updateLoginRegInputAC,
    updatePasswordRegInputAc
} from "../../redux/registrationReducer";
import Registration from "./Registration";


const mapStateToProps = (state) => {
    return {
        registrationPage: state.registrationPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLogin: (text) => {
            let action = updateLoginRegInputAC(text);
            dispatch(action);
        },
        updatePassword: (text) => {
            let action = updatePasswordRegInputAc(text);
            dispatch(action);
        },
        updateAddress: (text) => {
            let action = updateAddressRegInputAc(text);
            dispatch(action);
        },
        registered: () => {
            let action = registeredAc();
            dispatch(action);
        }
    }

}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps) (Registration)

export default  RegistrationContainer;