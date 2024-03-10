import {connect} from "react-redux";
import AdminPanel from "./AdminPanel";
import {addStoreAc, deleteStoreAc, updateNewStoreAddressAc, updateNewStoreNameAc} from "../../redux/adminReducer";

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
    }
}

const AdminPanelContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPanel);

export default AdminPanelContainer;