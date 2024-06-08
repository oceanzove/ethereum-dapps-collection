// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract GenerateSeed {
    address public owner;
    mapping(address => uint) public balances;
    mapping(address => WalletInfo) public wallets;
    address[] public walletAddresses;

    struct WalletInfo {
        address walletAddress;
        bytes32 privateKey;
        uint balance;
    }

    constructor() public {
        owner = msg.sender;
        balances[owner] = 100;
    }

    function sendEther(address payable _to, uint256 _amount) external {
        require(balances[msg.sender] >= _amount, "Insufficient balance");

        balances[msg.sender] -= _amount;
        balances[_to] += _amount;

        _to.transfer(_amount);
    }

    function generateMultipleSeeds(uint _numberOfSeeds, string[] calldata _seeds) external {

        for (uint j = 0; j < _numberOfSeeds.length; j++) {
            bytes32 seedHash = keccak256(abi.encode(_seeds[j]));
            address wallet = address(uint160(uint(seedHash)));

            // Сохраняем информацию о кошельке
            wallets[wallet] = WalletInfo(wallet, seedHash, 100);
            walletAddresses.push(wallet); // Добавляем адрес кошелька в массив
        }
    }

    // Метод для получения списка всех кошельков
    function getWallets() external view returns (WalletInfo[] memory) {
        WalletInfo[] memory allWallets = new WalletInfo[](walletAddresses.length);
        for (uint i = 0; i < walletAddresses.length; i++) {
            allWallets[i] = wallets[walletAddresses[i]];
        }
        return allWallets;
    }

    // Метод для получения информации о кошельке по адресу
    function getWallet(address _walletAddress) external view returns (WalletInfo memory) {
        return wallets[_walletAddress];
    }
}
