import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet,ArrowExample } from './components/function_component_example';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <p>
        Hello world
        <Greet />
        <ArrowExample name = "Bhakti" heroName="spiderman" />
        <ArrowExample name = "Kush" heroName="batman" />
        <Welcome name = "priya" />
        <Welcome name = "riya" />
        <Hello />
        <Message message='Hello This is first state manage in message component' />
        <Counter count={13}/>
      </p>
    </div>
  );
}

export default App;
