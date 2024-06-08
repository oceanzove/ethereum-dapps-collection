// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract GenerateSeed {
    mapping(address => WalletInfo) private wallets;
    address[] private walletAddresses;

    struct WalletInfo {
        address walletAddress;
        bytes32 privateKey;
        uint balance;
    }

    event Transfer(address indexed from, address indexed to, uint256 amount);

    function sendEther(address _from, address _to, uint256 _amount) external {
        require(wallets[_from].balance >= _amount, "Insufficient balance");
        require(wallets[_to].walletAddress != address(0), "Recipient address not recognized");

        wallets[_from].balance -= _amount;
        wallets[_to].balance += _amount;

        emit Transfer(_from, _to, _amount);
    }

    function generateMultipleSeeds(uint _numberOfSeeds, string[] calldata _seeds) external {
        require(_numberOfSeeds <= _seeds.length, "Number of seeds does not match length of seeds array");

        for (uint j = 0; j < _numberOfSeeds; j++) {
            bytes32 seedHash = keccak256(abi.encode(_seeds[j]));
            address wallet = address(uint160(uint(keccak256(abi.encodePacked(_seeds[j], j)))));

            // Сохраняем информацию о кошельке
            wallets[wallet] = WalletInfo(wallet, seedHash, 100);
            walletAddresses.push(wallet);
        }
    }

    function getWallets() external view returns (WalletInfo[] memory) {
        WalletInfo[] memory allWallets = new WalletInfo[](walletAddresses.length);
        for (uint i = 0; i < walletAddresses.length; i++) {
            allWallets[i] = wallets[walletAddresses[i]];
        }
        return allWallets;
    }
}
