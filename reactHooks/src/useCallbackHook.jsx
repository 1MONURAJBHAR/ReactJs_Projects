/**useCallback is a react Hook that lets you cache a function definition between re-renders.
 * It means, when we use the useCallback Hook, it doesn’t create multiple instances of same function when re-render happens.
 * Instead of creating new instance of the function, it provides the cached function on re-render of the component.
 */

import React,{useCallback, useState} from 'react'
import './App.css'
import Header from './components/Header';

function App() {
    const [count, setCount] = useState(0);


    //const newfn = () => { }; //Every time the component re-renders, it creates new  instance of "newfn" everytime but at different memory locations thats why the every instance in each rendering is different from other instances of the same newfn. And we are passing it to Header, hence it renders the Header function everytime.
    
    //const newfn = useCallback(() => { }, []); //Whenever it will create this function first time & it will cache that function in the memory and whenever re-renders happen it will use the cached fucntion from memory,  so the function will be same, and when the function is same, so the header props will be same & it will not change , hence the Header will not re-render again. 
     
    const newfn = useCallback((count) => {}, [count]); //whenever we click on this button this count is changing, so whenever the count will change it will create a new function "newfn", & new function will be passed in Header, hence the props are changing, if props are changing then it will render Header again and again.

    return (  //here we are passing the new function "newfn" everytime to <Header/> as a props, so props is changing..., so whenever the props is changing Header re-renders again & again.<-- this is true when we are not using "useCallback"
        <>
            <Header newFn={ newfn } />
            <h1>{count}</h1>
            <button onClick={()=>setCount(prev => prev+1)}>Click here!..</button>
        </>
    )
}

export default App;