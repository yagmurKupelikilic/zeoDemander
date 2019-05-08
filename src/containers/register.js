import React, { Component } from "react";
import "./Login.css";
import zeo from '../zeo.png';
import "./register.css"
import Navbar from '../layout/Navbar';
import {Redirect} from 'react-router-dom'
import {Link} from "react-router-dom";


export default class Register extends Component {
    
  constructor(props) {
    super(props);
    let registered=false;
    this.state = {
      username: "",
      email: "",
      password: "",
      passCheck: "",
      registered
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.email.length > 0 && this.state.password.length > 0 && this.state.passcheck.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    if(this.state.register){
      return <Redirect to="/login" />
    }
    return (
      <div id="login">
      <Navbar title ="ZeoDemander"/>
      <div className= "col-md-8">
       <div className="zeo">
         <img src={zeo} alt="zeo"/>
        </div>
      <div className="card">
      <div className="card-body">   
                          <form onSubmit = {this.handleSubmit}>
                          <div className="form-group">
                              <label htmlform="username">Username</label>
                              <input 
                                  type="username"
                                  name="username"
                                  id = "userId"
                                  placeholder =" Enter username "
                                  className= "form-control"
                                  onChange = {this.handleChange}
          
                              />
                              </div>
                              <div className="form-group">
                              <label htmlform="email">Email</label>
                              <input 
                                  type="email"
                                  name="email"
                                  id = "emailId"
                                  placeholder =" Insert a valid email "
                                  className= "form-control"
                                  onChange = {this.handleChange}
          
                              />
                              </div>
                              <div className="form-group">
                              <label htmlform="password">Password</label>
                              <input 
                                 type="password"
                                 name="password"
                                  id = "passId"
                                  placeholder =" Choose a password "
                                  className= "form-control"
                                  onChange = {this.handleChange}
          
                              />
                              </div>
          
                              <div className="form-group">
                              <label htmlform="password-check">Password</label>
                              <input 
                                  type="password"
                                  name="password"
                                  id = "checkId"
                                  placeholder =" Retype your password "
                                  className= "form-control"
                                  onChange = {this.handleChange}
          
                              />
                              </div>                    
                              <button className="btn btn-dark btn-block" type ="submit">Register</button>
                              <Link to="/login" className="link">Have you already registered ?</Link>

                          </form>
                      </div>
                         
                      </div>
                      </div>
                      </div>

                    
                      
    );
  }
}
