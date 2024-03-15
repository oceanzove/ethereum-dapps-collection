// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Dice {
    function getRandomNumber(uint number) public view returns (uint) {
        uint roll = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, number))) % 10;
        roll = roll + 2;
        return (roll);
    }

    function Winner() public view returns(uint[2] memory) {
        uint player1 = getRandomNumber(0);
        uint player2 = getRandomNumber(1);
        return [player1, player2];
    }
}
