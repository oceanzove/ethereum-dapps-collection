import {connect} from "react-redux";
import App from "./App";
import {addNewCandidate, updateCandidateName, updateVoterAddress, updateVoterCandidate} from "./redux/voterReducer";


const mapStateToProps = (state) => {
    return {
        voterPage: state.voterPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateCandidateName: (value) => {
            dispatch(updateCandidateName(value));
        },
        onUpdateVoterAddress: (value) => {
            dispatch(updateVoterAddress(value));
        },
        onUpdateVoterCandidate: (value) => {
            dispatch(updateVoterCandidate(value));
        },
        onAddNewCandidate: (candidate) => {
            dispatch(addNewCandidate(candidate));
        }
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
