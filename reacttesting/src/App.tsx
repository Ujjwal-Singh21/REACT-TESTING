import React from 'react';
import './App.css';
import { Application } from './components/Application/Application';
import { Counter } from './components/Counter/Counter';
import { MuiMode } from './components/Mui/mui-mode';
import { AppProvider } from './components/Providers/app-providers';
import { Skills } from './components/Skills/Skills';
import { Users } from './components/Users/Users';

function App() {

  const skills = ['HTML', 'CSS', 'JavaScript']

  return (
    <AppProvider>
      <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={skills}  /> */}
      {/* <Counter /> */}
      {/* <MuiMode /> */}
      <Users />
    </div>
    </AppProvider>
  );
}

export default App;
