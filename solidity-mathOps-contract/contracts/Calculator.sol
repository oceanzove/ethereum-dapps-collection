// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Calculator {
    function calculate(
        uint256 x,
        string memory oper,
        uint256 y
    ) public pure returns (uint256, string memory) {
        if(keccak256(abi.encodePacked(oper)) == (keccak256(abi.encodePacked("+")))){
          return (x + y, "Operation completed successfully");
        }
        else if(keccak256(abi.encodePacked(oper)) == (keccak256(abi.encodePacked("-")))){
          return (x - y, "Operation completed successfully");
        }
        else if(keccak256(abi.encodePacked(oper)) == (keccak256(abi.encodePacked("*")))){
          return (x * y, "Operation completed successfully");
        }
        else if(keccak256(abi.encodePacked(oper)) == (keccak256(abi.encodePacked("/")))){
          return (x / y, "Operation completed successfully");
        }
        else if (keccak256(abi.encodePacked(oper)) == (keccak256(abi.encodePacked("^")))){
          return (x ** y, "Operation completed successfully");
        }
        else {
            return(0, "Invalid operator. Please use +, -, ^, * or /");
        }
    }
}
