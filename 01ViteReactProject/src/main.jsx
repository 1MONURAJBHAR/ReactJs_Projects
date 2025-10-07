import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/**Explanation Step-by-Step
1. import { StrictMode } from 'react'
StrictMode is a tool for highlighting potential problems in your app during development.
It helps you find unsafe lifecycle methods, deprecated APIs, or side-effects that might cause issues later.
It does not affect production — it’s only active in development mode.

2. import { createRoot } from 'react-dom/client'
Imports the new React 18 method for connecting your app to the browser DOM.
This replaces the older ReactDOM.render().

3. import App from './App.jsx'
Imports your main component — the one that holds your whole app’s UI.

4. createRoot(document.getElementById('root'))
Finds the <div id="root"> in your index.html.
Creates a React root there — React will control everything inside that div.

5. .render(<StrictMode><App /></StrictMode>)
Renders (displays) your App component inside that root.
Wrapped with <StrictMode> for better development checks.

✅ In Summary
Part	Purpose
StrictMode	Catches potential issues (dev-only)
createRoot()	Creates the React rendering container
document.getElementById('root')	Finds your HTML div
.render(<App />)	Displays your component inside the page */