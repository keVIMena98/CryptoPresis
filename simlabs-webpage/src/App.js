import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages'

function App() {
  return (
    <Router>
      {/*<Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>*/}
      <Home />
    </Router>
  );
}

export default App;
