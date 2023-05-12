import React from "react"

const Header=()=>{
    return(
      <div className="header-container">
         <div className="main-logo">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/016/660/544/small_2x/burger-logo-illustration-modern-graphic-food-logo-design-burger-logo-illustration-food-design-grapic-modern-flat-design-logo-emblem-badge-fast-food-restaurant-circle-emblem-free-vector.jpg" alt="logo" />   
         </div>
         <div className="nav-bars">
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
           </ul>
         </div>
      </div>
    )
  }

  export default Header