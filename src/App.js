import React from 'react';
import CafFirstFloor from './CafFirstFloor.js'
import CafSecondFloor from './CafSecondFloor'
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
        <Route path="/:floor/:tableID" component={ConfirmSelectedTable} />
        <Route path="/" component={ConfirmSelectedTable} /> 
      </Switch>
    </div>
  );
}

export default App;
