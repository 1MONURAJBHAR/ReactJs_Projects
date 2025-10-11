import React, { useId } from "react";

//Function Definition with Props
//This function accepts many props (inputs) from its parent component:
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],   //by default it is []--> empty array.
  selectCurrency = "usd",   //by default it is "usd"
  amountDisable = false,   //by default it is false
  currencyDisable = false, //by default it is false
  className = "", //to add extra css styles
}) {
  //Create a unique ID for the input
  //useId() is a React hook that creates a unique ID (so if you use many InputBox components, each one has its own unique input ID).
  const amountInputId = useId();

  return (
    /**htmlFor={amountInputId} connects this label with the input below.
👉 Clicking the label focuses the input automatically. */
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
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value)) //Checks the onAmountChange function exits or not, if it exists then update it with the typed value by user
          }
          /**onChange is an event handler for input fields.
            e = the event object, contains info about the input.
            e.target.value = the current value typed by the user.   Number(e.target.value) = converts the input from string → number */
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select
          className="rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
            /**What it does:
               currencyOptions = an array of currency codes like ["usd", "inr", "eur"].
               .map() = loops through each currency and creates an <option> element for it.
               key={currency} = React requires a unique key for each element in a list, since every currency code is unique we can set it as key-->["usd","inr","dnr"].
               value={currency} = the actual value sent when the user selects this option. This value will be sent.
               {currency} inside <option> = what the user sees in the dropdown.
               Plain English:
               It takes all available currencies and creates a dropdown list so the user can pick one. */
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;







/**Input onChange:
onChange={(e) =>
  onAmountChange && onAmountChange(Number(e.target.value))
}


What it does:
onChange is an event handler for input fields.
e = the event object, contains info about the input.
e.target.value = the current value typed by the user.
Number(e.target.value) = converts the input from string → number.
onAmountChange && onAmountChange(...) = checks if onAmountChange function exists, then calls it with the new value.
Plain English:

When you type a number, this line updates the state in the parent component with the new value.

2️⃣ Select onChange:
onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}


What it does:
onChange is for the dropdown (<select>).
e.target.value = the currency the user selected.
onCurrencyChange && onCurrencyChange(...) = calls the parent function to update the selected currency state.

Plain English:
When you pick a currency from the dropdown, this updates the “from” or “to” currency in the app.

3️⃣ Rendering dropdown options:
{currencyOptions.map((currency) => (
  <option key={currency} value={currency}>
    {currency}
  </option>
))}


What it does:
currencyOptions = an array of currency codes like ["usd", "inr", "eur"].
.map() = loops through each currency and creates an <option> element for it.
key={currency} = React requires a unique key for each element in a list, since every currency code is unique we can set it as key-->["usd","inr","dnr"].
value={currency} = the actual value sent when the user selects this option. This value will be sent.
{currency} inside <option> = what the user sees in the dropdown.

Plain English:
It takes all available currencies and creates a dropdown list so the user can pick one.

✅ Combined Summary:
Part	What it does
onChange for input	Updates amount as you type
onChange for select	Updates selected currency when you pick one
.map with <option>	Creates the list of currencies for the dropdown

💡 Think of it like this:
Typing → updates amount
Selecting → updates currency
Looping .map() → fills the dropdown options */




/*
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