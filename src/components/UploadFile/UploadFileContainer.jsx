import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import FileStorageContract from '../../../solidity-contracts/build/contracts/FileStorage.json';
import UploadFile from "./UploadFile";

const UploadFileContainer = () => {
    async function uploadFileToBlockchain(file, userName, fileName) {
        const web3 = new Web3(window.ethereum || 'http://localhost:7545');
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = FileStorageContract.networks[networkId];
        const contract = new web3.eth.Contract(FileStorageContract.abi, deployedNetwork && deployedNetwork.address);

        const accounts = await web3.eth.getAccounts();
        const fileBuffer = await file.arrayBuffer();
        const fileBytes = Array.from(new Uint8Array(fileBuffer));

        await contract.methods.uploadFile(fileBytes, userName, fileName).send({ from: accounts[0] });
    }

    const handleUploadButtonClick = async (selectedFile, userName) => {
        if (!selectedFile) {
            alert('Пожалуйста, выберите файл для загрузки.');
            return;
        }

        if (!userName) {
            alert('Пожалуйста, введите имя владельца файла.');
            return;
        }

        try {
            await uploadFileToBlockchain(selectedFile, userName, selectedFile.name);
            alert('Файл успешно загружен на блокчейн.');
        } catch (error) {
            console.error('Ошибка при загрузке файла на блокчейн:', error);
            alert('Произошла ошибка при загрузке файла на блокчейн.');
        }
    };

    return (
        <UploadFile uploadFile={handleUploadButtonClick} />
    )
}

export default UploadFileContainer;
