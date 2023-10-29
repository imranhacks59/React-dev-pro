import React, { useEffect, useState } from 'react'
import {MENU_API} from '../utils/Constants';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const {resId}=useParams();
    const [showIndex, setShowIndex] = useState(null);
    const dummy = "Dummy Data";
    const resInfo =useRestaurantMenu(resId);
    if(resInfo===null) return <Shimmer />
    console.log('res info ')
    console.log(resInfo)
    const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories)

  return (
    <div 
    // style={{padding:'1vmax 5vmax'}}
    className='text-center'
    >
        {/* <h2>hello</h2>  */}
        <h2>{name}</h2>
        <p>{cuisines.join(',')}-{costForTwoMessage}</p>
        {/* <p>{costForTwoMessage}</p> */}
        {/* {
            itemCards.map((res)=>(
                <li key={res?.card?.info?.id}>{res?.card?.info?.name}</li>
            ))
        } */}
        {categories?.length&&categories.map((category,index)=>(
   <RestaurantCategory
   key={category?.card?.card.title}
   data={category?.card?.card}
   showItems={index === showIndex ? true : false}
   setShowIndex={() => setShowIndex(index)}
   dummy={dummy}
   
   />
        ))}
     
    </div>
  )
}

export default RestaurantMenu