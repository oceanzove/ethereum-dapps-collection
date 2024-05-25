// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/*
* При необходимости возвращать из блокчейна массивы структур, нужно прописать строчку ниже
*/
//pragma experimental ABIEncoderV2;

contract Insurance {

    address payable public hospital;
    address payable public insurer;

    struct Record {
        address addr;
        uint256 id;
        string name;
        string date;
        uint256 price;
        bool isValue;
        uint256 signatureCount;
        mapping (address => uint256) signatures;
    }

    modifier signOnly {
        require(msg.sender == hospital || msg.sender == insurer);
        _;
    }

    mapping (uint256 => Record) public all_records;
    uint256[] public recordsArr;

    event recordCreated(uint256 id, string name, string date, uint256 price);
    event recordSigned(uint256 id, string name, string date, uint256 price);

    function setInsurerAddress() public  {
        insurer = msg.sender;
    }

    function setHospitalAddress() public  {
        hospital = msg.sender;
    }

    function newRecord (uint256 _id, string memory _name, string memory _date, uint256 _price) public {
        Record storage newRecord = all_records[_id];
        require(!all_records[_id].isValue);
        newRecord.addr = msg.sender;
        newRecord.id = _id;
        newRecord.name = _name;
        newRecord.date = _date;
        newRecord.price = _price;
        newRecord.isValue = true;
        newRecord.signatureCount = 0;
        recordsArr.push(_id);
        emit recordCreated(newRecord.id, _name, _date, _price);
    }

    function signRecord(uint256 _id) signOnly public payable {
        Record storage records = all_records[_id];
        require(records.signatures[msg.sender] != 1);
        records.signatureCount++;
        emit recordSigned(records.id, records.name, records.date, records.price);
        if (records.signatureCount >= 2) {
            insurer.transfer(address(this).balance);
        }
    }
    // Функция для получения последнего ID
    function getLastId() public view returns (uint256) {
        if (recordsArr.length == 0) {
            return 0;
        }
        return recordsArr[recordsArr.length - 1];
    }

    // Функция для возврата всех идентификаторов записей
    function getAllRecordIds() public view returns (uint256[] memory) {
        return recordsArr;
    }

    // Функция для получения информации о записи по ID
    function getRecordById(uint256 _id) public view returns (address, uint256, string memory, string memory, uint256, bool, uint256) {
        Record storage rec = all_records[_id];
        require(rec.isValue, "Record does not exist");
        return (rec.addr, rec.id, rec.name, rec.date, rec.price, rec.isValue, rec.signatureCount);
    }
}
