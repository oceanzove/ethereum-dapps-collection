// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract NewNote {
    struct user {
        string name;
        string number;
        address userAddress;
    }
    mapping(string => user) public users;

    function setUser(string memory name, string memory number, address userAddress) public {
        users[name] = user(name,number,userAddress);
    }

    function getUser(string memory name) public view returns(user memory) {
        return users[name];
    }
}
