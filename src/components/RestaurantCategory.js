import React from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
    const handleClick = () => {
        setShowIndex();
      };
  return (
    <div className='w-full mx-auto my-4 bg-gray-50 shadow-lg p-4 lg:w-6/12'>
        <div className='flex justify-between cursor-pointer'
        onClick={handleClick}
        >
            <span>
                {data?.title} ({data?.itemCards?.length})
            </span>
            <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
    </div>
  )
}

export default RestaurantCategory