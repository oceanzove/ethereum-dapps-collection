// eslint-disable-next-line no-undef
const Dice = artifacts.require('Dice');

// eslint-disable-next-line no-undef
contract('Dice', (accounts) => {
    it('должен успешно бросить кубики с корректным массивом чисел', async () => {
        const dice = await Dice.deployed();
        const numbers = [1, 2, 3, 4];
        const rolled = await dice.rollDices.call(numbers);

        assert.equal(rolled.length, 2, 'Должна быть матрица 2x2');
        assert.equal(rolled[0].length, 2, 'Должна быть матрица 2x2');
        assert.equal(rolled[1].length, 2, 'Должна быть матрица 2x2');

        rolled.forEach(row => {
            row.forEach(value => {
                assert.isTrue(value >= 1 && value <= 6, 'Значение кубика должно быть между 1 и 6');
            });
        });
    });

    it('должен вернуть ошибку, если входной массив не содержит ровно 4 числа', async () => {
        const dice = await Dice.deployed();
        const invalidNumbers = [1, 2, 3];

        try {
            await dice.rollDices.call(invalidNumbers);
            assert.fail('Транзакция должна была завершиться ошибкой');
        } catch (error) {
            assert.include(error.message, 'The input array must contain exactly 4 numbers', 'Ожидалось сообщение об ошибке с текстом "The input array must contain exactly 4 numbers"');
        }
    });

    it('должен возвращать разные результаты для разных входных данных', async () => {
        const dice = await Dice.deployed();
        const numbers1 = [1, 2, 3, 4];
        const numbers2 = [5, 6, 7, 8];

        const rolled1 = await dice.rollDices.call(numbers1);
        const rolled2 = await dice.rollDices.call(numbers2);

        let same = true;
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                if (rolled1[i][j].toNumber() !== rolled2[i][j].toNumber()) {
                    same = false;
                    break;
                }
            }
            if (!same) break;
        }

        assert.isFalse(same, 'Ожидается, что результаты будут различаться для разных входных данных');
    });
});
