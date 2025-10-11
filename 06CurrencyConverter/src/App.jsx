import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0); //This will set the amount to "from inputBox"
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0); //This will set the convertedAmount to "to inputBox"

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Swap currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Convert amount
  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center  bg-cover bg-center text-white font-sans"
      style={{
        backgroundImage: `url('	https://img.freepik.com/premium-photo/digital-composite-image-connecting-dots_1048944-14050097.jpg?w=1480')`,
      }}
    >
      <div className="w-[90%] sm:w-[400px] backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl text-gray-900">
        <h1 className="text-3xl font-bold text-center text-white drop-shadow-md mb-6 tracking-wide">
          💱 Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-6"
        >
          {/* FROM input */}
          <div>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          {/* SWAP button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="flex items-center gap-2 border-2 border-white/40 bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium px-4 py-2 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              🔁 Swap
            </button>
          </div>

          {/* TO input */}
          <div>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable={true}
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>

        {/* Result display */}
        <div className="mt-6 text-center text-white/90">
          {convertedAmount > 0 && (
            <p className="text-xl font-semibold">
              {amount} {from.toUpperCase()} ={" "}
              <span className="text-yellow-300">
                {convertedAmount.toFixed(2)} {to.toUpperCase()}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
  /*In JavaScript, condition && expression means:
If the condition is true → render the expression
If the condition is false → render nothing (skip it)

If the converted amount is bigger than 0, show the conversion result on the page. Otherwise, show nothing.”

*/
}

export default App;



/**onCurrencyChange={(currency) => setFrom(currency)}
selectCurrency={from}
onAmountChange={(amount) => setAmount(amount)}
Let’s explain each part one by one 👇

🟢 1️⃣ onCurrencyChange={(currency) => setFrom(currency)}
The InputBox component has a dropdown (like “USD”, “INR”, “EUR”, etc.).

When the user selects a currency, it calls the function you gave in onCurrencyChange.

➡️ This function receives the selected value (like "inr" or "usd").
Then it updates the React state from using the setter function setFrom.

✅ Example:
If the user picks "eur" from dropdown:


setFrom("eur")
Now, from = "eur" in your app’s state.

🟣 2️⃣ selectCurrency={from}
This tells the InputBox which currency should be currently selected in its dropdown.

The value of from (like "usd") is passed to selectCurrency.

✅ Example:
If from = "usd", then the dropdown inside InputBox will show USD as selected.

So this line keeps the dropdown in sync with your React state.

🔵 3️⃣ onAmountChange={(amount) => setAmount(amount)}
The InputBox also has an input field where you type the amount (like 100 or 250).

Whenever the user changes the number, onAmountChange is called with that new number.

➡️ Then it updates your amount state using:


setAmount(amount)
✅ Example:
If the user types 200, then amount = 200.

🧠 Summary Table
Prop Name	What It Does	Triggered By	Effect
onCurrencyChange	Function that updates the selected currency	When user picks a new currency from dropdown	Updates from state
selectCurrency	Tells which currency is currently selected	Controlled by React state	Keeps dropdown synced
onAmountChange	Function that updates the amount	When user types in input field	Updates amount state

💡 In short:
You’re connecting your UI (InputBox) ↔ state variables (from and amount).
So when the user types or selects something — React updates the state,
and the state updates the UI again (two-way data binding).

 */












/**<form
  onSubmit={(e) => {
    e.preventDefault(), convert();
  }}
  className="space-y-6"
>
🔹 1️⃣ onSubmit={(e) => { ... }}
This is an event handler that runs when the form is submitted.
A form is submitted when you click the submit button or press Enter inside an input.

🔹 2️⃣ e.preventDefault()
Normally, submitting a form reloads the page (default HTML behavior).
e.preventDefault() stops the page from reloading, so React can handle the logic without losing state.

🔹 3️⃣ convert();
This calls your custom function convert() which calculates the converted amount based on the input and selected currencies.
It updates the state (convertedAmount) and re-renders the UI with the new value.

🔹 4️⃣ className="space-y-6"
This is Tailwind CSS.
Adds vertical spacing between all direct children of the form.
Makes your form look clean with even gaps between input boxes, buttons, etc.

⚠️ Important Note
Your snippet has:


e.preventDefault(), convert();
The comma , works in JavaScript, but it’s better to use a semicolon for clarity:


e.preventDefault();
convert();
This avoids confusion and is easier to read.

✅ Plain English Summary
When you submit the form:
Stop the page from reloading (preventDefault)
Run your conversion logic (convert())
space-y-6 just makes everything nicely spaced vertically */