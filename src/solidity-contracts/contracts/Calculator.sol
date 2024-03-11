// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Calculator {
    function calculate(
        uint256 x,
        string memory operator,
        uint256 y
    ) public pure returns (uint256) {
        if(keccak256(abi.encodePacked(operator)) == (keccak256(abi.encodePacked("+")))){
            return (x + y);
        }
        else if(keccak256(abi.encodePacked(operator)) == (keccak256(abi.encodePacked("-")))){
            return (x - y);
        }
        else if(keccak256(abi.encodePacked(operator)) == (keccak256(abi.encodePacked("*")))){
            return (x * y);
        }
        else if(keccak256(abi.encodePacked(operator)) == (keccak256(abi.encodePacked("/")))){
            return (x / y);
        }
        else if (keccak256(abi.encodePacked(operator)) == (keccak256(abi.encodePacked("^")))){
            return (x ** y);
        }
        else {
            return(0);
        }
    }
}
