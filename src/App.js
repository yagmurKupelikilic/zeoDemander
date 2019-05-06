import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import Orders from './containers/Orders';
import Myaccount from './containers/Myaccount';
import Register from './containers/Register';
import Account from './containers/Account';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Navbar from './layout/Navbar';
import Logout from  './containers/Logout'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
     
   
      <Switch>
      <Route exact path = "/" component ={Login} />
        <Route exact path = "/login" component ={Login} />
        <Route exact path = "/register" component ={Register} />
        <Route exact path = "/myaccount" component ={Myaccount} />
        <Route exact path = "/orders" component ={Orders} />
        <Route exact path = "/account" component ={Account} />
        <Route exact path = "/logout" component ={Logout} />
       </Switch> 
       


      </div>
      </Router>
    );
  }
}

export default App;
