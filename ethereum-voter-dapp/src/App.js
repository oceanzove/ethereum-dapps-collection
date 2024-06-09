import './App.css';
import VoterContract from "./components/Contracts/VoterContract";
import Tr from "./components/Table/Tr/Tr";

function App(props) {
    const voterContract = new VoterContract();

    const onAddCandidateClicked = async () => {
        const name = props.page.newCandidateName;
        await voterContract.addCandidate(name);
        const candidate = await voterContract.getLastCandidate();
        props.onAddNewCandidate(candidate);
    }

    const onVoteClicked = async () => {
        const index = props.page.voterCandidate;
        const address = props.page.voterAddress;
        const response = await voterContract.vote(index, address);
        if (response === false) {
            setInvalidAddress();
        } else {
            props.onVoteCandidate(index);
        }
    }
    const onChangeCandidateName = (e) => {
        const value = e.target.value;
        props.onUpdateCandidateName(value);
    }

    const onChangeVoterAddress = (e) => {
        const value = e.target.value;
        props.onUpdateVoterAddress(value)
    }

    const onChangeVoterCandidate = (e) => {
        const value = e.target.value;
        props.onUpdateVoterCandidate(value)
    }

    let candidateElements = props.page.candidates.map(
        v => <Tr key={v.id} id={v.id} name={v.name} totalVotes={v.totalVotes}/>
    )

    function setInvalidAddress() {

        const input = document.getElementById("address-voter");
        input.classList.add("invalid");
        input.style.background = '#F06660';
        input.style.color = '#fff'
        input.value = 'Вы уже голосовали'
        input.style.textAlign = 'center'
        input.readOnly = true;

        setTimeout(function () {
            input.classList.remove("invalid");
            input.style.background = ''; // Сброс цвета фона
            input.style.color = ''; // Сброс цвета текста
            input.value = '';
            input.style.textAlign = 'left'
            input.readOnly = false;
            props.onClearVoterAddress();
        }, 2000);
    }

    return (
        <div className="App">
            <div className="title">
                <h2>Voter</h2>
            </div>
            <div className='container'>
                <div className='table-div'>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Кандидат</th>
                            <th>Голоса</th>
                        </tr>
                        </thead>
                        <tbody>
                        {candidateElements}
                        </tbody>
                    </table>
                </div>
                <div className='vote-div'>
                    <div className='input-div'>
                        <label htmlFor='address-voter' className='input-label'>
                            Адрес избирателя
                        </label>
                        <input type="text" id='address-voter'
                               value={props.page.voterAddress}
                               onChange={onChangeVoterAddress}
                        />
                    </div>
                    <div className='input-div'>
                        <label htmlFor='index-voter' className='input-label'>
                            Индекс кандидата
                        </label>
                        <input type="number" id='index-voter'
                               value={props.page.voterCandidate}
                               onChange={onChangeVoterCandidate}
                               min='0'
                        />
                    </div>
                    <button
                        disabled={!props.page.voterAddress || !props.page.voterCandidate}
                        onClick={onVoteClicked} className="button">Проголосовать
                    </button>
                </div>
                <div className='candidate-div'>
                    <h2>
                        Новый кандидат
                    </h2>
                    <div className='input-div'>
                        <label htmlFor='address-voter' className='input-label'>
                            Имя нового кандидата
                        </label>
                        <input type="text" id='address-voter'
                               value={props.page.newCandidateName}
                               onChange={onChangeCandidateName}
                        />
                    </div>
                    <button
                        disabled={!props.page.newCandidateName}
                        onClick={onAddCandidateClicked} className="button">Добавить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
