import React, { Component } from "react"
import {Link} from "react-router-dom";

class account extends Component {
  render() {
    return (
      <div id="account">
      <nav className ="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/login" className="navbar-brand">{"ZeoDemander"}</a>
 
      <ul className="navbar-nav ml-auto">
 <li className="nav-item active">
 <Link to ="/orders" className="nav-link" >Orders</Link>
 </li>
 
 <li className="nav-item active">
   <Link to ="/myaccount" className="nav-link" >My account</Link>
 </li>
 
 </ul>
 </nav>

 <p>To give order, please fill in the blank</p>

<form className="form">

<div className="form-group">
<label htmlform="username">Username</label>
<input 
type="name"
name="name"
id="name"
placeholder="Enter username"/>

</div>

</form>


      

      
   </div>
      
    );
    }
}export default account;