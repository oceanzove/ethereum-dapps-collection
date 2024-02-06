// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FileStorage {
    struct FileInfo {
        uint256 timestamp;
        string uploader;
        string fileName;
        bytes32 fileHash;
    }

    mapping(bytes32 => FileInfo) public fileInfos;

    event FileUploaded(bytes32 indexed fileHash, uint256 timestamp, string uploader, string fileName);

    function uploadFile(bytes memory file, string memory userName, string memory fileName) public returns (bytes32) {
        bytes32 fileHash = keccak256(file);
        require(fileInfos[fileHash].timestamp == 0, "File already exists");

        FileInfo memory newFileInfo = FileInfo(block.timestamp, userName, fileName, fileHash);
        fileInfos[fileHash] = newFileInfo;

        emit FileUploaded(fileHash, block.timestamp, userName, fileName);

        return fileHash;
    }

    function getFileInfo(bytes memory file) public view returns (uint256, string memory, string memory, bytes32) {
        bytes32 fileHash = keccak256(file);
        FileInfo memory info = fileInfos[fileHash];
        require(info.timestamp != 0, "File not found");

        return (info.timestamp, info.uploader, info.fileName, info.fileHash);
    }
}
