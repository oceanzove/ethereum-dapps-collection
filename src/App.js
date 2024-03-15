import './App.css';
import Dice from 'react-dice-roll';

function App() {
  return (
    <div className="App">
      <Dice onRoll={(value) => console.log(value)} />
    </div>
  );
}

export default App;
