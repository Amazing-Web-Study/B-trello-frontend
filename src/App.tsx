import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from "./components/pages/Main";
import Login from './components/pages/Login';
import Join from "./components/pages/Join";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Join} exact />
        </Switch>
      </Router>
        
        
    </div>
  );
}


/*

function App() {
  return (
    <div className="App">
      
      <Main />
        
    </div>
  );
}
*/

export default App;
