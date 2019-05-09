import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'
import {Link} from "react-router-dom";

class User extends Component {
//if there is no info in App.js

state = { 
 Users: [
  
   
 ]
}

  // static defaultProps = {
  //   email : "No information",
  //   password : "No information"
  // }

  onClickEvent = (e) => {
    this.setState({
    isVisible : !this.state.isVisible
    })
  }

   onDeleteOrder= (dispatch, e) => {
    const {id} = this.props;

    //Consumer Dispatch
    dispatch({type: "DELETE_ORDER", payload:id});

  }
 
  render() {
    const {id,username,office,orderType,amount,linkTo,status,price} = this.props;
    const {isVisible} = this.state;

    return (
    <UserConsumer>
    {
      value => {
        const {dispatch} =value;


        return (
    

       <div className = "col-md-8 mb-4">
        <div className="card" style = {isVisible ? {backgroundColor : "#62848d",color :"white"} : null }> 
           <div className ="card-header d-flex justify-content-between">
             <h4 className = "d-inline" onClick = {this.onClickEvent}>{username}</h4>
           <i onClick = {this.onDeleteOrder.bind(this, dispatch)} className = "far fa-trash-alt" style ={{cursor : "pointer"}}></i>
         </div>
         
           {
              isVisible ? <div className="card-body">
            
             <p className="card-text"> Username: {username}</p>
             <p className="card-text"> Office: {office}</p>
             <p className="card-text"> Order Type: {orderType}</p>
             <p className="card-text"> Amount: {amount}</p>
             <p className="card-text"> Link To: {linkTo}</p>
             <p className="card-text"> Status: {status}</p>
             <p className="card-text"> Price: {price}</p>
              <Link to ={`edit/${id}`} className="btn btn-dark btn-block">Update Order</Link>
              </div> : null
           }
         </div>
       </div>
        )
      }
    }
    </UserConsumer>
    )
    
  }
}

User.propTypes = {
  username : PropTypes.string.isRequired,
  office  : PropTypes.string.isRequired,
  orderType  : PropTypes.string.isRequired,
  amount  : PropTypes.string.isRequired,
  linkTo  : PropTypes.string.isRequired,
  status  : PropTypes.string.isRequired,
  price  : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired
}

export default User;