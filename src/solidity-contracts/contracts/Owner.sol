// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract Owner {
  address owner;
  constructor() public {
    owner = msg.sender;
  }
  struct user {
    string name;
    string number;
    uint age;
  }
  mapping(string => user) public users;

  function setUser(string memory name, string memory number,uint age) public {
    require(msg.sender == owner, "Note Owner");
    users[name] = user(name,number,age);
  }

  function getUser(string memory name) public view returns(user memory) {
    require(msg.sender == owner, "Note Owner");
    return users[name];
  }
}