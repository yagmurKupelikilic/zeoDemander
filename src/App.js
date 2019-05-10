import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import Users from './containers/Users';
import Myaccount from './containers/Myaccount';
import Register from './containers/Register';
import Account from './containers/Account';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Logout from  './containers/Logout'
import User from  './containers/User'

class App extends Component {
 
  render() {
    return (
      <Router>
      <div className="App">
      <User 
       username= "yagmur"
      office = "ankara"
      orderType = "tables"
      amount = "3"
      linkTo = "kldsjfh"
      status = "emergency"
      price = "500"
      />
      <Switch>
      <Route exact path = "/" component ={Register} />
        <Route exact path = "/login" component ={Login} />
        <Route exact path = "/register" component ={Register} />
        <Route exact path = "/myaccount" component ={Myaccount} />
        <Route exact path = "/users" component ={Users} />
        <Route exact path = "/account" component ={Account} />
        <Route exact path = "/logout" component ={Logout} />
       </Switch> 
       


      </div>
      </Router>
    );
  }
}

export default App;
