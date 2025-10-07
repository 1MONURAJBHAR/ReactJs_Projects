import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components'

function App() {
  const [count, setCount] = useState(0);

  //passing this object into the components, there it will be used as props,we can destructure it and use it
  let myObj = {
    username: "hitesh",
    age: 21,
  };
  //passing this array into the components, there it will be used as props,we can destructure it and use it
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="MonuRajbhar" someObj={newArr} btnText="click me" />
      <Card username="Rajbhar" btnText="visit Me" hello={myObj} />
    </>
  );
}

export default App