import React from 'react';
import {
  HashRouter,
  Route,
  Switch, 
} from 'react-router-dom';
import Home from './components/home/index';
import Login from './components/Login/Login'

function App() {
  return (
    <HashRouter>
    <Switch>
      <Route  exact path="/" component={Home}/>
      <Route  path="/login" component={Login}/>
    </Switch>  
  </HashRouter>
  );
}

export default App;
