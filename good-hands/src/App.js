import React from 'react';
import {
  HashRouter,
  Route,
  Switch, 
} from 'react-router-dom';
import Home from './components/Home/index';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration'

function App() {
  return (
    <HashRouter>
    <Switch>
      <Route  exact path="/" component={Home}/>
      <Route  path="/login" component={Login}/>
      <Route  path="/registration" component={Registration}/>
    </Switch>  
  </HashRouter>
  );
}

export default App;
