pragma solidity >=0.4.22 <0.9.0;

contract Dice {
    function rollDices(uint[] memory numbers) public view returns (uint[2][2] memory) {
        require(numbers.length == 4, "The input array must contain exactly 4 numbers");

        uint[2][2] memory rolled;
        for (uint i = 0; i < 2; i++) {
            for (uint j = 0; j < 2; j++) {
                uint256 seed = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, numbers[i * 2 + j])));
                rolled[i][j] = (seed % 6) + 1; // Roll a number between 1 and 6
            }
        }
        return rolled;
    }
}
