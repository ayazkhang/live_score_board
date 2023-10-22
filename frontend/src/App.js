// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import NewMatchForm from './components/Forms/NewMatchForm';
import MatchList from './components/MatchList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes >
          <Route exact path="/new-match" element={<NewMatchForm/>}/>
          <Route exact path="/matches" element={<MatchList/>}/>
          <Route exact path="/" element={<MatchList/>}/>
        </Routes >
      </div>
    </Router>
  );
}

export default App;
