// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './SafeMath.sol';

contract BankDeposit {
    using SafeMath for uint;

    mapping(address => uint) public userDeposit;
    mapping(address => uint) public balance;
    mapping(address => uint) public time;
    mapping(address => uint) public percentWithdraw;
    mapping(address => uint) public allPercentWithdraw;
    uint public stepTime = 0.01 hours;

    event Invest(address investor, uint256 amount);
    event Withdraw(address investor, uint256 amount);

    modifier userExist() {
        require(balance[msg.sender] > 0, "User not found");
        _;
    }

    modifier checkTime() {
        require(now >= time[msg.sender].add(stepTime), "Payout request too fast");
        _;
    }

    function bankAccount() public payable {
        require(msg.value >= .001 ether);
    }

    function collectPercent() userExist checkTime public {
        if ((balance[msg.sender].multiply(2)) <= allPercentWithdraw[msg.sender]) {
            balance[msg.sender] = 0;
            time[msg.sender] = 0;
            percentWithdraw[msg.sender] = 0;
        } else {
            uint payout = payoutAmount();
            percentWithdraw[msg.sender] = percentWithdraw[msg.sender].add(payout);
            allPercentWithdraw[msg.sender] = allPercentWithdraw[msg.sender].add(payout);
            msg.sender.transfer(payout);
            emit Withdraw(msg.sender, payout);
        }
    }

    function deposit() public payable {
        if (msg.value > 0) {
            if (balance[msg.sender] > 0 && now > time[msg.sender].add(stepTime)) {
                collectPercent();
                percentWithdraw[msg.sender] = 0;
            }
            balance[msg.sender] = balance[msg.sender].add(msg.value);
            time[msg.sender] = now;
            emit Invest(msg.sender, msg.value);
        }
    }

    function percentRate() public view returns (uint) {
        if (balance[msg.sender] < 10 ether) {
            return 5;
        }
        if (balance[msg.sender] >= 10 ether && balance[msg.sender] < 20 ether) {
            return 7;
        }
        if (balance[msg.sender] >= 20 ether && balance[msg.sender] < 30 ether) {
            return 8;
        }
        if (balance[msg.sender] >= 30 ether) {
            return 9;
        } else {
            return 0;
        }
    }

    function payoutAmount() public view returns (uint256) {
        uint percent = percentRate();
        uint different = block.timestamp.subtract(time[msg.sender]).divide(stepTime);
        uint rate = balance[msg.sender].divide(100).multiply(percent);
        uint withdrawalAmount = rate.multiply(different).subtract(percentWithdraw[msg.sender]);
        return withdrawalAmount;
    }

    function returnDeposit() public {
        uint withdrawalAmount = balance[msg.sender];
        balance[msg.sender] = 0;
        time[msg.sender] = 0;
        percentWithdraw[msg.sender] = 0;
        msg.sender.transfer(withdrawalAmount);
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getRemainingTime() public view returns (uint256) {
        if (now >= time[msg.sender].add(stepTime)) {
            return 0;
        } else {
            return time[msg.sender].add(stepTime).subtract(now);
        }
    }
}
