import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

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
              amountDisable
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
}

export default App;
