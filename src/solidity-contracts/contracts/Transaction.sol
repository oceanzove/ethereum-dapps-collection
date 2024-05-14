// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/*
* При необходимости возвращать из блокчейна массивы структур, нужно прописать строчку ниже
*/
//pragma experimental ABIEncoderV2;

contract Transaction {
    address public owner;
    mapping (address => uint) public balances;
    event Sent(address from, address to, uint amount);

    constructor() public {
        owner = msg.sender;
    }

    function coin(address receiver, uint amount) public {
        require(msg.sender == owner, "access denied");
        require(amount < 1e60, "too much money");
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) public {
        require(amount <= balances[msg.sender], "insufficient funds");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}
