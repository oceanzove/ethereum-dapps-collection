// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Converter {
    function BinaryToDecimal(uint256 binaryNumber)
        public
        pure
        returns (uint256)
    {
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

    function OctagonalToDecimal(uint256 octagonalNumber)
        public
        pure
        returns (uint256)
    {
        uint256 decimalNumber = 0;
        uint256 base = 1;
        uint256 temp = octagonalNumber;

        while (temp > 0) {
            uint256 lastDigit = temp % 10;
            temp = temp / 10;
            decimalNumber += lastDigit * base;
            base = base * 8;
        }
        return decimalNumber;
    }

    function DecimalToBinary(uint256 binaryNumberTwo)
        public
        pure
        returns (uint256)
    {
        uint256 decimalNumber = 0;
        uint256 base = 1;
        uint256 temp = binaryNumberTwo;

        while (temp > 0) {
            uint256 lastDigit = temp % 2;
            temp = temp / 2;
            decimalNumber += lastDigit * base;
            base = base * 10;
        }
        return decimalNumber;
    }

    function DecimalToHexadecimal(uint16 decimalNumber)
        public
        pure
        returns (string memory)
    {
        require(decimalNumber >= 0 && decimalNumber <= 65535);

        string memory hexString = toHexString(decimalNumber);
        return hexString;
    }

    function toHexString(uint16 decimalNumber)
        internal
        pure
        returns (string memory)
    {
        bytes memory buffer = new bytes(4);
        uint256 mask = 15;

        for (uint256 i = 0; i < 4; i++) {
            uint256 digit = decimalNumber & mask;
            buffer[3 - i] = toHexChar(digit);
            decimalNumber >>= 4;
        }
        return string(buffer);
    }

    function toHexChar(uint256 digit) internal pure returns (bytes1) {
        if (digit < 10) {
            return bytes1(uint8(digit) + 48);
        } else {
            return bytes1(uint8(digit - 10 + 65));
        }
    }
}
