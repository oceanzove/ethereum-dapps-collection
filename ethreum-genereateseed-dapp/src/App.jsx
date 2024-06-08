import './App.css';
import GenerateSeedContract from "./components/Contracts/GenerateSeedContract";
import WalletItem from "./components/WalletItem/WalletItem";

function App(props) {
    const generateSeedContract = new GenerateSeedContract();

    /**
     * Обновляет поле Seed
     */
    const onChangeSeed = (e) => {
        const value = e.target.value;
        props.onUpdateSeed(value);
    };

    /**
     * Обновляет поле SeedAmount
     */
    const onChangeSeedAmount = (e) => {
        const value = e.target.value;
        props.onUpdateSeedAmount(value);
    };

    /**
     * Обновляет поле FromAddress
     */
    const onChangeFromAddress = (e) => {
        const value = e.target.value;
        props.onUpdateFromAddress(value);
    };

    /**
     * Обновляет поле ToAddress
     */
    const onChangeToAddress = (e) => {
        const value = e.target.value;
        props.onUpdateToAddress(value);
    };

    /**
     * Обновляет поле Amount
     */
    const onChangeAmount = (e) => {
        const value = e.target.value;
        props.onUpdateAmount(value);
    };

    const onDisabledSeedButton = () => {
        const trimmedSeed = props.page.seed.trim().replace(/\s{2,}/g, ' ');
        const words = trimmedSeed.split(' ');
        return words.length === 12 || words.length > 12;
    }

    /**
     * Создает сид
     * @return {Promise<void>}
     */
    const onSeedClick = async () => {
        const trimmedSeed = props.page.seed.trim().replace(/\s{2,}/g, ' ');
        const words = trimmedSeed.split(' ');
        const truncatedWords = words.length > 12 ? words.slice(0, 12) : words;

        const seedAmount = props.page.seedAmount;

        await generateSeedContract.generateSeeds(seedAmount, truncatedWords);
        props.onGenerateSeed();

        await updateWallets()
    }

    /**
     * Создает сид из рандомных слов
     * @return {Promise<void>}
     */
    const onRandomSeedClick = async () => {
        const allWords = props.page.words;
        const shuffled = allWords.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        const seedAmount = props.page.seedAmount;

        await generateSeedContract.generateSeeds(seedAmount, shuffled.slice(0, 12));
        props.onGenerateSeed();

        await updateWallets()
    }

    /**
     * Трансфер с одного аккаунта на другой
     * @return {Promise<void>}
     */
    const onTransfer = async () => {
        const _from = props.page.fromAddress;
        const _to = props.page.toAddress;
        const _amount = props.page.amount;

        await generateSeedContract.sendEther(_from, _to, _amount);
        props.onSend()

        await updateWallets()
    }

    const updateWallets = async () => {
        const wallets = await generateSeedContract.wallets();
        props.onUpdateWallets(wallets);
    }

    let wallets = props.page.wallets.map(
        wallet => <WalletItem
            key={wallet.walletAddress}
            walletAddress={wallet.walletAddress}
            privateKey={wallet.privateKey}
            balance={wallet.balance}/>
    )

    return (
        <div className="App">
            <div className="container">
                <div className="generate-seed">
                    <div className="alert" id="message">
                        Создайте свой существующий кошелек или используйте его.
                    </div>
                    <h4>Введите сид (12 слов)</h4>
                    <div className="seedGenerate">
                        <input className="seed" type="text" value={props.page.seed} onChange={onChangeSeed}/>
                        <input className="seed number" type='number' value={props.page.seedAmount}
                               onChange={onChangeSeedAmount} min={1} max={12}
                        />
                    </div>
                    <div className="generate-seed-button">
                        <button
                            disabled={!onDisabledSeedButton() || !props.page.seedAmount}
                            onClick={onSeedClick}
                        >Сгенерировать сид из слов
                        </button>
                        <button
                            disabled={!props.page.seedAmount}
                            onClick={onRandomSeedClick}
                        >Сгенерировать сид случайных слов</button>
                    </div>
                </div>
                <div style={{marginBottom: '30px'}}>
                    <h2>Адрес, Ключи и Балансы этих сидов</h2>
                    {wallets}
                    <h2>Отправить эфир</h2>
                </div>
                <div className="send-eth">
                    <h4>С адреса</h4>
                    <input className="seed" type="text" value={props.page.fromAddress} onChange={onChangeFromAddress}/>
                    <h4>На адреса</h4>
                    <input className="seed" type="text" value={props.page.toAddress} onChange={onChangeToAddress}/>
                    <h4>Количество эфира</h4>
                    <input className="seed" type="text" value={props.page.amount} onChange={onChangeAmount}/>
                    <button className="send-eth-button"
                            disabled={
                                !props.page.fromAddress
                                || !props.page.toAddress
                                || !props.page.amount
                            }
                            onClick={onTransfer}
                    >Отправить эфир
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
