import VoterContract from "../components/Contracts/VoterContract";

const UPDATE_CANDIDATE_NAME = 'UPDATE_CANDIDATE_NAME';
const ADD_NEW_CANDIDATE = 'ADD_NEW_CANDIDATE';
const UPDATE_VOTER_ADDRESS = 'UPDATE_VOTER_ADDRESS';
const CLEAR_VOTER_ADDRESS = 'CLEAR_VOTER_ADDRESS';
const UPDATE_VOTER_CANDIDATE = 'UPDATE_VOTER_CANDIDATE';
const VOTE_CANDIDATE = 'VOTE_CANDIDATE';

const voterContract = new VoterContract();
const voters = await voterContract.getCandidates().then(
    async (response) => {
        return Promise.all(response.map(async r => ({
            id: r.id.toString(),
            name: r.name,
            totalVotes: r.totalVotes.toString()
        })));
    }
);

let initialState = {
    newCandidateName: '',
    voterAddress: '',
    voterCandidate: '',
    candidates: voters
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CANDIDATE_NAME:
            return {
                ...state,
                newCandidateName: action.newValue
            }
        case UPDATE_VOTER_ADDRESS:
            return {
                ...state,
                voterAddress: action.newValue
            }
        case CLEAR_VOTER_ADDRESS:
            return {
                ...state,
                voterAddress: ''
            }
        case UPDATE_VOTER_CANDIDATE:
            return {
                ...state,
                voterCandidate: action.newValue
            }
        case ADD_NEW_CANDIDATE:
            const newCandidate = {
                id: action.candidate.id.toString(),
                name: action.candidate.name,
                totalVotes: action.candidate.totalVotes.toString()
            }
            return {
                ...state,
                newCandidateName: '',
                candidates: [...state.candidates, newCandidate]
            }
        case VOTE_CANDIDATE:
            return {
                ...state,
                voterAddress: '',
                candidates: state.candidates.map(candidate =>
                    candidate.id === action.candidateId
                        ? {...candidate, totalVotes: (parseInt(candidate.totalVotes) + 1).toString()}
                        : candidate
                )
            }
        default:
            return state
    }
}

export default reducer;

export const updateCandidateName = (value) => (
    {type: UPDATE_CANDIDATE_NAME, newValue: value}
);
export const updateVoterAddress = (value) => (
    {type: UPDATE_VOTER_ADDRESS, newValue: value}
);

export const clearVoterAddress = () => (
    {type: CLEAR_VOTER_ADDRESS}
);
export const updateVoterCandidate = (value) => (
    {type: UPDATE_VOTER_CANDIDATE, newValue: value}
);

export const addNewCandidate = (candidate) => (
    {type: ADD_NEW_CANDIDATE, candidate: candidate}
)

export const voteCandidate = (candidateId) => (
    {type: VOTE_CANDIDATE, candidateId: candidateId}
)
