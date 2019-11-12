import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';

console.log('Server is listening on http://localhost:5000');

ReactDOM.render(
    <Router basename="/">
      <App />
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
