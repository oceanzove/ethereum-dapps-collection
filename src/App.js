import './App.css';
import VoterContract from "./components/Contracts/VoterContract";

function App(props) {
    const voterContract = new VoterContract();

    const onAddCandidateClicked = async () => {
      const candidate = props.voterPage.newCandidateName;
      await voterContract.addCandidate(candidate);
      props.onAddNewCandidate(candidate);
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
    return (
        <div className="App">
            <div className='container'>
                <div className="title">
                    <h2>Voter</h2>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Кандидат</th>
                        <th>Голоса</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>0</td>
                        <td>Рома</td>
                        <td id="candidate-1"></td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>Олег</td>
                        <td id="candidate-2"></td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>Иван</td>
                        <td id="candidate-3"></td>
                    </tr>
                    </tbody>
                </table>
                <div className='vote-div'>
                    <div className='input-div'>
                        <label htmlFor='address-voter' className='input-label'>
                            Адрес избирателя
                        </label>
                        <input type="text" id='address-voter'
                               value={props.voterPage.voterAddress}
                               onChange={onChangeVoterAddress}
                        />
                    </div>
                    <div className='input-div'>
                        <label htmlFor='index-voter' className='input-label'>
                            Индекс кандидата
                        </label>
                        <input type="number" id='index-voter'
                               value={props.voterPage.voterCandidate}
                               onChange={onChangeVoterCandidate}
                               min='0'
                        />
                    </div>
                    <button
                        disabled={!props.voterPage.voterAddress || !props.voterPage.voterCandidate}
                        onClick={null} className="button">Проголосовать
                    </button>
                </div>
                <div className='candidate-div'>
                    <h2>
                        Новый кандидат
                    </h2>
                    <div className='input-div'>
                        <label htmlFor='address-voter' className='input-label'>
                            Имя ногого кандидат
                        </label>
                        <input type="text" id='address-voter'
                               value={props.voterPage.newCandidateName}
                               onChange={onChangeCandidateName}
                        />
                    </div>
                    <button
                        disabled={!props.voterPage.newCandidateName}
                        onClick={onAddCandidateClicked} className="button">Добавить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
