import React, { Suspense, lazy } from "react";
import  ReactDOM  from "react-dom/client";

/**
 * -Headers
 *   -logo
 *   -Nav bars
 * 
 * -Body container
 *  -search
 *  - restaurent container
 *    -res card
 *      -image
 *      -res name
 *      -ratings  
 *      -cuisins
 * -footer
 *  -logo and social media url
 *  -useful links
 * 
 */
import './index.css'
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body";
import Shimmer from "./src/components/Shimmer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery/Grocery";
// const Header=()=>{
//   return(
//     <div className="header-container">
//        <div className="main-logo">
//           <img src="https://static.vecteezy.com/system/resources/thumbnails/016/660/544/small_2x/burger-logo-illustration-modern-graphic-food-logo-design-burger-logo-illustration-food-design-grapic-modern-flat-design-logo-emblem-badge-fast-food-restaurant-circle-emblem-free-vector.jpg" alt="logo" />   
//        </div>
//        <div className="nav-bars">
//          <ul>
//           <li>Home</li>
//           <li>About us</li>
//           <li>Contact us</li>
//           <li>Cart</li>
//          </ul>
//        </div>
//     </div>
//   )
// }

// RestaurantList is JSON Data for displaying cards

const Grocery = lazy(()=>import('./src/components/Grocery/Grocery'))

const App=()=>{
return(
    <div className="main-container">
       <Header />
       <Outlet />
       {/* <Body /> */}
       {/* <Shimmer /> */}
    </div>
)
}

const AppRouter= createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/grocery',
                element:(
                    <Suspense fallback={<h1>Thoda wait krlo</h1>}>
                  <Grocery />
                    </Suspense>
                ) 
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu />
            }

        ],
        errorElement:<Error />
    }
])
 
const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={AppRouter} />)
