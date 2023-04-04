/*
printing hello world from javascript

var heading=document.createElement('h1');
heading.innerHTML = 'hello world from javascript'
const root=document.getElementById('root');
root.appendChild(heading);
*/

// hello world using core react

// const parent = React.createElement("div",{id:"parent"},
//    [
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"i am h1 tag")
//     ])
//    ]
// )
import React from "react";
import  ReactDOM  from "react-dom/client";

const heading=React.createElement("h1",{id:"title"},"heading")
const container=React.createElement("div",{id:"container"},heading)
const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(container)
