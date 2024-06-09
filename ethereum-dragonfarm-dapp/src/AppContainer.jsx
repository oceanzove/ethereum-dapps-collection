import {connect} from "react-redux";
import App from "./App";
import {addDragon, setGetDragonInfo, updateAddName, updateGetIndex} from "./redux/dragonFarmReducer";

const mapStateToProps = (state) => {
    return {
        dragonFarmPage: state.dragonFarmPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateAddName: (value) => {
            dispatch(updateAddName(value));
        },
        onUpdateGetIndex: (value) => {
            dispatch(updateGetIndex(value));
        },
        onSetGetDragonInfo: (name, dna) => {
            dispatch(setGetDragonInfo(name, dna));
        },
        onAddDragon: (index, name, dna) => {
            dispatch(addDragon(index, name, dna));
        }
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
