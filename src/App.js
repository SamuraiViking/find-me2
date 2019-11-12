import React from 'react';
import ConfirmSelectedTable from './ConfirmSelectedTable'
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div class="App">
      <Switch>
        <Route path="/:floor/:selectedTableID" component={ConfirmSelectedTable} />
        <Route path="/" component={ConfirmSelectedTable} /> 
      </Switch>
    </div>
  );
}

export default App;
