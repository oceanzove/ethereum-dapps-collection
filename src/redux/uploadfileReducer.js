const UPDATE_NEW_OWNER_TEXT = 'UPDATE_NEW_OWNER_TEXT';
const UPDATE_NEW_FILE = 'UPDATE_NEW_FILE';
const UPDATE_CURRENT_TRANSACTION_HASH = 'UPDATE_CURRENT_TRANSACTION_HASH';
const UPLOAD_FILE = 'UPLOAD_FILE'
const UPLOADED_FILE_INFO = 'UPLOADED_FILE_INFO';


let initialState = {
    newOwnerText: '',
    newFileName: '',
    newFileHash: '',
    currentTransactionHash: '',
    uploadFiles: [
        {fileOwner: 'Влад', fileName: 'Великий Шиверфолд.docx', fileHash: '0x4c42d89f7cb5571fe5e70fc99abe5a8c1b008aa40bbebfc8e2c92b3e46454d0e', uploadTime: ''}
    ],
    transactionHash: '',
    uploadedFileOwner: '',
    uploadedFileName: '',
    uploadedFileHash: '',
    uploadedFileTime: ''
}
const uploadFileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_OWNER_TEXT:
            console.log('Owner chaned', action.newText)
            return {
                ...state,
                newOwnerText: action.newText
            };
        case UPDATE_NEW_FILE:
            console.log(`Successful file with name ${action.newName}`, action.newHash)
            return {
                ...state,
                newFileName: action.newName,
                newFileHash: action.newHash,
            };
        case UPDATE_CURRENT_TRANSACTION_HASH:
            return {
                ...state,
                currentTransactionHash: action.newTransactionHash
            }
        case UPLOAD_FILE:
            let newFile = {fileOwner: action.fileOwner, fileName: action.fileName, fileHash: action.fileHash, uploadTime: action.uploadTime}
            return {
                ...state,
                uploadFiles: [...state.uploadFiles, newFile],
                newOwnerText: '',
                newFileName: '',
                newFileHash: '',
            }
        case UPLOADED_FILE_INFO:
            return {
                ...state,
                uploadedFileOwner: action.fileOwner,
                uploadedFileName: action.fileName,
                uploadedFileHash: action.fileHash,
                uploadedFileTime: action.uploadedTime
            }
        default:
            return state
    }
};

export const updateNewOwnerAC = (text) => (
    {type: UPDATE_NEW_OWNER_TEXT, newText: text}
);

export const updateNewFileAC = (hash, name) => (
    {type: UPDATE_NEW_FILE, newHash: hash, newName: name}
)

export const updateTransactionHashAC = (hash) => (
    {type: UPDATE_CURRENT_TRANSACTION_HASH, newTransactionHash: hash}
)

export const uploadFileAC = (owner, name, hash, uploadTime) => (
    {type: UPLOAD_FILE, fileOwner: owner, fileName: name, fileHash: hash, uploadTime: uploadTime}
)

export const uploadedFileInfoAC = (owner, name, hash, uploadedTime) => (
    {type: UPLOADED_FILE_INFO, fileOwner: owner, fileName: name, fileHash: hash, uploadedTime: uploadedTime}
)


export default uploadFileReducer;
