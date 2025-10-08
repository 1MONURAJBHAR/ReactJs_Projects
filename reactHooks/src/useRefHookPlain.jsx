//useRef() is a react hook that allows us to create mutable variables, which will not re-render the component.
//useRef() is also used for accssing & modifying the DOM elements
import { useEffect, useState, useRef } from "react";
import "./App.css";

/*
function App() {
  const [value, setValue] = useState(0);
  const count = useRef(0); 

  useEffect(() => {
    count.current = count.current + 1; 
  });

  console.log(count); 

  return (
    <>
      {" "}<button onClick={() => {setValue((prev) => prev - 1); }}>
        {" "}-1{" "}
          </button>
          
          <h1>{value}</h1>
          
      <button onClick={() => {setValue((prev) => prev + 1);}}>
        {" "} +1{" "}
          </button>
          
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default App;*/


//Accessing DOM elements
function App() {
    const inputElement = useRef();//Now this useRef is selecting/accessing the input field

    //The App component is rendered every time when btnClicked fucntion is called/executed.
    const btnClicked = () => {  //When we click on the button it will log the input field on the console or whatever functionality you pass.
        //console.log(inputElement); //-->you will get object inside that there is input field.
       // console.log(inputElement.current);  //you will get directly input field.  
        inputElement.current.style.background = "magenta"
      console.log(inputElement.current);  //inside the browsers console it will log the reference(live link) of that inputElement, at first no style is applied so it will log reference of inputElement without style. In the second log now the style is applied to input field so it will log reference with style.
    }
    //now inside "current" property you will get this input field as value.

  return (   //connect the useRef() to input field using the "ref={}" attribute.
    <>
          <input type="text" ref={ inputElement } />  

          <button onClick={btnClicked}>Click Here</button>
    </>
  );
}

export default App;
  

//When re-rendering happens
/**Action	                                                 Causes re-render?	     Explanation
setState() (useState, useReducer)	                        ✅ Yes	               React detects change and re-runs/re-renders component
useRef().current change	                                    ❌ No	               Ref is mutable but not reactive
Direct DOM manipulation (.style, .focus(), .value = ...)	❌ No	               React doesn’t watch direct DOM changes
Changing props from parent	                                ✅ Yes	               Parent passes new props → child re-renders */

//useState = React-managed memory → causes re-render
//useRef = Developer-managed memory → no re-render


/**What you log	                                    What you see	                         Why
console.log(inputElement.current)	                 May not show style	                 It’s a live reference
console.log(inputElement.current.style.background)   Shows "magenta"	                 It’s a fixed value
console.log(inputElement.current.cloneNode())	     Shows old version	                 It’s a snapshot copy */

/** */








































