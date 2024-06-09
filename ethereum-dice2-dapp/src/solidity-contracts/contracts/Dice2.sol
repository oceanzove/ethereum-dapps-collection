pragma solidity >=0.4.22 <0.9.0;

contract Dice2 {
    struct Bet {
        address player;
        uint amount;
    }

    Bet[] public bets;
    uint public totalPot;

    function enter() public payable {
        require(msg.value >= 0.001 ether, "Ставка слишком мала!");
        bets.push(Bet(msg.sender, msg.value));
        totalPot += msg.value;
    }

    function rollDices(uint[] memory numbers) public payable returns (uint[2][2] memory, address payable) {
        require(numbers.length == 4, "The input array must contain exactly 4 numbers");

        uint[2][2] memory rolled;
        for (uint i = 0; i < 2; i++) {
            for (uint j = 0; j < 2; j++) {
                uint256 seed = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, numbers[i * 2 + j])));
                rolled[i][j] = (seed % 6) + 1; // Roll a number between 1 and 6
            }
        }

        // Определение победителя
        address payable winner;
        if (rolled[0][0] + rolled[0][1] > rolled[1][0] + rolled[1][1]) {
            winner = payable(address(uint160(address(bets[0].player))));
        } else if (rolled[0][0] + rolled[0][1] < rolled[1][0] + rolled[1][1]) {
            winner = payable(address(uint160(bets[1].player)));
        } else {
            // Ничья - возврат ставок
            for (uint i = 0; i < bets.length; i++) {
                address payable playerAddress = payable(address(uint160(bets[i].player)));
                playerAddress.transfer(bets[i].amount);
            }
            totalPot = 0;
            delete bets;
            return (rolled, payable(address(0)));
        }

        // Отправка выигрыша победителю
        winner.transfer(totalPot);
        totalPot = 0;
        delete bets;

        return (rolled, winner);
    }
}
