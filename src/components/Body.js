import React, { useEffect, useState } from "react";
import {restaurantList} from '../utils/Mockdata'
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { restaurants } from "./Config";
const Body=()=>{
    const [restaurants,setRestaurants]= useState([]);
    const [filteredData,setFilteredData]=useState([])
    const [searchText,setSearchtext]=useState('');
    
    const fetchData= async()=>{
      const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
      // const data= await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`)
      const json= await data.json();
      console.log(json)
      setRestaurants()
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
  const loc = 'delhi'
  const generateRestaurantURL = (name, locality) => {
    // Remove spaces and special characters and convert to lowercase
    const sanitizedName = name.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase();
    const sanitizedLocality = locality.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase();
  
    return `${sanitizedName}-${sanitizedLocality}-${loc}`;
  }
    // const filteredData=()=>{
    //     const data = restaurants.filter((res)=>(
    //         // res.data.name.includes(searchText)
    //         res.data.rating >4
    //     ))
    //     setRestaurants(data)
    // }
    // console.log()
    const resFilteredData=()=>{
      const fData = restaurants.filter((res)=>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())  
      )
      setFilteredData(fData)
    }
    return(
      restaurants.length===0 ? <Shimmer /> : (
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
           filteredData&& filteredData.map((restaurant)=>(
              <Link
            key={restaurant?.info.id}
            to={"/restaurants/"+
            //  generateRestaurantURL(restaurant?.info.name, restaurant?.info.locality)+'-'+
              restaurant?.info.id}
          >
            {console.log('rest info ')}
            {console.log(restaurant?.info)}
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