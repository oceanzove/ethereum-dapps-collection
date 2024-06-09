// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BitwiseCalculator {
    function calculate(
        string memory x,
        string memory oper,
        string memory y
    ) public pure returns (string memory) {
        
        if (keccak256(abi.encodePacked(oper)) == keccak256(abi.encodePacked("AND"))){
            return bitwiseAND(x, y);
        }
        else if (keccak256(abi.encodePacked(oper)) == keccak256(abi.encodePacked("OR"))){
            return bitwiseOR(x, y);
        }
        else if (keccak256(abi.encodePacked(oper)) == keccak256(abi.encodePacked("NOT"))){
             return bitwiseNOT(x);
        }
        else if (keccak256(abi.encodePacked(oper)) == keccak256(abi.encodePacked("NAND"))){
            return bitwiseNAND(x, y);
        }
        else if (keccak256(abi.encodePacked(oper)) == keccak256(abi.encodePacked("NOR"))){
            return bitwiseNOR(x, y);
        }
        else if (keccak256(abi.encodePacked(oper)) == keccak256(abi.encodePacked("XOR"))){
            return bitwiseXOR(x, y);
        }
        return "Invalid operator. Please use AND, OR, NOT, NAND, NOR or XOR";
    }

    function bitwiseAND(string memory inputX, string memory inputY) private pure returns (string memory) {
        bytes memory inputBytesX = bytes(inputX);
        bytes memory inputBytesY = bytes(inputY);
        bytes memory outputBytes = new bytes(inputBytesX.length);

        for (uint256 i = 0; i < inputBytesX.length; i++) {
            if (inputBytesX[i] == '1' && inputBytesY[i] == '1') {
                outputBytes[i] = '1';
            } else {
                outputBytes[i] = '0';
            }
        }
        return string(outputBytes);

    }

    function bitwiseOR(string memory inputX, string memory inputY) private pure returns (string memory) {
        bytes memory inputBytesX = bytes(inputX);
        bytes memory inputBytesY = bytes(inputY);
        bytes memory outputBytes = new bytes(inputBytesX.length);

        for (uint256 i = 0; i < inputBytesX.length; i++) {
            if (inputBytesX[i] == '0' && inputBytesY[i] == '0') {
                outputBytes[i] = '0';
            } else {
                outputBytes[i] = '1';
            }
        }
        return string(outputBytes);

    }

    function bitwiseNOT(string memory input) private pure returns (string memory) {
        bytes memory inputBytes = bytes(input);
        bytes memory outputBytes = new bytes(inputBytes.length);

        for (uint256 i = 0; i < inputBytes.length; i++) {
            if (inputBytes[i] == '0') {
                outputBytes[i] = '1';
            } else if (inputBytes[i] == '1') {
                outputBytes[i] = '0';
            } else {
                revert("Invalid input. Please provide a valid binary number.");
            }
        }

        return string(outputBytes);
    }

    function bitwiseNAND(string memory inputX, string memory inputY) private pure returns (string memory) {
        bytes memory inputBytesX = bytes(inputX);
        bytes memory inputBytesY = bytes(inputY);
        bytes memory outputBytes = new bytes(inputBytesX.length);

        for (uint256 i = 0; i < inputBytesX.length; i++) {
            if (inputBytesX[i] == '1' && inputBytesY[i] == '1') {
                outputBytes[i] = '0';
            } else {
                outputBytes[i] = '1';
            }
        }
        return string(outputBytes);

    }

    function bitwiseNOR(string memory inputX, string memory inputY) private pure returns (string memory) {
        bytes memory inputBytesX = bytes(inputX);
        bytes memory inputBytesY = bytes(inputY);
        bytes memory outputBytes = new bytes(inputBytesX.length);

        for (uint256 i = 0; i < inputBytesX.length; i++) {
            if (inputBytesX[i] == '0' && inputBytesY[i] == '0') {
                outputBytes[i] = '1';
            } else {
                outputBytes[i] = '0';
            }
        }
        return string(outputBytes);

    }

    function bitwiseXOR(string memory inputX, string memory inputY) private pure returns (string memory) {
        bytes memory inputBytesX = bytes(inputX);
        bytes memory inputBytesY = bytes(inputY);
        bytes memory outputBytes = new bytes(inputBytesX.length);

        for (uint256 i = 0; i < inputBytesX.length; i++) {
            if (inputBytesX[i] == inputBytesY[i]) {
                outputBytes[i] = '0';
            } else if (inputBytesX[i] != inputBytesY[i]) {
                outputBytes[i] = '1';
            } else {
                revert("Invalid input. Please provide a valid binary number.");
            }
        }
        return string(outputBytes);

    }


}
