import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import orders from './containers/orders';
import myaccount from './containers/myaccount';
import register from './containers/register';
import account from './containers/account';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Navbar from './layout/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
        <Route exact path = "/login" component ={Login} />
        <Route exact path = "/register" component ={register} />
        <Route exact path = "/myaccount" component ={myaccount} />
        <Route exact path = "/orders" component ={orders} />
        <Route exact path = "/account" component ={account} />
       </Switch> 
       


      </div>
      </Router>
    );
  }
}

export default App;
