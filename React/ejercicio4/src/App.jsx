// import { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todos/>
      </header>
    </div>
  );
}

export default App;
