// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CustomConverter {
    function Converter(
        string memory number,
        uint8 from,
        uint8 to
    ) public pure returns (string memory) {
        require(from >= 2 && from <= 16);
        require(to >= 2 && to <= 16);

        uint256 decimalNumber = FromConversionToDecimal(number, from);
        return ToConversionToDecimal(decimalNumber, to);
    }

    function FromConversionToDecimal(string memory number, uint8 from)
    internal
    pure
    returns (uint256)
    {
        bytes memory digits = bytes(number);
        uint256 decimalNumber = 0;
        uint256 base = 1;

        for (uint256 i = digits.length; i > 0; i--) {
            uint256 digit = uint8(digits[i - 1]);
            if (digit >= 48 && digit <= 57) {
                digit -= 48;
            } else if (digit >= 65 && digit <= 70) {
                digit -= 55;
            }
            decimalNumber += digit * base;
            base *= from;
        }
        return decimalNumber;
    }

    function ToConversionToDecimal(uint256 decimalNumber, uint8 to)
    internal
    pure
    returns (string memory)
    {
        if (decimalNumber == 0) {
            return "0";
        }

        bytes memory result = new bytes(64);
        uint256 index = 0;
        while (decimalNumber > 0) {
            uint256 digit = decimalNumber % to;
            result[index++] = toHexChar(digit);
            decimalNumber /= to;
        }
        bytes memory baseConvert = new bytes(index);
        for (uint256 i = 0; i < index; i++) {
            baseConvert[i] = result[index - 1 - i];
        }
        return string(baseConvert);
    }

    function toHexChar(uint256 digit) internal pure returns (bytes1) {
        if (digit < 10) {
            return bytes1(uint8(digit) + 48);
        } else {
            return bytes1(uint8(digit - 10 + 65));
        }
    }
}
