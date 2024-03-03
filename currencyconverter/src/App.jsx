import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const currency = '';
  const selectCurrency = '';
  const currencyDisable = false;
  const currencyOptions = [];

  return (
    <div className="w-1/2 h-64 bg-slate-500 mx-auto my-16 rounded relative ">
      <button className="absolute ml-auto bg-black text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-auto px-3 text-2xl rounded">
        Swap
      </button>
      <div className="w-full h-1/2 p-5 flex gap-2">
        <input type="number" className="w-2/3 h-full text-5xl rounded outline-none p-2" />
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-1/3 h-full text-5xl"
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
      <div className="w-full h-1/2 p-5 flex gap-2">
        <input type="number" className="w-2/3 h-full text-5xl rounded outline-none p-2" />
      <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-1/3 h-full text-5xl"
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

export default App;
