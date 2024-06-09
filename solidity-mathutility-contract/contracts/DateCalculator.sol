// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DateCalculator {
   function calculateDateDiff(string memory _date1, string memory _date2) public pure returns (uint256) {
    uint256 timestamp1 = dateStringToTimestamp(_date1);
    uint256 timestamp2 = dateStringToTimestamp(_date2);

    uint256 diffInSeconds;
    if (timestamp1 >= timestamp2) {
        diffInSeconds = timestamp1 - timestamp2;
    } else {
        diffInSeconds = timestamp2 - timestamp1;
    }

    uint256 diffInDays = diffInSeconds / 86400; // 1 day = 86400 seconds

    return diffInDays;
}

    function addDaysToDate(string memory _date, uint256 _days) public pure returns (string memory) {
        uint256 timestamp = dateStringToTimestamp(_date);
        timestamp += _days * 86400; // Convert days to seconds
        return timestampToDateString(timestamp);
    }

    function subtractDaysFromDate(string memory _date, uint256 _days) public pure returns (string memory) {
        uint256 timestamp = dateStringToTimestamp(_date);
        timestamp -= _days * 86400; // Convert days to seconds
        return timestampToDateString(timestamp);
    }

    function dateStringToTimestamp(string memory _dateString) internal pure returns (uint256) {
        bytes memory dateBytes = bytes(_dateString);
        uint256 day;
        uint256 month;
        uint256 year;
        uint256 i = 0;

        while (i < dateBytes.length && dateBytes[i] != '.') {
            day = day * 10 + uint256(uint8(dateBytes[i]) - 48);
            i++;
        }
        i++; // Пропускаем точку

        while (i < dateBytes.length && dateBytes[i] != '.') {
            month = month * 10 + uint256(uint8(dateBytes[i]) - 48);
            i++;
        }
        i++; // Пропускаем точку

        while (i < dateBytes.length) {
            year = year * 10 + uint256(uint8(dateBytes[i]) - 48);
            i++;
        }

        uint256 timestamp = timestampFromDate(day, month, year);

        return timestamp;
    }

    function timestampFromDate(uint256 _day, uint256 _month, uint256 _year) internal pure returns (uint256) {
        require(_year >= 1970, "Year must be 1970 or later");
        require(_month > 0 && _month <= 12, "Month must be between 1 and 12");
        require(_day > 0 && _day <= 31, "Day must be between 1 and 31");

        uint256 timestamp = 0;

        for (uint256 year = 1970; year < _year; year++) {
            if (_isLeapYear(year)) {
                timestamp += 366 days;
            } else {
                timestamp += 365 days;
            }
        }

        for (uint256 month = 1; month < _month; month++) {
            timestamp += _getDaysInMonth(month, _year) * 1 days;
        }

        timestamp += (_day - 1) * 1 days;

        return timestamp;
    }

    function _isLeapYear(uint256 _year) internal pure returns (bool) {
        if (_year % 4 != 0) {
            return false;
        }
        if (_year % 100 != 0) {
            return true;
        }
        if (_year % 400 != 0) {
            return false;
        }
        return true;
    }

    function _getDaysInMonth(uint256 _month, uint256 _year) internal pure returns (uint256) {
        if (_month == 2) {
            return _isLeapYear(_year) ? 29 : 28;
        }
        if (_month == 4 || _month == 6 || _month == 9 || _month == 11) {
            return 30;
        }
        return 31;
    }

    function timestampToDateString(uint256 _timestamp) internal pure returns (string memory) {
        uint256 year;
        uint256 month;
        uint256 day;

        (year, month, day, , , ) = timestampToDateTime(_timestamp);

        return string(abi.encodePacked(uint2str(day), ".", uint2str(month), ".", uint2str(year)));
    }

    function timestampToDateTime(uint256 _timestamp) internal pure returns (uint256 year, uint256 month, uint256 day, uint256 hour, uint256 minute, uint256 second) {
        uint256 secondsCount = _timestamp % 60;
        _timestamp = _timestamp / 60;
        minute = _timestamp % 60;
        _timestamp = _timestamp / 60;
        hour = _timestamp % 24;
        _timestamp = _timestamp / 24;

        uint256 epoch = 1970;

        uint256[] memory daysInMonth = new uint256[](12);
        daysInMonth[0] = 31;
        daysInMonth[1] = 28;
        daysInMonth[2] = 31;
        daysInMonth[3] = 30;
        daysInMonth[4] = 31;
        daysInMonth[5] = 30;
        daysInMonth[6] = 31;
        daysInMonth[7] = 31;
        daysInMonth[8] = 30;
        daysInMonth[9] = 31;
        daysInMonth[10] = 30;
        daysInMonth[11] = 31;

        bool isLeapYear = _isLeapYear(epoch);

        if (isLeapYear) {
            daysInMonth[1] = 29;
        }

        while (_timestamp >= 365) {
            if (isLeapYear) {
                if (_timestamp >= 366) {
                    _timestamp -= 366;
                } else {
                    break;
                }
            } else {
                _timestamp -= 365;
            }

            epoch++;
            isLeapYear = _isLeapYear(epoch);

            if (isLeapYear) {
                daysInMonth[1] = 29;
            } else {
                daysInMonth[1] = 28;
            }
        }

        for (uint256 i = 0; i < 12; i++) {
            if (_timestamp < daysInMonth[i]) {
                month = i + 1;
                day = _timestamp + 1;
                break;
            } else {
                _timestamp -= daysInMonth[i];
            }
        }

        year = epoch;
    }

    function uint2str(uint256 _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k-1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
}
