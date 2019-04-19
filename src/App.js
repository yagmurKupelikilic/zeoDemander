import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import register from './containers/register';
import Navbar from './containers/Navbar';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar title ="ZeoDemander"/>

      <Switch>
        <Route exact path = "/login" component ={Login} />
        <Route exact path = "/register" component ={register} />
       </Switch> 
       


      </div>
      </Router>
    );
  }
}

export default App;
