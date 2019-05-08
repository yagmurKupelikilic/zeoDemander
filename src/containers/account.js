import React, { Component } from "react"
import {Link, Redirect} from "react-router-dom";
import "./account.css"

class Account extends Component {
  constructor(props){
    super(props)
      const token =localStorage.getItem("token")

      let loggedIn =true
      
      if(token == null){
        loggedIn = false
      }
      
      this.state = {
        loggedIn
      }
    
    
  }
  render() {
    if(this.state.loggedIn === false){
      return <Redirect to ="/login" />
    }
    return (
      <div id="account">
      <nav className ="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/login" className="navbar-brand">{"ZeoDemander"}</a>
 
      <ul className="navbar-nav ml-auto">
 <li className="nav-item active">
 <Link to ="/orders" className="nav-link" >Orders</Link>
 </li>
 
 <li className="nav-item active">
   <Link to ="/Myaccount" className="nav-link" >My account</Link>
 </li>
 
 <li className="nav-item active">
   <Link to ="/logout" className="nav-link" >Logout</Link>
 </li>

 </ul>
 </nav>

 <h3>ORDER FORM</h3>

<form className="form">

<div className="form-group">
<label htmlform="name">Username</label>
<input 
type="name"
name="name"
id="name"
placeholder="Enter username"/>

</div>

<div className="form-group">
<label htmlform="name">Office</label>
<input 
type="name"
name="name"
id="name"
placeholder="Enter which office is"/>

</div>

<div className="form-group">
<label htmlform="name">Order type</label>
<input 
type="name"
name="name"
id="name"
placeholder="E.g chair"/>

</div>

<div className="form-group">
<label htmlform="number">Amount</label>
<input 
type="number"
name="number"
id="number"
placeholder="Enter how many"/>

</div>

<div className="form-group">
<label htmlform="link">Link to</label>
<input 
type="link"
name="link"
id="link"
placeholder="Enter the link"/>

</div>

<div className="form-group">
<label htmlform="name">Status</label>
<input 
type="name"
name="name"
id="name"
placeholder="Enter the status of order"/>

</div>

<div className="form-group">
<label htmlform="number">Price</label>
<input 
type="number"
name="number"
id="number"
placeholder="Enter the estimated price"/>

</div>


      
<button className ="btn btn-danger" type ="submit">Give Order</button>
</form>   
   </div>
      
    );
    }
}export default Account;