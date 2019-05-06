import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch, Link} from "react-router-dom";
import Navbar from '../layout/Navbar';


export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
  render() {
    return (
        
      <div>
        <Navbar title={"ZeoDemander"}/>


        <h1>You have been logout!</h1>
        <p>Please click if you want to login again</p>
        <Link to ="/login">Login Again</Link>
      </div>
    )
  }
}
