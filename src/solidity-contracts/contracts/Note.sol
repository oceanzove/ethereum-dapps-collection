// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract Note {
    struct note {
        string name;
        string number;
        address noteAddress;
    }

    mapping(uint256 => note) public notes;

    function set(string memory newName, string memory newNumber, address newAddress) public {
        notes[0] = note(newName, newNumber, newAddress);
    }

    function get() public view returns (note memory) {
        return notes[0];
    }
}
