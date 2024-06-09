// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BitwiseShifts {
  function shifts(
    string memory binaryNumber,
    string memory leftright,
    uint shift
  ) public pure returns (string memory) {
    if (keccak256(abi.encodePacked(leftright)) == keccak256(abi.encodePacked("<<"))){
        return leftShift(binaryNumber, shift);
    } else if (keccak256((abi.encodePacked(leftright))) == keccak256(abi.encodePacked(">>"))) {
        return rightShift(binaryNumber, shift);
    } else {
      return "Invalid operator. Plesae use for left shift <<, for right shift >>";
    }
  }

  function leftShift(string memory inputNumber, uint shift) private pure returns (string memory) {
     bytes memory inputBytes = bytes(inputNumber);
        bytes memory shiftedBytes = new bytes(inputBytes.length);
        for (uint j = 0; j < inputBytes.length; j++) {
            uint shiftedIndex = (j - shift + inputBytes.length) % inputBytes.length;
            if (shiftedIndex > j) {
                shiftedBytes[shiftedIndex] = '0';
            } else {
                shiftedBytes[shiftedIndex] = inputBytes[j];
            }
        }
        string memory shiftedString = string(shiftedBytes);
        return shiftedString;
  }

  function rightShift(string memory inputNumber, uint shift) private pure returns (string memory) {
    bytes memory inputBytes = bytes(inputNumber);
        bytes memory shiftedBytes = new bytes(inputBytes.length);
        for (uint j = 0; j < inputBytes.length; j++) {
            uint shiftedIndex = (j + shift) % inputBytes.length;
            if (shiftedIndex < j) {
                shiftedBytes[shiftedIndex] = '0';
            } else {
                shiftedBytes[shiftedIndex] = inputBytes[j];
            }
        }
        string memory shiftedString = string(shiftedBytes);
        return shiftedString;
}
}
