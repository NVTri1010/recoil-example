import React from 'react';
import { RecoilRoot } from 'recoil';
import NewList from './NewList';
import InProgressList from './InProgressList';
import CompletedList from './CompletedList';
import NewActionInput from './NewActionInput';
import Overview from './Overview';

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <header className='App-header'>
          <h1>To-do List</h1>
        </header>

        <Overview />

        <NewActionInput />

        <div className='content'>
          <NewList />
          <InProgressList />
          <CompletedList />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
