import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/**ReactDOM is a React library that connects your React code (JavaScript/JSX) to the actual web page (the browser DOM).
Think of it like a bridge 🪄 between:
The virtual world of React (your components, state, JSX)
And the real HTML page (the Document Object Model — DOM)

🧩 DOM Refresher
The DOM (Document Object Model) is a tree-like structure of your web page’s HTML.
It’s how browsers represent and manipulate elements like:

<h1>Hello</h1>
<p>This is a paragraph.</p>

⚙️ So What Does ReactDOM Do?
ReactDOM takes your React components (written in JSX) and renders them into the browser’s DOM.

✅ Example
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


Here:
React → describes what UI should look like (<App />)
ReactDOM → handles how to put that UI into the real HTML (<div id="root">)

🧠 ReactDOM Has Two Main Jobs:
1️⃣ Rendering components
ReactDOM.createRoot(document.getElementById("root")).render(<App />);


Displays your React component inside a real HTML element.
Keeps the UI updated when data changes (thanks to the Virtual DOM).

2️⃣ Managing updates efficiently
ReactDOM compares your component tree with its Virtual DOM, and only updates what’s necessary — instead of reloading the whole page.

That’s why React apps are fast and smooth ✨

🧱 Example Visualization
App.jsx (React world)
↓
ReactDOM (the bridge)
↓
<div id="root"></div> (Browser world)

🧰 ReactDOM in React 18+
In older versions (React 17 and below), you used:
ReactDOM.render(<App />, document.getElementById("root"));


In React 18, it changed to:
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

💡 Why?
To support the new Concurrent Rendering system — making apps more responsive and efficient.

🪄 In Simple Words
Term	Meaning
React	Creates components and UI structure
DOM	The real HTML structure in browser
ReactDOM	Connects React to the browser’s DOM

🧩 Think of ReactDOM as the “glue” — it takes your React components and sticks them into your real web page efficiently. */

