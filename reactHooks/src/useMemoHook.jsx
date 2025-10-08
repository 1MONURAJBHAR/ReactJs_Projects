//The React useMemo Hook returns a memoized value.(It's like caching a value so that it doesn't need to be recalculated.)
//The useMemo Hook only runs when one of its dependencies gets updated.
//This can improve the performance of the application. There is one more hook in react to improve performance, that is useCallback hook.

//The useMemo and useCallback Hooks are similar. The main difference is:
//-useMemo returns a memoized value.
//-useCallback returns a memoized function.

//useMemo(callback,[dependencies]) --> When the dependencies changes only then the callback function get execuetd.


import { useState,useMemo } from "react";
import "./App.css";

function App() {
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)

    function cubeNum(num) {  //This cubeNum function gets executed/rendered again & again when the counter changes
        console.log(`Calculation done!`);
        return Math.pow(num, 3)  //This will return the cube of a number "num"
    }

    //const result = cubeNum(number); //This value also gets calculated again & again as the counter gets updated.

    //const result = useMemo(() => { return cubeNum(number) }, [number]); //When this number dependency changes the callback function is called/executed.
                //or
    const result = useMemo(() => cubeNum(number), [number]);  //This can also be written as.

    return (
        <>
            <input type="number" value={number } onChange={(e)=>{setNumber(e.target.value)}}/>
            <h1>Cube of the number:{result}</h1>
            <button onClick={() => { setCounter(counter + 1) }}>Counter++</button>
            <h1>Counter: { counter }</h1>
        </>
    )//Here when we update counter via counter++ , then "counter state" changes , and when state changes the react re-renders the component, and that's why the cube value is calculated again & again.


}

export default App;



/**Component Mounts (Initial Render)
When your React app first loads, React calls your App() function to render the UI for the first time.
At that moment:
const [number, setNumber] = useState(0);


number is initialized to 0 (your default state).
So React uses 0 as the current value for this render.

Then it reaches:
const result = useMemo(() => cubeNum(number), [number]);


useMemo runs for the first time, because there’s no cached value yet.
It calls your function cubeNum(0).
Inside cubeNum, the console.log("Calculation done!") executes. ✅
So you see this in console:
Calculation done!

2️⃣ React Strict Mode (Development-Only Behavior)
If your project is created with Vite or Create React App, it usually wraps <App /> inside:

<React.StrictMode>
  <App />
</React.StrictMode>


Strict Mode causes React to intentionally call App() twice (in development only!)
to detect side effects like impure code.

So now it runs this again:
Calls App() a second time.
Again useMemo(() => cubeNum(0), [number]) runs.
Again logs: Calculation done!

✅ So you see it twice in console on page load.

3️⃣ Why Only Once in Production

If you remove <React.StrictMode> (or build the app for production),
React will render only once, so you’ll see:

Calculation done!


just one time — as expected.

🔁 Summary
Stage	What happens	Why
Page loads	App() runs, number = 0	First render
cubeNum(0) runs	console.log("Calculation done!")	Computed by useMemo
React Strict Mode check	Runs App() again	Double render check
Second cubeNum(0)	Logs again	Second “Calculation done!”
✅ In production	Only once	Strict Mode off

So yes — you are correct:
✅ On first page load → React renders the component,
✅ Assigns 0 to number,
✅ Calls cubeNum(0) once (or twice in Strict Mode),
✅ And logs "Calculation done!". */

/********************************************************************************************************************************************************************************************************** */

/**<input 
  type="number"
  value={number}
  onChange={(e) => { setNumber(e.target.value) }}
/>
🧠 Step 1: Controlled component concept
In React, inputs are usually controlled components —
that means React controls their value using state.

Here:

const [number, setNumber] = useState(0);
number → current value stored in React’s state
setNumber() → function to update that state
Then you “connect” this state to your input box using:


value={number}
So whatever is inside number, that’s what appears in the input box.

🧩 Step 2: Handling user input
When you type something into the input box:
The browser fires the onChange event
React passes that event as e (short for “event object”)
You can access what the user typed using:


e.target.value
where

e.target → the <input> element

.value → whatever text/number you typed

🧩 Step 3: Updating state
Then you call:


setNumber(e.target.value)
That tells React:

“Hey, update the number state with the new input value.”

Now React will:

Update the number state variable

Re-render the component

Show the new value inside the input box (because value={number})

🔄 So the data flow looks like this

User types → onChange triggers → setNumber() updates state → React re-renders → input shows new number
⚙️ Example in action

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>Number: {number}</h2>
    </>
  );
}
If you type 10, React updates:


number = "10"
and shows:


Number: 10
⚠️ One small note
Even though the <input type="number"> is numeric,
e.target.value always gives a string by default.

If you really need it as a number, you can convert it:

js
Copy code
setNumber(Number(e.target.value));
✅ Summary
Code part	Meaning
value={number}	The input’s value is controlled by React state
onChange={(e)=>setNumber(e.target.value)}	Whenever user types, update React state
useState(0)	Holds current input value
Re-render happens	Because state changed */