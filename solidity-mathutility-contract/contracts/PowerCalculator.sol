// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PowerCalculator {
  function calculatePower(uint base, uint exponent) public pure returns (uint) {
        return base ** exponent;
  }
}
