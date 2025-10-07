import Chai from "./chai.jsx"

function App() {

  return (
    <>
      {" "}
      <Chai />
      <h3>Hello Monu Rajbhar</h3>
    </>
  );
}

export default App



/**
{" "} in JSX simply means a space character.
Yes — that’s it! It adds a single blank space in your rendered HTML.

🧠 Why it exists:
In JSX (React’s HTML-like syntax), spaces and newlines can get ignored sometimes.
So if you want to manually add a space between two elements or pieces of text, you can use { " " }. 

how it Work
Anything inside { ... } in JSX is treated as JavaScript code.
" " is a string with a single space.
So { " " } inserts that space into the output.*/



/**Function Declaration (Declarative Function)
Definition:
A function declaration is when you define a function using the function keyword directly with a name.

✅ Example:
function greet() {
  console.log("Hello!");
}

🧠 Features:
Hoisted → You can call it before or after defining it.
Has its own name (greet) and scope.
Declared directly in the top-level or inside another function.

💡 Example of Hoisting:
sayHello(); // ✅ Works fine

function sayHello() {
  console.log("Hello World");
}


👉 Works because function declarations are hoisted to the top by JavaScript.
🧩 2. Function Expression
Definition:
A function expression is when you assign a function to a variable or constant.

✅ Example:
const greet = function() {
  console.log("Hello!");
};

🧠 Features:
Not hoisted → You must define it before using it.
Can be anonymous (no function name) or named.
Often used with arrow functions in modern JS (like in React).

❌ Example of No Hoisting:
sayHello(); // ❌ Error: Cannot access 'sayHello' before initialization

const sayHello = function() {
  console.log("Hello World");
}; */