// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/*
* При необходимости возвращать из блокчейна массивы структур, нужно прописать строчку ниже
*/
//pragma experimental ABIEncoderV2;

contract Donation {
    address payable public owner;
    address [] public donators;

    constructor() public {
        owner = msg.sender;
    }

    function gatherDonation() public payable  {
        require(msg.value >= .001 ether);
        donators.push(msg.sender);
    }

    function transferToOwner() external  {
        require(msg.sender == owner);
        owner.transfer(address(this).balance);
    }

    function getDonators() public view returns (address[] memory) {
        return donators;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
