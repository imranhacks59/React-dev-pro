import React from "react";


const RestaurentCard=({name,cloudinaryImageId,avgRating,cuisines})=>{
  
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img src={
         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId 
        } />
        <h2>{name}</h2>
        <p>{avgRating}</p>
        <p>{cuisines}</p>
        <p>400 for two</p>
      </div>
    )
  }

  export default RestaurentCard