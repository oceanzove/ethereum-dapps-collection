import {connect} from "react-redux";
import App from "./App";
import {
    newRecord, signRecordHospital, signRecordInsurer,
    updateNewRecordDate,
    updateNewRecordName, updateNewRecordPrice, updateRecordIdHospital, updateRecordIdInsurer

} from "./redux/Reducer";

const mapStateToProps = (state) => {
    return {
        page: state.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
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
            dispatch(newRecord());
        },
        onUpdateRecordIdHospital: (value) => {
          dispatch(updateRecordIdHospital(value));
        },
        onSignRecordHospital: () => {
          dispatch(signRecordHospital());
        },
        onUpdateRecordIdInsurer: (value) => {
            dispatch(updateRecordIdInsurer(value));
        },
        onSignRecordInsurer: () => {
            dispatch(signRecordInsurer());
        }
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
