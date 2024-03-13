// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract Voter {

    struct Candidate {
        uint id;
        string name;
        uint totalVotes;
    }

    mapping(address => bool) private voters;
    mapping(uint => Candidate) public candidates;
    uint private count;

    event votedEvent (
        uint indexed candidateId
    );

    function addCandidate(string memory new_name) public {
        count++;
        candidates[count] = Candidate(count, new_name, 0);
    }

    function vote(uint candidateId) public {
        require(!voters[msg.sender]);
        require(candidateId > 0 && candidateId <= count);

        voters[msg.sender] = true;
        candidates[candidateId].totalVotes ++;
        emit votedEvent(candidateId);
    }

    function getAll() public view returns (Candidate[] memory) {
        Candidate[] memory all = new Candidate[](count);
        for (uint i = 1; i <= count; i++) {
            all[i - 1] = candidates[i];
        }
        return all;
    }

    function getLastCandidate() public view returns (Candidate memory) {
        require(count > 0, "No candidates available");
        return candidates[count];
    }

}
