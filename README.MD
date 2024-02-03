## Практическая работа №11
### Децентрализованное приложения для голосовние VotingDapp


Для запуска кошельков команда: 
```
node_modules/.bin/ganache-cli

node_modules/.bin/solcjs --bin --abi Voting.sol
```

Затем откройте новый терминал (не закрывая старый) и введите следующие команды:
```
node
Web3 = require('web3')
web3 = new Web3("http://localhost:8545")
```

Проверим, что библеотека web3 подключилась, наберем команду для отоброжение 
доступных адресов
```
web3.eth.getAccounts(console.log)
```

Для дальнейшей компиляции контракта зайгрутие байт-код и ABI из создный файлов.
Для этого в треминале выполним следующие кманды:
```
bytecode = fs.readFileSync('Voting_sol_Voting.bin').toString()
abi = JSON.parse(fs.readFileSync('Voting_sol_Voting.abi').toString())
```
```
deployedContract = new web3.eth.Contract(abi)
listOfCandidates = ['Рома', 'Олег', 'Иван']
```
```
deployedContract.deploy({
  data: bytecode,
  arguments: [listOfCandidates.map(name => web3.utils.stringToHex(name))]
}).send({
  from: 'ВСТАВЬТЕ ЗДЕСЬ ОДИН ИЗ 10 ДОСТУПНЫХ АККАУНТОВ',
  gas: 1500000,
  gasPrice: web3.utils.toWei('0.00003', 'ether')
}).then((newContractInstance) => {
  deployedContract.options.address = newContractInstance.options.address
  console.log(newContractInstance.options.address)
});
```
В результате нам прийдет адресс нашего откомпилированного контакта. Скопируйте его и вставьте
в файл Voting.js, также вставьте ABI из файла Voting_sol_Voting.abi.

