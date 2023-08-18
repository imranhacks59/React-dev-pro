import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const RestaurentCard=({name,cloudinaryImageId,avgRating,cuisines,key})=>{
  
    return(
      <Fragment>
        {/* <Link to={`/restaurants/${key}`}> */}
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img src={
         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId 
        } />
        <h2>{name}</h2>
        <p>{avgRating}</p>
        <p>{cuisines}</p>
        <p>400 for two</p>
      </div>
      {/* </Link> */}
      </Fragment>
    )
  }

  export default RestaurentCard