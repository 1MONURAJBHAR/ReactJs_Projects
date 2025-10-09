//React allows us to create our own hook which is known as custom hook.

import React from "react";
import "./App.css";
import useLocalStorage from "./hooks/uselocalStorage";

function App() {

    // const [name, setName] = useState(
    //   localStorage.getItem("username") ? localStorage.getItem("username") : " "
    // );

    // //This useEffect will update the name in localStorage after rendering the whole UI, with key-name as username.
    // useEffect(() => {   //key=username, value=name, "key:value--> username:name"<-- stored in localstorage
    //     localStorage.setItem('username', name)
    // }, [name]);

    const [name, setName] = useLocalStorage('username', '')  //Provide the key-->'username' and initialValue-->''
    const [Id, setId] = useLocalStorage('Id', '')  //Provide the key-->'username' and initialValue-->''

    return (
        <>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            <h2> Hello, {name}! </h2>
            
            <input type="text" placeholder="Enter your name" value={Id} onChange={(e) => setId(e.target.value)} />
            <h2> Your Id: { Id } </h2>
        </>
    )
}

/**value={name}
The value attribute binds the input’s displayed text to the React state variable name.
Whatever value name currently holds in state → will appear inside the text box.
✅ Example:
If name = "Raj", then the textbox will show Raj.

Without value={name}:
If you remove the value attribute, the input becomes uncontrolled, meaning React no longer controls its text — it’s managed directly by the browser. 
That’s usually not what we want in React apps.

*/

export default App;






/**<input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
💡 Explanation
This <input> is a controlled component in React.

1️⃣ value={name}
The value attribute binds the input’s displayed text to the React state variable name.
Whatever value name currently holds in state → will appear inside the text box.

✅ Example:
If name = "Monu", then the textbox will show Monu.

2️⃣ onChange={(e) => setName(e.target.value)}
This is the event handler that updates state whenever you type in the box.
e.target.value means: “the latest text that the user typed”.
So if you type “A”, React will call:

js
Copy code
setName("A")
→ which updates the name state → re-renders the component → updates the value of the input.

3️⃣ Together — Controlled Input Behavior
Because value comes from React state, and onChange updates React state,
the input’s displayed value is always kept in sync with your component’s state.

🔁 Flow Summary
You type something → triggers onChange
setName(e.target.value) updates the state variable
React re-renders
The input’s value (bound to name) updates automatically
UI stays synchronized with the state ✅
🔍 Without value={name}
If you remove the value attribute, the input becomes uncontrolled, meaning React no longer controls its text — it’s managed directly by the browser. That’s usually not what we want in React apps. */





/**❌ Problem
The syntax is incomplete — your ternary operator ? has no else (:) part.
You wrote:
condition ? value


…but it should be:
condition ? valueIfTrue : valueIfFalse

✅ Correct Syntax
Here’s the fixed version:

const [name, setName] = useState(
  localStorage.getItem('username') ? localStorage.getItem('username') : ""
);


Or shorter (more modern way):
const [name, setName] = useState(localStorage.getItem('username') || "");

💡 Explanation
localStorage.getItem('username') returns the saved username (or null if not found).
Using || "" means:
if username exists → use it
if not → use empty string as default.

✅ Final clean version:
const [name, setName] = useState(localStorage.getItem('username') || ""); */