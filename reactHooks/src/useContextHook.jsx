/*useContext is a react hook that allows you access data from any component without explicitly passing it down through props at every level*/
//useContext is used to manage global data in the react App.
//Whenever we have to pass the data in the react app we have to use the props & using props we have to send the data at every component level,but this can be very painfull when we are working with more nested components, it will be difficult to manage the data and we have to pass the data through each component level. -->solution => useContext() Hook


//we can use the useContext hook in three simple steps:
/*1). Creating the Context
2). providing the Context
3). consuming the Context*/ 

import React from "react"
import "./App.css"
import Profile from "./components/profile";
import Footer from "./components/footer";

function App() {
    return (
        <>
            <Profile />
            <Footer/>
        </>
    )
}

export default App;


/**File: App.jsx (Using components that might consume context)
function App() {
  return (
    <>
      <Profile />
      <Footer />
    </>
  )
}


Even though App doesn’t pass any props, both Profile and Footer can still use the useContext(AppContext) hook to get data.

✅ Final Flow Diagram
index.jsx (createRoot)
       ↓
<ContextProvider>  ← provides context values
   ↓
  <Appy6 />  ← your main app (uses components)
       ↓
    <Profile /> , <Contact /> , <Footer /> 
        ↓
  useContext(AppContext) → Access {name, phone}

💡 In Short:
Step	                 Description	              Example
1️⃣ Create	             Define context	              export const AppContext = createContext()
2️⃣ Provide	             Wrap your app in provider	  <AppContext.Provider value={{name, phone}}>
3️⃣ Consume	             Use data anywhere	          const {name, phone} = useContext(AppContext) */










