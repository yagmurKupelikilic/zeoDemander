import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Navbar({title}) {
    return(
   <nav className ="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
   <a href="/" className="navbar-brand">{title}</a>
   
   <ul className="navbar-nav ml-auto">
     <li className="nav-item active">
     <Link to ="/account" >My account</Link>
     </li>

     <li className="nav-item active">
     <Link to ="/orders" >Orders</Link>
     </li>

     
   </ul>
   </nav>
   
   );
}
//sending a title is mandatory
Navbar.propsType = {
    title : PropTypes.string.isRequired
}
//if a title is not sending in App.js when called
Navbar.defaultProps = {
    title : "default title"
}
export default Navbar;