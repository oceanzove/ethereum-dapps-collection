// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Dice {
    function getRandomNumbers() public view returns (uint[2] memory) {
        uint[2] memory result;
        for (uint i = 0; i < 2; i++) {
            uint roll = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, i))) % 6;
            result[i] = roll + 1; // изменено с 2 на 1, чтобы числа были от 1 до 6
        }
        return result;
    }

    function Winner() public view returns(uint[2][2] memory) {
        uint[2] memory player1 = getRandomNumbers();
        uint[2] memory player2 = getRandomNumbers();
        return [player1, player2];
    }
}
