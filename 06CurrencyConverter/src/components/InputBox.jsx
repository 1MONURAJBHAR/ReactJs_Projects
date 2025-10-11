import React, { useId } from "react";

//Function Definition with Props
//This function accepts many props (inputs) from its parent component:
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  //Create a unique ID for the input
  //useId() is a React hook that creates a unique ID (so if you use many InputBox components, each one has its own unique input ID).
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      
      
        <div className="w-1/2">
      
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        
      </div>
      
          

      <div className="w-1/2 flex flex-wrap justify-end text-right">
      
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
            
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
            
          ))}
                  
        </select>
      </div>
    </div>
  );
}

export default InputBox;




/**First, what is <select>?

It’s a dropdown menu in HTML (and React).
It allows the user to choose one option from a list (like a list of currencies).

🧩 The JSX code:
<select
  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
  value={selectCurrency}
  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
  disabled={currencyDisable}
>
  {currencyOptions.map((currency) => (
    <option key={currency} value={currency}>
      {currency}
    </option>
  ))}
</select>

🔍 Line-by-line Explanation
1️⃣ The opening <select> tag
<select
  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"


Adds Tailwind CSS classes for styling:

rounded-lg → rounded corners

px-1 py-1 → small padding

bg-gray-100 → light gray background

cursor-pointer → shows pointer on hover

outline-none → removes default blue outline when focused

2️⃣ value={selectCurrency}
This makes the dropdown a controlled component in React.
It shows the currently selected value from the variable selectCurrency.
For example, if selectCurrency = "usd", then “usd” will appear selected in the dropdown.
So React controls what is selected, not the browser.

3️⃣ onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
This handles what happens when the user changes the dropdown selection.
e.target.value = the newly selected currency (for example, "inr").
onCurrencyChange is a function passed as a prop.

The && means: “only call it if the function exists.”
🧠 So basically:

When user picks a different currency, call onCurrencyChange(newCurrency) to tell the parent component the new value.

4️⃣ disabled={currencyDisable}

If currencyDisable is true, the dropdown becomes unclickable.

Useful if you want to “lock” one of the boxes in a currency converter (like a “To” box that updates automatically).

5️⃣ The options list
{currencyOptions.map((currency) => (
  <option key={currency} value={currency}>
    {currency}
  </option>
))}


currencyOptions is an array (like ["usd", "inr", "eur", "gbp"]).

.map() loops over it to create <option> elements dynamically.

Each <option> looks like:

<option key="usd" value="usd">usd</option>


key={currency} helps React identify each option efficiently.

value={currency} = the actual data sent when selected.

{currency} (inside the tags) = the text shown to the user.

✅ Example in action

If:

currencyOptions = ["usd", "inr", "eur"];
selectCurrency = "inr";
currencyDisable = false;


Then your dropdown will look like:

[ inr ▼ ]


with all 3 options inside.

And when you select “usd,”
React will call onCurrencyChange("usd").




What it is
<option key={currency} value={currency}>
  {currency}
</option>


This is one item in a dropdown menu (<select>).
It represents one currency in your list of currencies.




🔍 Line-by-line
1️⃣ key={currency}
React uses key to identify each element uniquely in a list.
Helps React efficiently update the DOM when the list changes.
Usually, each currency code ("usd", "inr", "eur") is unique — perfect for key.

2️⃣ value={currency}
This is the actual value sent when the user selects this option.
Example: If user selects "usd", then e.target.value in the <select> change event will be "usd".

3️⃣ {currency} (between the tags)
This is the text shown to the user in the dropdown.
Example: If currency = "usd", the dropdown will show usd in the list.

✅ Example
If currencyOptions = ["usd", "inr", "eur"], this .map() produces:

<option key="usd" value="usd">usd</option>
<option key="inr" value="inr">inr</option>
<option key="eur" value="eur">eur</option>


When the user selects inr, onChange receives "inr" as the selected value.

💡 Key point
key → for React only (internal)
value → for JavaScript/React to know which option is selected
Text inside → what the user sees in the dropdown




💡 Summary table
Part	Meaning
value={selectCurrency}	Controls which option is selected
onChange={...}	Runs function when user picks a new currency
disabled={currencyDisable}	Turns dropdown on/off
currencyOptions.map(...)	Creates options dynamically
className="..."	Adds styling */















/**Importing React & useId
import React, { useId } from "react";

React is needed for JSX.
useId() is a React hook that creates a unique ID (so if you use many InputBox components, each one has its own unique input ID).

2. Function Definition with Props
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {


This function accepts many props (inputs) from its parent component:
label → The text shown above the input (like “From” or “To”)
amount → The value entered in the input box
onAmountChange → A function to handle typing inside the input
onCurrencyChange → A function to handle currency dropdown change
currencyOptions → List of currencies (["usd", "inr", "eur"])
selectCurrency → Currently selected currency
amountDisable → If true → disables amount input
currencyDisable → If true → disables dropdown
className → Extra CSS classes

3. Create a unique ID for the input
const amountInputId = useId();


React generates something like "r0-1" or "r1-2".
This ensures every input/label pair is uniquely linked.

4. Return JSX (UI)
return (
  <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>


A white box with rounded corners, small text, and flexible layout.

5. Left side — amount input
<div className="w-1/2">
  <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
    {label}
  </label>


label shows the title (like “From” or “To”).

htmlFor={amountInputId} connects this label with the input below.
👉 Clicking the label focuses the input automatically.

6. Input box
<input
  id={amountInputId}
  className="outline-none w-full bg-transparent py-1.5"
  type="number"
  placeholder="Amount"
  disabled={amountDisable}
  value={amount}
  onChange={(e) =>
    onAmountChange && onAmountChange(Number(e.target.value))
  }
/>


It’s a number input.
disabled → controlled by amountDisable.
Shows the current value = amount.
When user types, it calls onAmountChange() (if provided) and passes the new value.

7. Right side — currency dropdown
<div className="w-1/2 flex flex-wrap justify-end text-right">
  <p className="text-black/40 mb-2 w-full">Currency Type</p>
  <select
    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
    value={selectCurrency}
    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
    disabled={currencyDisable}
  >
    {currencyOptions.map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ))}
  </select>
</div>


This dropdown lists all available currencies.
value={selectCurrency} → shows the current selected currency.
When user changes it, onCurrencyChange() is called.
It is disabled if currencyDisable is true.

8. Return the complete component
Finally, the function ends:
export default InputBox;


so you can import and reuse this component anywhere else.

🧠 Summary in 1 line:
➡ InputBox = a small, reusable component that shows
a number input (for amount) + a dropdown (for currency) with full control and custom styling.
🎯 Bonus: What does htmlFor={amountInputId} do again?
It links the <label> and <input> together.
So if you click on the label (like “From”), the input box automatically gets focus — good for accessibility and UX. */














/**htmlFor={amountInputId} is used in React (JSX) inside a <label> tag — it connects the label to a specific input element.


🧠 Meaning:

In plain HTML, you normally write:

<label for="amount">Enter Amount:</label>
<input id="amount" type="number" />


In React (JSX), the for attribute is replaced with htmlFor because for is a reserved JavaScript keyword.


<label htmlFor="amount">Enter Amount:</label>
<input id="amount" type="number" />


const amountInputId = "amount";

<label htmlFor={amountInputId}>Enter Amount:</label>
<input id={amountInputId} type="number" />


✅ Effect:
Clicking on the label automatically focuses the connected input field — improving accessibility and usability.


✅ Summary
HTML	                 React Equivalent	             Purpose
for="amount"	          htmlFor="amount"	              Links label to input
id="amount"	              id={amountInputId}	          Identifies input element
Works together	          htmlFor={amountInputId}	      Clicking label focuses input */