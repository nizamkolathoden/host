import React from "react";
import classes from "./Nav.module.css";
import {useHistory,Link} from 'react-router-dom'
const Option = () => {
  const admin = localStorage.getItem('mascAdmin')
  const history = useHistory()
  return (
    <div className={classes.Option}>
      <ul>
       <Link to="/" style={{color: "#2d4059", textDecoration: "none"}} ><li>Home</li></Link> 
       <Link to ="/discard" style={{color: "#2d4059", textDecoration: "none"}} ><li>Trash</li></Link> 
       
      {admin?<Link to ="/admin" style={{color: "#2d4059", textDecoration: "none"}} ><li>Admin</li></Link>:''}  
      
        <li  className={classes.Logout} onClick={()=>{
          localStorage.removeItem('mascStudetDb')
          localStorage.removeItem('mascAdmin')
          history.push('/login')
          
          }}> Logout</li>
      </ul>
    </div>
  );
};

export default Option;
