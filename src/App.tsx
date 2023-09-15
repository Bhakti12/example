import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet,ArrowExample } from './components/function_component_example';

function App() {
  return (
    <div className="App">
      <p>
        Hello world
        <Greet />
        <ArrowExample />
      </p>
    </div>
  );
}

export default App;
