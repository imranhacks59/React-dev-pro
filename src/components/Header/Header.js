import React from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../../utils/useOnlineStatus"

const Header=()=>{

  const onlineStatus = useOnlineStatus();
    return(
      <div className="header-container">
         <div className="main-logo">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/016/660/544/small_2x/burger-logo-illustration-modern-graphic-food-logo-design-burger-logo-illustration-food-design-grapic-modern-flat-design-logo-emblem-badge-fast-food-restaurant-circle-emblem-free-vector.jpg" alt="logo" />   
         </div>
         <div className="nav-bars">
           <ul>
           <li> <Link to='/' style={{textDecoration:'none'}}>{onlineStatus?'online':'offline'}</Link></li>
            <li> <Link to='/' style={{textDecoration:'none'}}>Home</Link></li>

            <li ><Link to='/about' style={{textDecoration:'none'}}>About us</Link></li>
            <li ><Link to='/grocery' style={{textDecoration:'none'}}>Grocery</Link></li> 
            <li>Contact us</li>
            <li>Cart</li>
           </ul>
         </div>
      </div>
    )
  }

  export default Header