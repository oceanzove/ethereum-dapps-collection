import {connect} from "react-redux";
import App from "./App";
import {
    newRecord,
    updateNewRecordDate,
    updateNewRecordId, updateNewRecordName, updateNewRecordPrice

} from "./redux/Reducer";

const mapStateToProps = (state) => {
    return {
        page: state.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateNewRecordId: (value) => {
            dispatch(updateNewRecordId(value));
        },
        onUpdateNewRecordName: (value) => {
            dispatch(updateNewRecordName(value));
        },
        onUpdateNewRecordDate: (value) => {
            dispatch(updateNewRecordDate(value));
        },
        onUpdateNewRecordPrice: (value) => {
            dispatch(updateNewRecordPrice(value));
        },
        onNewRecord: () => {
            dispatch(newRecord())
        },
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
