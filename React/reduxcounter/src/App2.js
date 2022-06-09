import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions, dataActions } from './store/index2';
import useFetch from './hooks/useFetch';

function App() {

  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const up = () =>{
    dispatch(counterActions.up())
  };

  const down = () => {
    dispatch(counterActions.down())
  }

  const add = () => {
    dispatch(counterActions.add(888))
  }

  const reset = () => {
    dispatch(counterActions.reset())
  }

  const data = useFetch("https://rickandmortyapi.com/api/character");
  dataActions.getData(data);

  if(data){
      console.log("Rick&Morty data-->", data);
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
