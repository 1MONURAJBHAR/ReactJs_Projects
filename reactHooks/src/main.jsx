import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './useStateHook.jsx'
import Appy from './useEffectHook.jsx'
import Appy2 from './useRefHookcomment.jsx'
import Appy3 from './useRefHookPlain.jsx'
import Appy4 from './useMemoHook.jsx'
import Appy5 from './useCallbackHook.jsx'
import Appy6 from './useContextHook.jsx'
import ContextProvider from './context/appcontext.jsx'
import Appy7 from './useReducerHook.jsx'
import Appy8 from './useLayoutEffectHook.jsx'
import Appy9 from './customHook.jsx'

createRoot(document.getElementById("root")).render(
  //Added the support of this context in our react app,All components inside <ContextProvider> can access the context data.
  // <ContextProvider>   //For useContext() hook
  //   <Appy7 />
  // </ContextProvider>

    <Appy9 />
);

/**React app starts from this file (similar to main.jsx in Vite).
<ContextProvider> wraps the entire app.
Inside it, <Appy6 /> (your main component) and all of its children (like Profile, Contact, Footer, etc.) can now access context data. */