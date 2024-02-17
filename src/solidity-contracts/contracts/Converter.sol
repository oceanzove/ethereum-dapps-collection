// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Converter {
    function binaryToDecimal(uint256 binaryNumber) public pure returns (uint256) {
        uint256 decimalNumber = 0;
        uint256 base = 1;
        uint256 temp = binaryNumber;

        while (temp > 0) {
            uint256 lastDigit = temp % 10;
            temp = temp / 10;
            decimalNumber += lastDigit * base;
            base = base * 2;
        }
        return decimalNumber;
    }

    function octagonalToDecimal(uint256 octagonalNumber) public pure returns (uint256) {
        uint256 decimalNumber = 0;
        uint256 base = 1;
        uint256 tempOctalNumber = octagonalNumber;

        while (tempOctalNumber != 0) {
            uint256 lastDigit = tempOctalNumber % 10;
            tempOctalNumber = tempOctalNumber / 10;
            decimalNumber += lastDigit * base;
            base *= 8;
        }

        return decimalNumber;
    }
}
