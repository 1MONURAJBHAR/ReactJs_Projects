import { useState } from 'react'
import './App.css'


//Updation of UI is controlled by React
function App() {
  //let [counter, setCounter] = useState(15) //Inside the useState(15) at 0th index we get counter its initial value is the value passed in useState(15) & at 1st index we get setcounter 
  const [counter, setCounter] = useState(15);  //We can modify the value of objects and arrays in const.
    
  //let counter = 15;  //we are not using const because const variables cannot be re-assigned after their initial assignment & must be initialized at the time of their declaration, and  if they hold array,object they can be modified.  
  //let variables can be re-assigned, but cannot be re-declared within the same block scope.

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1); //shouldn’t use post-increment (counter++), because it does not update the state correctly — it mutates the existing variable, and React might not re-render.
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);

      //setCounter(()=>{})   //setCounter accepts a call back, it is a feature of it.
      setCounter(prevCounter => prevCounter + 1);   //prevCounter --> last upated state of counter, it will take the value which is updated and then again update it.
      setCounter(prevCounter => prevCounter + 1);   //will take the updated value from previous setCounter() and then update it, similarly all will do.
      setCounter(prevCounter => prevCounter + 1);   //Using prevCounter => prevCounter + 1 ensures each increment uses the correct previous value even in a batch.
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);   //it will update directly the final value, after updating all values, because the values goes into the batches to the UI and variables and fibre will only update the most recent value to optimize the process.
      





      console.log("value added", counter); //check in browsers console, Its intresting!... if you do not add Math.random(), It will add "value added circularly",if you add it you will get different values with "value added"
    } else {
      console.log("Maximum limit reached ...");
      
    }
  }
  

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter-1)
      console.log("value removed", counter);
    } else {
      console.log("Minimum limit reached ...");
      
    }
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value</button>

      <br />
      
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
