// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Address {
  mapping(uint => address)  addresses;
  uint count;

  function set(address userAddress) public {
    addresses[count] = userAddress;
    count++;
  }

  function get(address userAddress) public view returns (uint) {
    for(uint i = 0; i < count; i++) {
      if(addresses[i] == userAddress){
        return i;
      }
    }
    return 0;
  }
}
