import VoterContract from "../components/Contracts/VoterContract";

const UPDATE_CANDIDATE_NAME = 'UPDATE_CANDIDATE_NAME';
const ADD_NEW_CANDIDATE = 'ADD_NEW_CANDIDATE';
const UPDATE_VOTER_ADDRESS = 'UPDATE_VOTER_ADDRESS';
const UPDATE_VOTER_CANDIDATE = 'UPDATE_VOTER_CANDIDATE';

const voterContract = new VoterContract();
const voters = await voterContract.getCandidates();
console.log(voters);


let initialState = {
    newCandidateName: '',
    voterAddress: '',
    voterCandidate: '',
    voters: []
}


//const addressContract = new AddressContract();
// const addresses = await addressContract.getAllAddress().then(
//     async (result) => {
//         return Promise.all(result.map(async (address, index) => ({
//             index: index,
//             address: address
//         })));
//     }
// );
// 0: uint256: id 2
// 1: string: name Миша
// 2: uint256: totalVotes 1

const voterReducer = (state = initialState, action) => {
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
        case UPDATE_VOTER_CANDIDATE:
            return {
                ...state,
                voterCandidate: action.newValue
            }
        case ADD_NEW_CANDIDATE:
            return {
                ...state,
                newCandidateName: '',
                voters: [...state.voters, action.candidate]
            }

        default:
            return state
    }
}

export default voterReducer;

export const updateCandidateName = (value) => (
    {type: UPDATE_CANDIDATE_NAME, newValue: value}
);
export const updateVoterAddress = (value) => (
    {type: UPDATE_VOTER_ADDRESS, newValue: value}
);
export const updateVoterCandidate = (value) => (
    {type: UPDATE_VOTER_CANDIDATE, newValue: value}
);

export const addNewCandidate = (candidate) => (
    {type: ADD_NEW_CANDIDATE, candidate: candidate}
)
