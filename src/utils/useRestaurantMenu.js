
// custom hook-- as we know hooks is nothing but normal js function, so 
// so here we are bulding our own custom hook a/c to our rec.
// using this we will not required to manage state and fetching res data in RestaurantMenu.js component
// so that component will be less code its increases more readability and testability

import { useEffect, useState } from "react";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139391&lng=77.2090212&restaurantId='+resId);
        const json= await data.json();
      //   console.log(json)
        setResInfo(json.data)
      //   console.log(json.data)
      }
    return resInfo;
}

export default useRestaurantMenu;