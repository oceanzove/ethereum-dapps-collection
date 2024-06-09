import {connect} from "react-redux";
import {getNoteAC, setNoteAC, updateAddressNoteAC, updateNameNoteAC, updateNumberNoteAC} from "../../redux/noteReducer";
import Note from "./Note";


const mapStateToProps = (state) => {
    return {
        notePage: state.notePage
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        updateNameNote: (text) => {
            let action = updateNameNoteAC(text);
            dispatch(action);
        },
        updateNumberNote: (text) => {
            let action = updateNumberNoteAC(text);
            dispatch(action);
        },
        updateAddressNote: (text) => {
            let action = updateAddressNoteAC(text);
            dispatch(action);
        },
        setNote: () => {
            let action = setNoteAC()
            dispatch(action);
        },
        getNote: (note) => {
            let action = getNoteAC(note);
            dispatch(action);
        }

    }
}

const NoteContainer = connect(mapStateToProps, mapDispatchToProps) (Note)


export default  NoteContainer
