const UPDATE_NEW_OWNER_TEXT = 'UPDATE_NEW_OWNER_TEXT';
const UPDATE_NEW_FILE = 'UPDATE_NEW_FILE';


let initialState = {
    newOwnerText: '',
    newFileName: '',
    newFileHash: '',
    uploadFiles: [
        {owner: 'Влад', name: 'Великий Шиверфолд.docx', hash: '0x4c42d89f7cb5571fe5e70fc99abe5a8c1b008aa40bbebfc8e2c92b3e46454d0e'}
    ],
    transactionHash: '',
}
const uploadFileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_OWNER_TEXT:
            console.log('Owner chaned', action.newText)
            return {
                ...state,
                newOwnerText: action.newText
            }
        case UPDATE_NEW_FILE:
            console.log(`Successful file with name ${action.newName}`, action.newHash)
            return {
                ...state,
                newFileName: action.newName,
                newFileHash: action.newHash,
            };
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



export default uploadFileReducer;
