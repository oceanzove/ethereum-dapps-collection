var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var account;
var abi;
var contract;
var candidates;
var voteForCandidate;

web3.eth.getAccounts().then((f) => {
    account = f[0];

    // Вставьте abi из созданного файла Voting_sol_Voting.abi
    abi = JSON.parse('[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');

    contract = new web3.eth.Contract(abi);
    // Сюда вставьте адресс контракта, как его получить смотреть в файл README
    contract.options.address = "0x2315C55Be20F30257558686039375653d2db398e";

    candidates = {"Рома": "candidate-1", "Олег": "candidate-2", "Иван": "candidate-3"}

    voteForCandidate = function() {
        var candidateName = $("#candidate").val();
        console.log(candidateName);

        contract.methods.voteForCandidate(web3.utils.stringToHex(candidateName)).send({from: account}).then((f) => {
            console.log(f);
            let div_id = candidates[candidateName];
            contract.methods.totalVotesFor(web3.utils.stringToHex(candidateName)).call().then((f) => {
             console.log(f);
             $("#" + div_id).html(f);
            })
        })
    }

    $(document).ready(function() {
        var candidateNames = Object.keys(candidates);

        for(var i=0; i<candidateNames.length; i++) {
            let name = candidateNames[i];
            
            contract.methods.totalVotesFor(web3.utils.stringToHex(name)).call().then((f) => {
                $("#" + candidates[name]).html(f);
            })
        }
    });
});
