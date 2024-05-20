// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './SafeMath.sol';

contract BankDeposit {
    using SafeMath for uint;

    address payable public owner;
    bool private ownerSet = false;

    mapping(address => uint) public userDeposit;
    mapping(address => uint) public balance;
    mapping(address => uint) public time;
    mapping(address => uint) public percentWithdraw;
    mapping(address => uint) public allPercentWithdraw;
    uint public stepTime = 0.05 hours;

    event Invest(address investor, uint256 amount);
    event Withdraw(address investor, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier userExist() {
        require(balance[owner] > 0, "User not found");
        _;
    }

    modifier checkTime() {
        require(block.timestamp >= time[owner].add(stepTime), "Payout request too fast");
        _;
    }

    function bankAccount() public payable {
        require(msg.value >= .001 ether);

        if (!ownerSet) {
            owner = address(uint160(msg.sender));
            ownerSet = true;
        }
    }

    function collectPercent() userExist checkTime public {
        if ((balance[owner].multiply(2)) <= allPercentWithdraw[owner]) {
            balance[owner] = 0;
            time[owner] = 0;
            percentWithdraw[owner] = 0;
        } else {
            uint payout = payoutAmount();
            percentWithdraw[owner] = percentWithdraw[owner].add(payout);
            allPercentWithdraw[owner] = allPercentWithdraw[owner].add(payout);
            owner.transfer(payout);
            emit Withdraw(owner, payout);
        }
    }

    function deposit() public payable onlyOwner {
        if (msg.value > 0) {
            if (balance[owner] > 0 && block.timestamp > time[owner].add(stepTime)) {
                collectPercent();
                percentWithdraw[owner] = 0;
            }
            balance[owner] = balance[owner].add(msg.value);
            time[owner] = block.timestamp;
            emit Invest(owner, msg.value);
        }
    }

    function percentRate() public view returns (uint) {
        if (balance[owner] < 10 ether) {
            return 5;
        }
        if (balance[owner] >= 10 ether && balance[owner] < 20 ether) {
            return 7;
        }
        if (balance[owner] >= 20 ether && balance[owner] < 30 ether) {
            return 8;
        }
        if (balance[owner] >= 30 ether) {
            return 9;
        } else {
            return 0;
        }
    }

    function payoutAmount() public view returns (uint256) {
        uint percent = percentRate();
        uint different = block.timestamp.subtract(time[owner]).divide(stepTime);
        uint rate = balance[owner].divide(100).multiply(percent);
        uint withdrawalAmount = rate.multiply(different).subtract(percentWithdraw[owner]);
        return withdrawalAmount;
    }

    function returnDeposit() public onlyOwner {
        uint withdrawalAmount = balance[owner];
        balance[owner] = 0;
        time[owner] = 0;
        percentWithdraw[owner] = 0;
        owner.transfer(withdrawalAmount);
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getRemainingTime() public view returns (uint256) {
        if (block.timestamp >= time[owner].add(stepTime)) {
            return 0;
        } else {
            return time[owner].add(stepTime).subtract(block.timestamp);
        }
    }

    function setDepositTime(uint _time) public onlyOwner userExist {
        stepTime = _time;
    }
}
