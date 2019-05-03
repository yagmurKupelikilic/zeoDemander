import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function accountNavbar({title}) {
    return(
   <nav className ="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
   <a href="/" className="navbar-brand">{title}</a>
   
   <ul className="navbar-nav ml-auto">
     <li className="nav-item active">
     <Link to ="/orders" className="nav-link" >Orders</Link>
     </li>

     <li className="nav-item active">
        <Link to ="/myaccount" className="nav-link" >My account</Link>
     </li>

     </ul>
   </nav>
   
   );
}
//sending a title is mandatory
accountNavbar.propsType = {
    title : PropTypes.string.isRequired
}
//if a title is not sending in App.js when called
accountNavbar.defaultProps = {
    title : "default title"
}
export default accountNavbar;