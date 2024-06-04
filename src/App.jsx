import './App.css';

function App(props) {

  const onChangeTest = (e) => {
    const value = e.target.value;
    props.onTest(value);
  };

  return (
      <div className="App">
          <div className="container">
              <div className="generate-seed">
                  <div className="alert" id="message">
                      Создайте свой существующий кошелек или используйте его.
                  </div>
                  <h4>Введите сид (12 слов)</h4>
                  <input className="seed" type="text"/>
                  <div className="generate-seed-button">
                      <button>Сгенерировать детали</button>
                      <button>Сгенерировать новый сид</button>
                  </div>
              </div>
              <div style={{marginBottom: '30px'}}>
                  <h2>Адрес, Ключи и Балансы этих сидов</h2>
                  <h2>Отправить эфир</h2>
              </div>
              <div className="send-eth">
                  <h4>С адреса</h4>
                  <input className="seed" type="text"/>
                  <h4>На адреса</h4>
                  <input className="seed" type="text"/>
                  <h4>Количество эфира</h4>
                  <input className="seed" type="text"/>
                  <button className="send-eth-button">Отправить эфир</button>
              </div>
          </div>
      </div>
  );
}

export default App;
