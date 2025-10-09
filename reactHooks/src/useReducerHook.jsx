/**useReducer is similar to useState, But instead of providing "state" & "setter fucntion". it provides state and dispatch function. 
 * the useReducer Hook accepts two arguments 
 * -Reducer function ---> specifies how the state gets updated.
 * -Initial state
 * and returns: Current state and Dispatch method.
  
 when we use the useState hook, we directly update the "state" variable using the "setter function" , but when we use the useReducer hook we can efficiently update the "state" variable for different "actions". 
*/

import React, { useState, useReducer } from 'react'
import './App.css'

function App() {
    //const [count, setCount] = useState(0)
    // const [state, dispatch] = useReducer(reducer, Initial state)   //This useReducer function takes two parameters "reducer function" & "initial state". It gives two value "state" & "dispatch method"
   
    const initialState = { count: 0 };

    const reducer = (state, action) => {  //This will return the updated "state"
        switch (action.type) {   //action contains this object-->{ type: "Increase" }, state contains -->{count:0}
            case 'Increase': {
                return { count: state.count + 1 }; //Updating the count value by +1
            }
            case 'Decrease': {
              return { count: state.count - 1 }; //Updating the count value by -1
            }
            case 'input': {
                return { count: action.payload }
            }
            default: {   //if we are not providing any type then it will return the default value i.e: current state.
                return state   //return current state
            }
        }

        
       // return { count: state.count + 1 };  //here "state", from "useReducer" contains this object--> {count:0}, to access this count from object we are using--> "state.count".
    }

    




    const [state, dispatch] = useReducer(reducer, initialState);  //This dispatch function will update the state by calling the reducer function based on "action-->{type: 'Increase/Decrease'}".
    //This state will give the current state value, dispatch function will be used for updating this state. 

    return (
      //So now when we click on this button, it will call this dispatch function which contains the "action--> {type: 'Increase'}" , and dispatch function will update the state based on action, by calling the reducer function.
      <>
        <h1>{state.count}</h1>

        <button onClick={() => dispatch({ type: "Increase" })}>Increase</button>
        <button onClick={() => dispatch({ type: "Decrease" })}>Decrease</button>
         <br />
            <input value={state.count}
                onChange={(e)=>dispatch({type:'input',payload:Number(e.target.value)})}
                type="number" />
        </>
    );
}

export default App;

/** when we use the useState hook, we directly update the "state" variable using the setter function , but when we use the useReducer hook we can efficiently update the "state" variable for different actions */