import {connect} from "react-redux";
import App from "./App";
import {
    addDragon, reforgeDragon,
    setGetDragonInfo,
    updateAddName,
    updateGetIndex, updateReforgeDragonFood, updateReforgeDragonId,
    updateReforgeDragonName
} from "./redux/reducer";

const mapStateToProps = (state) => {
    return {
        page: state.page
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
        onSetGetDragonInfo: (id, name, dna) => {
            dispatch(setGetDragonInfo(id, name, dna));
        },
        onAddDragon: (name, dna) => {
            dispatch(addDragon(name, dna));
        },
        onUpdateReforgeDragonName: (value) => {
            dispatch(updateReforgeDragonName(value));
        },
        onUpdateReforgeDragonId: (value) => {
            dispatch(updateReforgeDragonId(value));
        },
        onUpdateReforgeDragonFood: (value) => {
            dispatch(updateReforgeDragonFood(value));
        },
        onReforgeDragon: () => {
          dispatch(reforgeDragon());
        },
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
