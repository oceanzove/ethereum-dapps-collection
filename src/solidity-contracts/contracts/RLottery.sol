// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract RLottery {
    struct Player {
        uint Num;
    }

    mapping(uint => Player) public players;

    function getTickets(uint Num) public payable {
        require(Num <= 10, "Уже зарегистрированно 10 игроков!");
        players[Num] = Player(Num);
    }

    function Winner() public view returns(uint) {
        uint length = 10;
        uint index;
        uint randomNumber = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, length))) % 10;
        index = randomNumber;
        return index;
    }
}
