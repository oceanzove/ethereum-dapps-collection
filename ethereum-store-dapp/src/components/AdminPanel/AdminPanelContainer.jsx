import {connect} from "react-redux";
import AdminPanel from "./AdminPanel";
import {
    addNewAdminAc,
    addStoreAc,
    deleteStoreAc, updateNewAdminAddressAc,
    updateNewAdminLoginAc, updateNewAdminPasswordAc,
    updateNewStoreAddressAc,
    updateNewStoreNameAc
} from "../../redux/adminReducer";

const mapStateToProps = (state) => {
    return {
        adminPage: state.adminPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewStoreName: (text) => {
            let action = updateNewStoreNameAc(text);
            dispatch(action);
        },
        updateNewStoreAddress: (text) => {
            let action = updateNewStoreAddressAc(text);
            dispatch(action);
        },
        addStore: () => {
            let action = addStoreAc();
            dispatch(action);
        },
        deleteStore: (address) => {
            let action = deleteStoreAc(address);
            dispatch(action);
        },
        updateNewAdminLogin: (text) => {
            let action = updateNewAdminLoginAc(text);
            dispatch(action);
        },
        updateNewAdminPassword: (text) => {
            let action = updateNewAdminPasswordAc(text);
            dispatch(action);
        },
        updateNewAdminAddress: (text) => {
            let action = updateNewAdminAddressAc(text);
            dispatch(action);
        },
        addAdmin: () => {
            let action = addNewAdminAc();
            dispatch(action);
        }
    }
}

const AdminPanelContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPanel);

export default AdminPanelContainer;