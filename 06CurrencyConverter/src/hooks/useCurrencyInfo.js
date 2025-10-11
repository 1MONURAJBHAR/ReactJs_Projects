import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // Fetch data from the currency API
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const json = await response.json(); // Convert the raw response into JSON format
        setData(json[currency]); // Extract conversion rates for the given base currency and update state-->"data"
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    if (currency) fetchData(); // Fetch data only if a valid currency code is provided
  }, [currency]); // Re-run this effect whenever the 'currency' value changes

  return data; // Return the fetched currency data
}

export default useCurrencyInfo;






/**
 * API Source:
 * https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
 *
 * Notes:
 * - Always provides the latest exchange rates (latest date available)
 * - Works for any base currency (usd, inr, eur, etc.)
 * - CORS-friendly for browser and React applications
 */
