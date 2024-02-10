import {connect} from "react-redux";
import {updateNewFileAC, updateNewOwnerAC} from "../../redux/uploadfileReducer";
import UploadFile from "./UploadFile";


const mapStateToProps = (state) => {
    return {
        uploadFilePage: state.uploadFilePage
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        updateNewOwnerText: (text) => {
            let action = updateNewOwnerAC(text);
            dispatch(action);
        },
        updateNewFile: (hash, name) => {
            let action = updateNewFileAC(hash, name);
            dispatch(action);
        },

    }
}

const UploadFileContainer = connect(mapStateToProps, mapDispatchToProps) (UploadFile)


export default  UploadFileContainer
