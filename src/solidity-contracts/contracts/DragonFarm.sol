// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract DragonFarm {
    event NewDragon(string name, uint dna);

    struct Dragon {
        string name;
        uint dna;
    }
    Dragon[] public dragons;
    uint private count;

    function GenerateRandomDna(string memory _str) private pure returns (uint) {
        uint rand = uint(keccak256(abi.encode(_str)));
        return rand % (10 ** 16);
    }

    function AddDragon(string memory _name, uint _dna) private {
        dragons.push(Dragon(_name, _dna));
        emit  NewDragon(_name, _dna);
        count++;
    }
    function CreateDragon(string memory _name) public {
        uint randDna = GenerateRandomDna(_name);
        AddDragon(_name, randDna);
    }

    function GetAllDragons() public view returns (Dragon[] memory) {
        Dragon[] memory allDragons = new Dragon[](count);
        for (uint i = 0; i < count; i++) {
            allDragons[i] = dragons[i];
        }
        return allDragons;
    }
}
