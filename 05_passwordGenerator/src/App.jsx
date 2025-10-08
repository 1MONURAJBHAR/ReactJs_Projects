//import { useCallback, useState } from 'react'
import './App.css'

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
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
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

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
          value={password}
          className="outline-none w-full py-2 px-4 bg-gray-800 text-white text-lg font-mono"
          placeholder="Your password will appear here"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold transition-colors"
        >
          Copy
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
            min={6}
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