import React from 'react';
import ReactDOM from "react-dom";
import CafFirstFloor from './CafFirstFloor.js'
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
        <Route path="/" exact component={CafFirstFloor} />
        <Route path="/2">
          <h1>Second Floor</h1>
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
