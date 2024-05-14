// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract DragonFarm {
    event NewDragon(uint id, string name, uint dna);

    struct Dragon {
        uint id;
        string name;
        uint dna;
    }

    Dragon[] public dragons;
    mapping(uint => address) public DragonOwner;
    mapping(address => uint) public ownerDragons;
    uint private count;

    function GenerateRandomDna(string memory _str) public pure returns (uint) {
        uint rand = uint(keccak256(abi.encode(_str)));
        return rand % (10 ** 16);
    }

    function AddDragon(string memory _name, uint _dna) public {
        uint id = ownerDragons[msg.sender];
        dragons.push(Dragon(id, _name, _dna));
        emit NewDragon(id, _name, _dna);
        DragonOwner[id] = msg.sender;
        count++;
        ownerDragons[msg.sender]++;
    }

    function getDragonByIndex(uint _index) public view returns (uint id, string memory name, uint dna) {
        require(_index < dragons.length, "Dragon index out of bounds");
        Dragon memory dragon = dragons[_index];
        return (dragon.id, dragon.name, dragon.dna);
    }

    function Reforge(string memory name, uint id, uint food) public payable {
        require(msg.value > 0, "Pay for the food!");
        require(DragonOwner[id] == msg.sender, "You do not own this dragon!");

        uint brains = uint(keccak256(abi.encode(food)));
        brains = brains % (10 ** 16);
        uint newDna = (id + brains) / 2;

        dragons.push(Dragon(id, name, newDna));
        emit NewDragon(id, name, newDna);
        DragonOwner[id] = msg.sender;
        count++;
        ownerDragons[msg.sender]++;
    }
}

