//useLayoutEffect works similarly to useEffect, but it is called before the User Interface gets mounted.
//it means useEffect gets called after printing the DOM elements.
//useLayoutEffect gets called before printing the DOM elements.

//example: if you create a layout using DOM elements and want to change the layout color using the useEffect hooks, then first it will diaplay the DOM elements layout then after that it will change its color this will cause the blink or flickering issue.
//But when we will change color using useLayoutEffect first it will change the color then after that it will display the DOM elements on the screen.


import React, { useEffect, useLayoutEffect } from "react";
import "./App.css"



function App() {

   useEffect(() => {  //This useEffect is called/executed after mounting/rendering the UI Element/ h2 tag.
     console.log("Message from useEffect");
   }, []);

   useLayoutEffect(() => {  //This useLayoutEffect is called/executed before mounting/rendering the UI element/h2 tag.
     console.log("Message from useLayoutEffect");
   }, []);


    return (
        <>
            <h1>Test Message</h1>
            {Array(40000).fill('').map((item, index) => (<li key={index}>{ Math.pow(Math.random(),10)}</li>))}
        </>
    )
}

export default App;

//Applications of useLayoutEffect hook
/**
 * 1) measuring the DOM element
 * 2) for animating the elements
 * 3) for fixing the flickering issue
 * 4) can also be used for API calling
 * 
 * //Reacts official document says, using useLayoutEffect hook can hurt performance of app, thats why it is recommended to use useEffect hook whenever it is possible.
 */