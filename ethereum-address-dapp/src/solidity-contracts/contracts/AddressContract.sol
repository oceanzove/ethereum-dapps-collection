// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract AddressContract {
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

  function getAll() public view returns (address[] memory) {
    address[] memory all = new address[](count);
    for (uint i = 0; i < count; i++) {
      all[i] = addresses[i];
    }
    return all;
  }
}
