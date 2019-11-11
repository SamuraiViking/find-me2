import React from 'react';
import ReactDOM from "react-dom";
import CafFirstFloor from './CafFirstFloor.js'
import CafSecondFloor from './CafSecondFloor'
import ConfirmSelectedTable from './ConfirmSelectedTable'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/2" component={CafSecondFloor} />
        <Route path="/:floor/:tableID" component={ConfirmSelectedTable} />
        <Route path="/" component={CafFirstFloor} /> 
      </Switch>
    </div>
  );
}

export default App;
