/**The useEffect Hook allows you to perform side effects in your components
 * some examples of side effects are:
 * -Fetching data from API
 * -Directly updating the DOM 
 * -Timers like setTimeOut and SetInterval
 */

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  /**A callback function is simply a function passed as an argument to another function,
     so that it can be called (“called back”) later inside that other function. */

  // useEffect(cb, [dependencies]) //use Effect takes two parameters one is "callback"  and another is "dependencies" in "array".
  /*we can use this useEffect() in three ways
   1)useEffect(callback)  --> useEffect only with call back
   2)useEffect(callback, []) --> useEffect with a call back and an empty array.
   3)useEffect(callback, [variable1,variable2, variable3,........., variablen])---> useEffect with callback and dependencies. 
   */

  const [count, setCount] = useState(0); //initial value of scount is 0.
  const [name, setName] = useState("Monu Rajbhar")
    
  //Whenever we use useEffect(()=>{}) without any  dependency then it will continueosly execute the callback function if any state/variable changes in the (component i.e: function -->App()).
//   useEffect(() => {   //Here useEffect(()=>{}) will execute its callback function every time as count state changes in component App, and inside useEffect the setTimeOut will incresea the count in 2 seconds every time it is executed, so the value of count will increase continueosly.
//     setTimeout(() => {
//       //This setTimeOut(()=>{},2000) will increseas the value of "count" by 1 in  every 2 seconds.
//       setCount(count + 1);
//     }, 2000);
//   });
    
    
    //When we use useEffect with [] empty array, i.e:with dependency but without any variable, then the useEffect will incresea the value only "1/one" time.
    //OR we can call it as, it will call the "callback" function only once after a variable changes in the component.
    // useEffect(()=>{ //---> callback function
    //    setTimeout(() => {
    //        setCount(count + 1);
    //     }, 2000);  //increment in every 2 seconds
    // }, []);
    

    //Now when we use any variable in dependencies in useEffect, the useEffect will call/execute the callback function every time when the variable changes.
    // useEffect(() => { //It will also execute/call the callback function as the page loads because while loading the page count gets 0 value.
    //     setTimeout(() => {
    //         setCount(count + 1);
    //     }, 2000);  
    // }, [count])  //now whenever this count variable changes the useEffect will call/execute the callback function.
    

    //Dependencies with multiple variables
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count + 1);
    //     }, 2000);
    // }, [count, name]) //when any one of the dependencies changes the useEffect will call/execute the callback function.



  return (
    <>
      <h1>The timer is increasing by {count}</h1>
    </>
  );
}

export default App;