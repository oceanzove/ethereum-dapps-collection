// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract ConverterAdvance {
    // Функция для перевода целого шестиразрядного числа из десятичной системы в шестнадцатеричную
    function decimalToHex(uint8 decimalNumber) public pure returns (string memory) {
        bytes memory buffer = new bytes(3); // 3 байта для шестиразрядного числа
        for (uint8 i = 0; i < 2; i++) {
            uint8 remainder = decimalNumber % 16;
            buffer[2 - i] = _toHexChar(remainder);
            decimalNumber /= 16;
        }
        buffer[0] = _toHexChar(decimalNumber);
        return string(buffer);
    }

    // Вспомогательная функция для преобразования числа в шестнадцатеричный символ
    function _toHexChar(uint8 value) private pure returns (bytes1) {
        if (value < 10) {
            return bytes1(uint8(bytes1("0")) + value);
        } else {
            return bytes1(uint8(bytes1("a")) + (value - 10));
        }
    }

    // Функция для перевода целого шестиразрядного числа из десятичной системы в двоичную
    function decimalToBinary(uint8 decimalNumber) public pure returns (string memory) {
        bytes memory buffer = new bytes(8); // 8 бит для шестиразрядного числа
        for (uint8 i = 0; i < 8; i++) {
            buffer[7 - i] = (decimalNumber >> i & 1) == 1 ? bytes1(uint8(bytes1("1"))) : bytes1(uint8(bytes1("0")));
        }
        return string(buffer);
    }
}