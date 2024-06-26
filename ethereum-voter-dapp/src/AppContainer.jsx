import {connect} from "react-redux";
import App from "./App";
import {
    addNewCandidate, clearVoterAddress,
    updateCandidateName,
    updateVoterAddress,
    updateVoterCandidate,
    voteCandidate
} from "./redux/reducer";


const mapStateToProps = (state) => {
    return {
        page: state.page
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
        onClearVoterAddress: () => {
            dispatch(clearVoterAddress())
        },
        onUpdateVoterCandidate: (value) => {
            dispatch(updateVoterCandidate(value));
        },
        onAddNewCandidate: (candidate) => {
            dispatch(addNewCandidate(candidate));
        },
        onVoteCandidate: (candidateId) => {
            dispatch(voteCandidate(candidateId));
        }
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
