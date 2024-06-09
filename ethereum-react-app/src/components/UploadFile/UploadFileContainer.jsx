import {connect} from "react-redux";
import {
    updateNewFileAC,
    updateNewOwnerAC,
    updateTransactionHashAC, uploadedFileInfoAC, uploadFileAC
} from "../../redux/uploadfileReducer";
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
        updateTransactionHash: (hash) => {
            let action = updateTransactionHashAC(hash);
            dispatch(action);
        },
        uploadFile: (owner, name, hash, uploadTime) => {
            let action = uploadFileAC(owner, name, hash, uploadTime);
            dispatch(action);
        },
        uploadedFileInfo: (owner, name, hash, uploadedTime) => {
            let action = uploadedFileInfoAC(owner, name, hash, uploadedTime);
            dispatch(action);
        }
    }
}

const UploadFileContainer = connect(mapStateToProps, mapDispatchToProps) (UploadFile)


export default  UploadFileContainer
