import React from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../../utils/useOnlineStatus"

const Header=()=>{

  const onlineStatus = useOnlineStatus();
    return(
      <div className="flex justify-between bg-blue-200 lg:bg-blue-400">
         <div className="main-logo">
            <img className="w-20" src="https://static.vecteezy.com/system/resources/thumbnails/016/660/544/small_2x/burger-logo-illustration-modern-graphic-food-logo-design-burger-logo-illustration-food-design-grapic-modern-flat-design-logo-emblem-badge-fast-food-restaurant-circle-emblem-free-vector.jpg" alt="logo" />   
         </div>
         <div className="flex items-center">
           <ul className="flex px-4">
           <li className="px-4"> <Link to='/' style={{textDecoration:'none'}}>{onlineStatus?'online':'offline'}</Link></li>
            <li className="px-4"> <Link to='/' style={{textDecoration:'none'}}>Home</Link></li>

            <li className="px-4"><Link to='/about' style={{textDecoration:'none'}}>About us</Link></li>
            <li className="px-4"><Link to='/grocery' style={{textDecoration:'none'}}>Grocery</Link></li> 
            <li className="px-4">Contact us</li>
            <li>Cart</li>
           </ul>
         </div>
      </div>
    )
  }

  export default Header