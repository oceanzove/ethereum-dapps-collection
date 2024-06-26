// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/*
* При необходимости возвращать из блокчейна массивы структур, нужно прописать строчку ниже
*/
//pragma experimental ABIEncoderV2;

contract MyCoin {
    address public owner;
    string public name;
    string public symbol;
    uint256 public totalCoins;

    mapping (address => uint256) public balance;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function coin() public {
        owner = msg.sender;
        name = "ZoveCoin";
        symbol = "ZV";
        totalCoins = 1000;
        balance[owner] = totalCoins;
    }

    function totalSupple() view public returns (uint256) {
        return totalCoins;
    }

    function balanceOf(address _owner) view public returns (uint256) {
        return balance[_owner];
    }

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(balance[msg.sender] >= _value, "Insufficient balance");

        balance[msg.sender] -= _value;
        balance[_to] += _value;

        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}
