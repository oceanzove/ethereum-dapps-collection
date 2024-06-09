const Store = artifacts.require('Store');
contract('Store', (accounts) => {
    describe('Тесты', () => {
        let store;
        beforeEach(async () => {
            store = await Store.new();
        });
        it('должен успешно зарегистрировать нового пользователя', async () => {
            await store.registerUser('username', 'password', accounts[1], { from: accounts[0] });
            const userInfo = await store.getAllUsers();

            assert.equal(userInfo[1].name, 'username', 'Имя пользователя не соответствует ожидаемому');
            assert.equal(userInfo[1].password, 'password', 'Пароль пользователя не соответствует ожидаемому');
            assert.equal(userInfo[1].isAdmin, false, 'Статус администратора не соответствует ожидаемому');
            assert.equal(userInfo[1].isSeller, false, 'Статус продавца не соответствует ожидаемому');
            assert.equal(userInfo[1].isBuyer, false, 'Статус покупателя не соответствует ожидаемому');
        });
        it('должен успешно одобрить магазин администратором', async () => {
            await store.registerStore('StoreName', accounts[2], { from: accounts[0] });
            await store.approveStore(accounts[2], { from: accounts[0] });
            const approvedStores = await store.getApprovedStores();

            assert.equal(approvedStores[1].name, 'StoreName', 'Название магазина не соответствует ожидаемому');
            assert.equal(approvedStores[1].owner, accounts[2], 'Владелец магазина не соответствует ожидаемому');
            assert.equal(approvedStores[1].approved, true, 'Статус одобрения магазина не соответствует ожидаемому');
        });
        it('должен успешно удалить магазин администратором', async () => {
            await store.registerStore('StoreName', accounts[2], { from: accounts[0] });
            await store.approveStore(accounts[2], { from: accounts[0] });
            await store.removeStore(accounts[2], { from: accounts[0] });
            const approvedStores = await store.getApprovedStores();

            assert.equal(approvedStores.length, 1, 'Магазин не был успешно удален');
        });
        it('должен успешно добавить отзыв о магазине', async () => {
            await store.registerUser('username', 'password', accounts[1], { from: accounts[0] });
            await store.registerReview('Good store', 5, accounts[0], { from: accounts[1] });
            const storeReviews = await store.getReviewsForStore(accounts[0]);

            assert.equal(storeReviews[0].comment, 'Good store', 'Комментарий к отзыву не соответствует ожидаемому');
            assert.equal(storeReviews[0].rating, 5, 'Рейтинг отзыва не соответствует ожидаемому');
            assert.equal(storeReviews[0].author, accounts[1], 'Автор отзыва не соответствует ожидаемому');
            assert.equal(storeReviews[0].store, accounts[0], 'Адрес магазина в отзыве не соответствует ожидаемому');
        });
        it('должен успешно вернуть список всех пользователей', async () => {
            await store.registerUser('user1', 'pass1', accounts[1], { from: accounts[0] });
            await store.registerUser('user2', 'pass2', accounts[2], { from: accounts[0] });
            await store.registerUser('user3', 'pass3', accounts[3], { from: accounts[0] });
            const allUsers = await store.getAllUsers();

            assert.equal(allUsers.length, 4, 'Количество пользователей не соответствует ожидаемому');
            assert.equal(allUsers[1].name, 'user1', 'Имя первого пользователя не соответствует ожидаемому');
            assert.equal(allUsers[2].name, 'user2', 'Имя второго пользователя не соответствует ожидаемому');
            assert.equal(allUsers[3].name, 'user3', 'Имя третьего пользователя не соответствует ожидаемому');
        });
    });
});
