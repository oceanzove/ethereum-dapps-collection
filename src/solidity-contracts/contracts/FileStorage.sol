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

    // TODO Сделай чтобы timestamp работал коректно, и не возращлся hash
    function uploadFile(bytes32 fileHash, string memory userName, string memory fileName) public returns (bytes32) {
        require(fileInfos[fileHash].timestamp == 0, "File already exists");

        FileInfo memory newFileInfo = FileInfo(block.timestamp, userName, fileName, fileHash);
        fileInfos[fileHash] = newFileInfo;

        emit FileUploaded(fileHash, block.timestamp, userName, fileName);

        return fileHash;
    }

    function getFileInfoByHash(bytes32 fileHash) public view returns (uint256, string memory, string memory, bytes32) {
        FileInfo memory info = fileInfos[fileHash];
        require(info.timestamp != 0, "File not found");

        return (info.timestamp, info.uploader, info.fileName, info.fileHash);
    }

    function getFileHash(bytes memory file) public pure returns (bytes32) {
        return keccak256(file);
    }
}
