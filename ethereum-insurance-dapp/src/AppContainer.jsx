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
        onNewRecord: (id, name, date, price) => {
            dispatch(newRecord(id, name, date, price));
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
        onSignRecordInsurer: (id) => {
            dispatch(signRecordInsurer(id));
        }
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
