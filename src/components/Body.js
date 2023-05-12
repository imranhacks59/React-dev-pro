import React, { useState } from "react";
import {restaurantList} from '../utils/Mockdata'
import RestaurentCard from "./RestaurentCard";

const Body=()=>{
    const [restaurants,setRestaurants]= useState(restaurantList);
    const [searchText,setSearchtext]=useState('');
    
    const filteredData=()=>{
        const data = restaurants.filter((res)=>(
            // res.data.name.includes(searchText)
            res.data.rating >4
        ))
        setRestaurants(data)
    }
    return(
      <div className="body-container">
        <div className="res-search" style={{marginTop:"20px"}}>
          <input type="text"
           placeholder="search restaurant near you"
           onChange={(e)=>setSearchtext(e.target.value)}
           />
           
          <span onClick={filteredData}>Search</span>
        </div>
  
        <div className="res-container">
           {
            restaurants.map((restaurant)=>{
             return   <RestaurentCard key={restaurant.data.id} {...restaurant.data} />
            
            }
            )
           }
        </div>
      </div>
    )
  }

  export default Body