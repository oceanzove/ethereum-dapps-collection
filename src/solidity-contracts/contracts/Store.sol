// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract Store {
    // Структура отзыва
    struct Review {
        string comment; // комментарий
        uint rating; // рейтинг
        uint likes; // лайки
        uint dislikes; // дизлайки
        address author; // автор отзыва
        address store; // магазин, к которому относится отзыв
        bool approved; // одобрен ли отзыв
    }

    // Структура информации о магазине
    struct StoreInfo {
        string name; // название магазина
        address owner; // владелец магазина
        bool approved; // одобрен ли магазин
    }

    // Структура информации о пользователе
    struct UserInfo {
        string name; // имя пользователя
        string password; // пароль пользователя
        bool isAdmin; // является ли пользователь администратором
        bool isSeller; // является ли пользователь продавцом
        bool isBuyer; // является ли пользователь покупателем
    }

    // Маппинг пользователей на их информацию
    mapping(address => UserInfo) private users;
    // Массив адресов пользователей
    address[] private userAddresses;
    // Счетчик пользователей
    uint public userCounter = 0;

    // Маппинг отзывов на их идентификаторы
    mapping(uint => Review) private reviews;
    // Счетчик отзывов
    uint public reviewCounter = 0;

    // Маппинг магазинов на их информацию
    mapping(address => StoreInfo) private stores;
    // Массив адресов магазинов
    address[] private storeAddresses;
    // Счетчик магазинов
    uint public storeCounter = 0;

    // Конструктор контракта
    constructor() public {
        // Инициализация первого пользователя как администратора.
        users[msg.sender] = UserInfo("Admin", "Admin", true, false, false);
        userAddresses.push(msg.sender);
        userCounter++;

        // Инициализация магазина по умолчанию.
        stores[msg.sender] = StoreInfo("Default Store", msg.sender, true);
        storeAddresses.push(msg.sender);
        storeCounter++;
    }

    // Функция регистрации пользователя
    function registerUser(string memory name, string memory password, address userAddress) public {
        require(!users[userAddress].isAdmin && !users[userAddress].isSeller && !users[userAddress].isBuyer, "User already registered");
        users[userAddress] = UserInfo(name, password, false, false, false);
        userAddresses.push(userAddress);
        userCounter++;
    }

    // Функция регистрации магазина
    function registerStore(string memory name, address owner) public {
        stores[owner] = StoreInfo(name, owner, false);
        storeAddresses.push(owner);
        storeCounter++;
    }

    // Функция одобрения магазина
    function approveStore(address storeAddress) public {
        require(users[msg.sender].isAdmin, "Only admins can approve stores");
        stores[storeAddress].approved = true;
    }

    // Функция регистрации отзыва
    function registerReview(string memory comment, uint rating, address storeAddress) public {
        reviewCounter++;
        reviews[reviewCounter] = Review(comment, rating, 0, 0, msg.sender, storeAddress, true);
    }

    // Функция получения отзывов о магазине
    function getReviewsForStore(address storeAddress) public view returns (Review[] memory) {
        Review[] memory storeReviews = new Review[](reviewCounter);
        uint index = 0;
        for (uint i = 1; i <= reviewCounter; i++) {
            if (reviews[i].store == storeAddress) {
                storeReviews[index] = reviews[i];
                index++;
            }
        }
        Review[] memory result = new Review[](index);
        for (uint j = 0; j < index; j++) {
            result[j] = storeReviews[j];
        }
        return result;
    }

    // Функция получения одобренных магазинов
    function getApprovedStores() public view returns (StoreInfo[] memory) {
        StoreInfo[] memory approvedStores = new StoreInfo[](storeCounter);
        uint index = 0;
        for (uint i = 0; i < storeAddresses.length; i++) {
            address storeAddress = storeAddresses[i];
            StoreInfo memory store = stores[storeAddress];
            if (store.approved) {
                approvedStores[index] = store;
                index++;
            }
        }
        StoreInfo[] memory result = new StoreInfo[](index);
        for (uint j = 0; j < index; j++) {
            result[j] = approvedStores[j];
        }
        return result;
    }

    // Функция получения всех пользователей
    function getAllUsers() public view returns (UserInfo[] memory) {
        UserInfo[] memory allUsers = new UserInfo[](userCounter);
        for (uint i = 0; i < userCounter; i++) {
            allUsers[i] = users[userAddresses[i]];
        }
        return allUsers;
    }

   function authUser(string memory username, string memory password) public view returns (bool) {
       UserInfo memory user = users[msg.sender];
       if (compareStrings(user.name, username) && compareStrings(user.password, password)) {
         return true;
       }
       return false;
   }
   
   function compareStrings(string memory a, string memory b) public pure returns (bool) {
     return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    // Функция проверки пользователя на наличие прав администратора
    function isAdmin(string memory username, string memory password) public view returns (bool) {
       UserInfo memory user = users[msg.sender];
       if (compareStrings(user.name, username) && compareStrings(user.password, password)) {
        if (user.isAdmin) {
            return true;
        }
        }
        return false;
    }

}
