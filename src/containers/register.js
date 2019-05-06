import React, { Component } from "react";
import "./Login.css";
import zeo from '../zeo.png';
import "./register.css"
import Navbar from '../layout/Navbar';



export default class Login extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
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
    return (
      <div id="login">
      <Navbar title ="ZeoDemander"/>
      <div className= "col-md-8">
       <div className="zeo">
         <img src={zeo}/>
        </div>
      <div className="card">
      <div className="card-body">   
                          <form onSubmit = {this.handleSubmit}>
                          <div className="form-group">
                              <label htmlform="name">Username</label>
                              <input 
                                  type="name"
                                  name="name"
                                  id = "id"
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
                                  id = "id"
                                  placeholder =" Enter email "
                                  className= "form-control"
                                  onChange = {this.handleChange}
          
                              />
                              </div>
                              <div className="form-group">
                              <label htmlform="email-check">Confirm Email</label>
                              <input 
                                  type="email-check"
                                  name="email-check"
                                  id = "id"
                                  placeholder =" Enter email "
                                  className= "form-control"
                                  onChange = {this.handleChange}
          
                              />
                              </div>
          
                              <div className="form-group">
                              <label htmlform="password">Password</label>
                              <input 
                                  type="password"
                                  name="password"
                                  id = "id"
                                  placeholder =" Enter password "
                                  className= "form-control"
                                  onChange = {this.handleChange}
          
                              />
                              </div>                    
                              <button className="btn btn-dark">Register</button>
                          </form>
                      </div>
                         
                      </div>
                      </div>
                      </div>

                    
                      
    );
  }
}
