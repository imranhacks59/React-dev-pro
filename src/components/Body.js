import React, { useEffect, useState } from "react";
import {restaurantList} from '../utils/Mockdata'
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
    const [restaurants,setRestaurants]= useState([]);
    const [filteredData,setFilteredData]=useState([])
    const [searchText,setSearchtext]=useState('');
    
    const fetchData= async()=>{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
      // const data= await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`)
      const json= await data.json();
      console.log(json)
      // setRestaurants()
      setRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
      setFilteredData(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
    }
  useEffect(()=>{
    fetchData()
  },[])

    // const filteredData=()=>{
    //     const data = restaurants.filter((res)=>(
    //         // res.data.name.includes(searchText)
    //         res.data.rating >4
    //     ))
    //     setRestaurants(data)
    // }
    const resFilteredData=()=>{
      const fData = restaurants.filter((res)=>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())  
      )
      setFilteredData(fData)
    }
    return(
      restaurants.length === 0 ? <Shimmer /> : (
        <div className="body-container">
        <div className="flex m-4" style={{marginTop:"20px"}}>
          <input 
          className="px-4 border border-solid border-black"
          type="text"
           placeholder="search restaurant near you"
           onChange={(e)=>setSearchtext(e.target.value)}
           />
           
          <span 
          className="bg-blue-300 mx-4 px-4 py-2 rounded-md cursor-pointer"
           onClick={resFilteredData}>Search</span>
        </div>
  
        <div className="flex flex-wrap">
           {
            filteredData.map((restaurant)=>(
              <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
               <RestaurentCard key={restaurant.info.id} {...restaurant.info} />
             </Link>
            )
            )
           }
        </div>   
      </div>
      )
      
    )
  }

  export default Body