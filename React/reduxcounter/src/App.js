import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const up = () =>{
    dispatch({type: 'UP'})
  };

  const down = () => {
    dispatch({type: 'DOWN'})
  }

  const add = () => {
    dispatch({type: 'ADD', payload:888})
  }

  const reset = () => {
    dispatch({type: 'RESET'})
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{ counter }</h2>

      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
      <button onClick={add}>Add</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
