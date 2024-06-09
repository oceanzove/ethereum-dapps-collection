import {connect} from "react-redux";
import {
    getUserAC,
    setUserAC,
    updateAddressUserAC, updateNameSearchUserAC,
    updateNameUserAC,
    updateNumberUserAC
} from "../../redux/noteUserReducer";
import NewNote from "./NewNote";


const mapStateToProps = (state) => {
    return {
        newNotePage: state.newNotePage
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        updateNameUser: (text) => {
            let action = updateNameUserAC(text);
            dispatch(action);
        },
        updateNumberUser: (text) => {
            let action = updateNumberUserAC(text);
            dispatch(action);
        },
        updateAddressUser: (text) => {
            let action = updateAddressUserAC(text);
            dispatch(action);
        },
        updateNameSearchUser: (text) => {
            let action = updateNameSearchUserAC(text);
            dispatch(action);
        },
        setUser: () => {
            let action = setUserAC()
            dispatch(action);
        },
        getUser: (user) => {
            let action = getUserAC(user);
            dispatch(action);
        }

    }
}

const NoteContainer = connect(mapStateToProps, mapDispatchToProps) (NewNote)


export default  NoteContainer
