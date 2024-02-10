// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Factorial {
  function getFactorial(uint number) public view returns (uint256) {
    uint256 factorial = 1;
    for (uint i = 1; i <= number; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }
}
