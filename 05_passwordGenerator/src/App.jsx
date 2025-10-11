//import { useCallback, useState } from 'react'
import './App.css'

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null); //passwordRef-->{current:null}

  const passwordGenerator = useCallback(() => {
    //Cahcing the password generator function
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    //when password changes it recreates the function, memoizes that function
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  /** No, the password is not copied automatically when useCallback memoizes or recreates the function.
     It only copies when you manually call that function — for example, when you click the "Copy Password" button.
     
     When you define a function, you are only creating it — you’re telling JavaScript what the function should do, not actually doing it yet.
     Function Creation	-->Function is defined or stored in memory	-->At code load or render time
     Function Execution	-->Function’s code runs and produces result -->When you call it with () or trigger it via event*/

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-2xl rounded-2xl px-6 py-6 my-12 bg-gray-900 text-orange-400">
      {/* Title */}
      <h1 className="text-white text-3xl font-bold text-center mb-6">
        Password Generator
      </h1>

      {/* Password Display */}
      <div className="flex shadow-inner rounded-lg overflow-hidden mb-4 bg-gray-800">
        <input
          type="text"
          value={password} //**value={password} The text/value inside the input box is controlled by React state — the variable password. Whatever is stored in the state password, that’s what appears in the input box. If password changes → React re-renders the input → new value appears immediately. This makes it a controlled input component — React is in charge of the value. */
          className="outline-none w-full py-2 px-4 bg-gray-800 text-white text-lg font-mono"
          placeholder="Your password will appear here"
          readOnly /**readOnly is a HTML attribute that makes an input non-editable by the user, but still allows you (React or JavaScript) to update its value programmatically. */
          /**The user cannot type or change the text inside the box.But if the React state variable password changes,the input value still updates automatically. */
          ref={
            passwordRef
          } /**It connects the React variable (passwordRef) to the actual DOM element (the <input> in this case).
                              So after React renders, passwordRef.current will point to that real input element in the browser. */
        />

        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold transition-colors"
        >
          Copy Password
        </button>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-4">
        {/* Length Slider */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-300">
            Password Length: <span className="font-bold">{length}</span>
          </label>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer w-full"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        {/* Checkboxes */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              className="w-4 h-4 accent-orange-500"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="text-gray-300 text-sm">
              Include Numbers
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              className="w-4 h-4 accent-orange-500"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput" className="text-gray-300 text-sm">
              Include Symbols
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 font-bold rounded-lg transition-colors"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}







/**You asked:
When useCallback memoizes the function after first page load, does it automatically copy the password to clipboard?

✅ Answer:
No, the password is not copied automatically when useCallback memoizes or recreates the function.
It only copies when you manually call that function — for example, when you click the "Copy Password" button.

💡 Here’s what actually happens:
🔹 Step 1 – Component mounts (page loads)

React runs useCallback(...) once.

It creates the function copyPasswordToClipboard.

But React does not execute that function yet — it just stores (memoizes) it.

So nothing is copied to clipboard at this time.
👉 The function exists but is not called yet.

🔹 Step 2 – You generate a new password

The state variable password changes.

Because [password] is a dependency, useCallback recreates (memoizes again) the function with the new password value captured inside it.

Still — React does not automatically execute it. It just keeps it ready.

🔹 Step 3 – You click the Copy button

That’s when the function actually runs:

<button onClick={copyPasswordToClipboard}>Copy</button>


When clicked:

passwordRef.current.select() selects the text.

window.navigator.clipboard.writeText(password) executes.

✅ Password copied.

🧠 So in short:
Event	What happens	Does it copy automatically?
Page load	Function created (memoized)	❌ No
Password changes	Function recreated (new version)	❌ No
You click “Copy”	Function executed	✅ Yes

Would you like me to show a small example of this flow with console.log() so you can see when React re-creates vs executes the function?

You said:
function creation vs execution
ChatGPT said:

Perfect 👏 — this is one of the most important concepts in JavaScript and React.
Let’s go step-by-step to fully understand the difference between function creation and function execution.

⚙️ 1️⃣ Function Creation (Definition)

When you define a function, you are only creating it — you’re telling JavaScript what the function should do, not actually doing it yet.

Example:
function sayHello() {
  console.log("Hello, Monu!");
}


✅ Here:

The function is created (stored in memory).

But nothing happens yet.

No output is printed.

📌 It’s like writing down instructions but not running them.

⚡ 2️⃣ Function Execution (Calling)

When you call or invoke the function using parentheses (),
that’s when JavaScript executes the code inside it.

Example:
sayHello();  // 👈 execution


🖨️ Output:

Hello, Monu!


📌 Now the function’s body actually runs.

💡 React Example
Function creation:
const copyPasswordToClipboard = useCallback(() => {
  window.navigator.clipboard.writeText(password);
}, [password]);


Here, useCallback creates the function.
It’s stored in memory and can be reused — but it’s not executed yet.

Function execution:

When you attach it to a button:

<button onClick={copyPasswordToClipboard}>Copy</button>


Now, when the button is clicked 👉 React executes the function.

🧠 Analogy:
Concept	Example	Meaning
Creation	Writing a recipe in your notebook	Instructions exist but no food made yet 🍳
Execution	Actually cooking using the recipe	Instructions are followed → food is made 🍲
🧩 Summary Table
Term	Description	Happens When
Function Creation	Function is defined or stored in memory	At code load or render time
Function Execution	Function’s code runs and produces result	When you call it with () or trigger it via event */






































































/**const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(password);
}, [password]);


⚙️ Step-by-step explanation:
1️⃣ const copyPasswordToClipboard = useCallback(() => { ... }, [password]);
This defines a function that copies your generated password.
The useCallback hook memoizes this function — meaning React won’t recreate it every time the component re-renders, unless password changes.
Dependency [password] → if the password changes, a new version of the function is created.

2️⃣ passwordRef.current?.select();
This selects the entire text inside the input field connected with ref={passwordRef}.

Equivalent to clicking inside the input and pressing Ctrl + A.

The ?. (optional chaining) means:
If passwordRef.current exists, then call .select(); otherwise do nothing.
(Prevents errors before the ref is ready.)

3️⃣ passwordRef.current?.setSelectionRange(0, 999);
This ensures that the entire password text is selected — from character position 0 to 999.
It’s an extra safety step (some browsers don’t select text properly with .select() alone, especially on mobile).

4️⃣ window.navigator.clipboard.writeText(password);
This actually copies the password text to your clipboard 💾.
navigator.clipboard is a Web API that allows JavaScript to access the clipboard.
After this line, you can paste (Ctrl+V) the password anywhere.

🔹 In short:
This function:
Selects your password text from the input box.
Ensures it’s fully selected.
Copies it to clipboard.
Uses useCallback to avoid unnecessary re-creations.

 */












/**onChange={() => setNumberAllowed(!numberAllowed)}
This toggles the state whenever the checkbox is clicked.
If it was unchecked, it becomes checked.
If it was checked, it becomes unchecked.

🔹 Example Flow:
Initially:
const [numberAllowed, setNumberAllowed] = useState(false)
→ checkbox unchecked.

You click the checkbox → onChange runs → setNumberAllowed(true)
→ React re-renders → checkbox now checked ✅. */


export default App;







/**let char = Math.floor(Math.random() * str.length + 1);
1️⃣ Math.random()
Returns a random decimal number between 0 (inclusive) and 1 (exclusive).
Example: 0.0 ≤ Math.random() < 1.0
Could be 0.234, 0.999, 0.01, etc.

2️⃣ Multiply by str.length
Math.random() * str.length
str.length is the number of characters in the string you want to pick from.
For example, if str = "ABC", then str.length = 3.

Multiplying by str.length gives a number between 0 (inclusive) and str.length (exclusive).
Example:

Math.random() = 0.5 → 0.5 * 3 = 1.5
Math.random() = 0.9 → 0.9 * 3 = 2.7

3️⃣ Add 1
Math.random() * str.length + 1
This shifts the range up by 1.

Now, the range becomes 1 (inclusive) to str.length + 1 (exclusive).

⚠️ Problem:

String indices in JavaScript start at 0, not 1.

Using +1 may sometimes give an index out of bounds, especially if Math.random() is very close to 1.

4️⃣ Math.floor()
Math.floor(...)
Rounds a number down to the nearest integer.

Examples:
Math.floor(2.7) = 2
Math.floor(1.1) = 1
So, in your original line:


Math.floor(Math.random() * str.length + 1)
If str.length = 26, this gives 1 to 26 (inclusive of 1, exclusive of 27).

But string indices are 0 to 25, so index 26 would be invalid.

✅ Correct way
let char = Math.floor(Math.random() * str.length);
Now the range is 0 to str.length - 1, perfect for str.charAt(char). */