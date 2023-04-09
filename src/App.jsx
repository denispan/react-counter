import './index.scss';
import {useState} from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const plusBtnHandler = () => {
    setNumber(number + 1)
  }

  const minusBtnHandler = () => {
    setNumber(number - 1)
  }

  return (
    <div className="App">
      <div>
        <h1>Счетчик:</h1>
        <h2>{number}</h2>
        <button onClick={minusBtnHandler} className="minus">- Минус</button>
        <button onClick={plusBtnHandler} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
