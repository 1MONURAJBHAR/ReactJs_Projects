//useRef() is a react hook that allows us to create mutable variables, which will not re-render the component.
//useRef() is also used for accssing & modifying the DOM elements
import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const count = useRef(0); //useRef does not re-renders the component when count is changed,instead in useState when the count is changed it re-renders the component.                                                                   //This gives us an object which contains "current" property which holds "value" passed in useRef.

  useEffect(() => {//Now re-rendering happens only when the any state/variable changes like "value". useEffect()-->Runs after every render (if no dependency array is given)
    count.current = count.current + 1; //--> This is my mutable variable inside the count object changing it does not re-renders the component.
   // console.log(count); //Notice here even though you see both current value is always 1 but on web you will see its value one less than the value on browsers console because this useEffect always run after rendering the component. Matlab value ko print karne ke baad +1 hoga
  });

  console.log(count); //printing that object -->{current: 10}, you will see that both current values are different on browsers console, because this console.log() is outside of useEffect() and will be executed during rendering.

  //👉SUPER INTRESTING *BROWSERS CONSOLE*
  /**Why it’s not showing +1 every time in console
Because your console.log(count) is outside useEffect() —
so it runs only during render, not after the useEffect() has updated count.current.

👉 useEffect() runs after render, so when React prints to the console,
the update to count.current hasn’t happened yet. */

  /*************************************************************************************************************************************************************************************************************************** */
  //const [count, setCount] = useState(0);

  // useEffect(() => { //Here we are using "useEffect" without any dependencies, so it will call/execute the callback function whenever any state/varible in the component changes.
  //     setCount(prev => prev + 1)  //means jitni bar App render hoga utni bar setCount() ko call/execute karo.
  // });

  /**when "value" changes 
   * React updates the state and re-renders the component
     (because React must show the latest value in the UI).
     * 
     function -->"setValue" does not changes and does not re-renders
     * The function setValue never changes — React gives you the same function reference each render.
    So, calling it doesn’t cause a re-render — but what it does (changing the state) causes the re-render. */
  /*************************************************************************************************************************************************************************************************************** */
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

export default App;
  







































/**Why count.current shows 2
Even though you only see one component, React renders your component twice in development mode — this is intentional behavior by React Strict Mode in React 18+.
⚙️ Explanation:
React Strict Mode intentionally:
Mounts your component,
Runs it,
Un-mounts it,
Then mounts it again immediately.
This helps detect side effects in your code (like impure operations).
So here’s what’s happening:

Render	What happens inside useEffect	Value of count.current
1st render	count.current = 0 + 1	1
2nd render (Strict Mode re-run)	count.current = 1 + 1	2

👉 That’s why the console shows { current: 2 }.

✅ If you remove Strict Mode (not recommended but for testing):

In main.jsx, you might have:

<React.StrictMode>
  <App />
</React.StrictMode>


If you remove React.StrictMode:

<App />


Then the component renders only once, and you’ll see:

{ current: 1 }

⚡ Key Takeaways
Concept	                    Explanation
useRef()	        Holds a mutable object ({ current: value }) that does not cause re-render when changed
useEffect()	        Runs after every render (if no dependency array is given)
Strict Mode	        Intentionally renders components twice in dev mode to detect side effects
Why current = 2   	Because the effect runs twice (due to Strict Mode) and increments twice */











/***🧩 The Two Forms of Updating State
1️⃣ Direct value update
setValue(value - 1);


Here, you’re using the current variable value from the render cycle.
It’s not always the latest value — it can become stale (out of date) if multiple updates happen quickly.

2️⃣ Functional (callback) update
setValue(prev => prev + 1);


Here, you give React a callback function.
React passes the most recent state value (even if multiple updates happen in a row).

🧠 Example to Understand the Difference
❌ Using setValue(value + 1)
const [value, setValue] = useState(0);

const handleClick = () => {
  setValue(value + 1);
  setValue(value + 1);
  setValue(value + 1);
};


You might expect value = 3
but you’ll actually get value = 1 😬

Why?
Because all three lines used the same “old” value from the current render (value = 0).

✅ Using functional update setValue(prev => prev + 1)
const handleClick = () => {
  setValue(prev => prev + 1);
  setValue(prev => prev + 1);
  setValue(prev => prev + 1);
};


Now value becomes 3 ✅
Each call gets the latest updated state, not the stale one.

⚙️ When to Use Which
Situation	Use
You only update once	setValue(value - 1) is fine
You update multiple times in a single function	✅ setValue(prev => prev + 1)
You depend on the previous value	✅ setValue(prev => prev + something)
You set an entirely new value (not related to old one)	setValue(newValue)
✅ Example in Counter App
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Correct: use functional update if you depend on previous count
    setCount(prev => prev + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Add</button>
    </>
  );
}

🧠 Summary
setValue(value - 1)	setValue(prev => prev - 1)
Uses value from current render	Uses the latest state value
Can be stale in async updates	Always up-to-date
Fine for single updates	Best for multiple/async updates */