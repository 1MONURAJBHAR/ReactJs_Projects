import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './useStateHook.jsx'
import Appy from './useEffectHook.jsx'
import Appy2 from './useRefHookcomment.jsx'
import Appy3 from './useRefHookPlain.jsx'
import Appy4 from './useMemoHook.jsx'
import Appy5 from './useCallbackHook.jsx'

createRoot(document.getElementById('root')).render(
 
    <Appy5 />
 
)
