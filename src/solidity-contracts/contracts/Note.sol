// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Note {
    string public name;
    string public number;
    string public adress;

    function set(string memory newName, string memory newNumber, string memory newAdress) public {
        name = newName;
        number = newNumber;
        adress = newAdress;
    }

    function get() public view returns (string memory, string memory, string memory) {
        return (name,number,adress);
    }
}
