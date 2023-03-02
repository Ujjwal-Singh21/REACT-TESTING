import React from 'react';
import './App.css';
import { Application } from './components/Application/Application';
import { Counter } from './components/Counter/Counter';
import { Skills } from './components/Skills/Skills';

function App() {

  const skills = ['HTML', 'CSS', 'JavaScript']

  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={skills}  /> */}
      <Counter />
    </div>
  );
}

export default App;
