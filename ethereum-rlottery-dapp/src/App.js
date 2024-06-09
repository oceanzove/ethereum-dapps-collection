import './App.css';
import confetti from 'canvas-confetti';
import RLotteryContract from "./components/Contracts/RLotteryContract";

function App(props) {
    const rLotteryContract = new RLotteryContract();

    const shootConfetti = () => {
        confetti();
    };
    const onBuyTicketClicked = async () => {
        const num = props.rLotteryPage.ticket;
        await rLotteryContract.getTickets(num);
        props.onBoughtTicket();
    }

    const onWinCheckClicked = async () => {
        const result = await rLotteryContract.winner();
        console.log(await rLotteryContract.winner());
        props.onUpdateResult(result.toString());
        shootConfetti();
    }
    const onChangeTicket = (e) => {
        let value = e.target.value;
        if (value > 10) {
            value = 10;
        }
        if (value < 1) {
            value = 1;
        }
        props.onUpdateTicket(value);
    }
    return (
        <div className="App">
            <div className='container'>
                <div className="title">
                    <h2>RLottery</h2>
                </div>
                <div className='input-div'>
                    <label htmlFor='ticket' className='input-label'>
                        Купить билет (1 - 10)
                    </label>
                    <input type="number" id='ticket'
                           value={props.rLotteryPage.ticket}
                           onChange={onChangeTicket}
                    />
                    <button
                        disabled={!props.rLotteryPage.ticket}
                        onClick={onBuyTicketClicked} className="button">Купить
                    </button>

                </div>
                <div className='input-div'>
                    <output id='winner'>
                        {props.rLotteryPage.result}
                    </output>
                    <button
                        onClick={onWinCheckClicked} className="button">Крутить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
