function customRender(reactElement, container) {
  /* const domElement = document.createElement(reactElement.type)   //creates the element, here it is "<a><a/>"
    domElement.innerHTML = reactElement.children                  //adds the innerHTML text inside "a" tag like this--> <a>Click me to visit google<a/>
    domElement.setAttribute('href',reactElement.props.href)        //sets the attributes inside the "a" tag, here we are doing manually one by one, not efficient.
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement);  // append/attach this domElement into container */

  const domElement = document.createElement(reactElement.type); //creates the element, here it is "<a><a/>"
  domElement.innerHTML = reactElement.children; //adds the innerHTML text inside "a" tag like this--> <a>Click me to visit google<a/>

  for (const prop in reactElement.props) {   //Set all the attributes inside reactElement.props object using "for loop" inside the "a" tag, efficient way.
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);  //reactElement.props[prop]--> gives the "value" of prop "key" element inside props object.
    }
    
    container.appendChild(domElement)
}

const reactElement = {  //reactElement-->a virtual representation of a DOM element
    type: "a",
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector('#root')  //Accessing the div element by its id = root, "#" means id, "." means class, and many more.

customRender(reactElement, mainContainer);







/**Code Breakdown
1️⃣ reactElement — a virtual representation of a DOM element
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click me to visit google"
}


➡️ Think of this as a manual version of JSX.
If you wrote JSX like this:

<a href="https://google.com" target="_blank">
  Click me to visit google
</a>


React would internally convert it into an object similar to the one above.

So:
type → "a" (means create an <a> tag)
props → { href, target } (attributes for the tag)
children → the inner text content

2️⃣ customRender(reactElement, container)
This function creates and attaches the element to the DOM.
Let’s go line by line 👇

🔹 Line 1
const domElement = document.createElement(reactElement.type)

Creates an actual HTML element — in this case:
document.createElement("a")


→ produces <a></a> in memory (not yet on the page).

🔹 Line 2
domElement.innerHTML = reactElement.children


Sets the inner content of that <a> tag:
<a>Click me to visit google</a>

🔹 Lines 3–4
domElement.setAttribute('href', reactElement.props.href)
domElement.setAttribute('target', reactElement.props.target)


Adds attributes to the anchor element:

<a href="https://google.com" target="_blank">Click me to visit google</a>

🔹 Line 6
container.appendChild(domElement);

Actually inserts the newly created element into the page.
If your index.html has:
<div id="root"></div>


then after running the code, your HTML becomes:

<div id="root">
  <a href="https://google.com" target="_blank">
    Click me to visit google
  </a>
</div>

3️⃣ const mainContainer = document.querySelector('#root')
This finds the <div id="root"></div> from your HTML, so you know where to inject the element.

4️⃣ Final Call
customRender(reactElement, mainContainer);


Tells your function to:
Take the virtual object (reactElement)
Convert it to a real DOM element
Insert it inside the #root div

🧠 Summary
Concept	Meaning
reactElement	Virtual DOM element (like JSX)
customRender()	Converts virtual element to real HTML
document.createElement()	Creates the tag
setAttribute()	Adds props like href, target, etc.
appendChild()	Renders it on the webpage

🧩 Output on Browser
After execution, your browser will show:
👉 Click me to visit google
…and when clicked, it opens Google in a new tab. */














/************************************************************************************************************************************************************** */



/**document.querySelector()

querySelector() is a method used to select elements from the DOM using CSS-style selectors.

👉 Syntax:

document.querySelector("selector")


It returns the first matching element found in the document.

🎯 CSS Selectors You Can Use
Selector	Example	What it selects	Example HTML
#id	"#root"	Element with id="root"	<div id="root"></div>
.class	".container"	Element(s) with class="container"	<div class="container"></div>
tag name	"p"	The first <p> tag	<p>Hello</p>
attribute	"[type='text']"	Element with type="text"	<input type="text" />
descendant	".card p"	<p> inside element with .card class	<div class="card"><p>Text</p></div>
multiple	".menu li"	<li> inside .menu	<ul class="menu"><li>Item</li></ul>
🧩 Examples
1️⃣ Select by ID
const root = document.querySelector("#root");


✅ Selects:

<div id="root"></div>

2️⃣ Select by Class
const box = document.querySelector(".box");


✅ Selects:

<div class="box"></div>

3️⃣ Select by Tag Name
const heading = document.querySelector("h1");


✅ Selects the first <h1> element.

4️⃣ Combine Selectors
const item = document.querySelector(".list-item.active");


✅ Selects an element with class="list-item active".

5️⃣ Nested Selection
const paragraph = document.querySelector(".container p");


✅ Selects the first <p> inside an element with class container.

🆚 querySelector() vs querySelectorAll()
Method	Returns	Example
querySelector()	First matching element	document.querySelector(".btn")
querySelectorAll()	All matching elements (NodeList)	document.querySelectorAll(".btn")

Example:

const allButtons = document.querySelectorAll(".btn");


Then you can loop through:

allButtons.forEach(btn => console.log(btn.textContent));

💡 Shortcut Recap
Symbol	Meaning	Example
#	Select by ID	#root
.	Select by Class	.container
no symbol	Select by Tag	div, p, h1

✅ Example combining everything:

<div id="root" class="main container">
  <p class="text">Hello</p>
</div>

document.querySelector("#root")        // selects the element by id
document.querySelector(".container")   // selects by class
document.querySelector("p.text")       // selects <p class="text">
document.querySelector("#root p")      // selects <p> inside #root */