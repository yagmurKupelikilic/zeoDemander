import React, { Component } from "react"
import {Link, Redirect} from "react-router-dom";
import UserConsumer from   "../context"
import "./account.css"
var uniqid = require('uniqid')

class Account extends Component {
  constructor(props){
    super(props)
      const token =localStorage.getItem("token")

      let loggedIn =true
      
      if(token == null){
        loggedIn = false
      }
    
  }

  // state = {
  //   username,
  //   office,
  //   orderType,
  //   amount,
  //   linkTo,
  //   status,
  //   price,
  //   error: false,
  //   loggedIn
  // }
  
  addOrder = (dispatch, e) => {
    e.preventDefault();
    const { username,office,orderType,amount,linkTo,status,price} = this.state;

    const newOrder = {
        id : uniqid(),
        username,
        office ,
        orderType, 
        amount,
        linkTo,
        status,
        price
        
    }
    if(!this.validateForm()){
        this.setState({
            error: true
        })
        return;
    }

    
    dispatch({type: "ADD_Order", payload:newOrder});



    //Redirect
    this.props.history.push("/");

}
  render() {
    if(this.state.loggedIn === false){
      return <Redirect to ="/login" />
    } return <UserConsumer>
    { value => {
        const {dispatch} = value;
    return (
      <div id="account">
      <nav className ="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/login" className="navbar-brand">{"ZeoDemander"}</a>
 
      <ul className="navbar-nav ml-auto">
 <li className="nav-item active">
 <Link to ="/orders" className="nav-link" >Orders</Link>
 </li>
 
 
 <li className="nav-item active">
   <Link to ="/logout" className="nav-link" >Logout</Link>
 </li>

 </ul>
 </nav>


 <div className= "col-md-8 mb-4">
                
 <div className="card">
 <div className="card-header">
     <h4>ORDER FORM</h4>
 </div>
<div className="card-body">
{
                          error ?
                          <div className ="alert alert-danger">
                            Lütfen bilgilerinizi kontrol ediniz.
                          </div>
                          :null
                      }
<form onSubmit = {this.submitForm} className="form">

<div className="form-group">
<label htmlform="name">Ordername</label>
<input 
type="name"
name="name"
id="name"
placeholder="Enter Ordername"/>

</div>

<div className="form-group">
<label htmlform="office">Office</label>
<input 
type="name"
name="name"
id="name"
placeholder="Enter which office is"/>

</div>

<div className="form-group">
<label htmlform="orderType">Order type</label>
<input 
type="name"
name="name"
id="name"
placeholder="E.g chair"/>

</div>

<div className="form-group">
<label htmlform="Amount">Amount</label>
<input 
type="number"
name="number"
id="number"
placeholder="Enter how many"/>

</div>

<div className="form-group">
<label htmlform="linkTo">Link to</label>
<input 
type="link"
name="link"
id="link"
placeholder="Enter the link"/>

</div>

<div className="form-group">
<label htmlform="status">Status</label>
<input 
type="name"
name="name"
id="name"
placeholder="Enter the status of order"/>

</div>

<div className="form-group">
<label htmlform="price">Price</label>
<input 
type="number"
name="number"
id="number"
placeholder="Enter the estimated price"/>

</div>


      
<button className ="btn btn-danger" type ="submit">Give Order</button>
</form>
</div>   
   </div>
   </div>
   </div>
      
    );
                    }
                  }
    </UserConsumer>
    }
}export default Account;