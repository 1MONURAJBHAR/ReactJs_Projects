import { useState } from 'react'
import './App.css'

/*
function App() {
  // const counter = useState(0);
  // console.log(counter); //This useState() hook returns an array which contains the "initial value at 0th" index and "a function which is at 1st index".
  /* value of counter will be:
  (2) [0, ƒ]   //At 0th index initial value is "0" and at 1st index there is a function which sets/updates the new value in the UI.
  0: 0
  1: ƒ ()
  length: 2
  [[Prototype]]: Array(0)*/
   
  


 /*const [color, setColor] = useState("red")
 // console.log(color);
  



  //let color = "red";
  const changeColor = () => {
    //Here we are writing a function to change the color of button.When we click on button the changeColor function gets executed & color gets Blue in the console but it is not redering/displaying it on the UI.
    // color = "Bule"; //But it will not change the color of button in UI
    // console.log(color);

    setColor("Blue")   //It will update the state variable value "colors" value, render the changes in the UI.
  };

  return (
    <>
      <h1>My favourite color is {color}</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  );
}*/

/********************************************************************************************************************************************************************************************************************** */

/*
function App() {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red"
  });   //The "car" will get this object which contains all these key-value pairs, we can access the values bby --> car.brand, car.color, etc...
 console.log(car); //See in browsers console
  
  const changeColor = () => {
    //setCar({ color: "Blue" });  //If you do this then it will update the whole car object with this single object, which contains only color, so on the screen only color will be displayed. 
    //console.log(color);

      setCar((prevCar) => ({ ...prevCar, color: "Blue" })); //It will directly return it.
   // setCar((prev) => { return { ...prev, color: "blue" } })  //Take the previous object, spread it using spread operator, and update only the color value.
    console.log(car);  //Now it is updating the object as well as the UI also.
    
  }
  

  return (
    <>
      <h1>My { car.brand }</h1>
      <h2>It is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changeColor}>Blue</button>
    </>
  );
}

export default App*/
/*************************************************************************************************************************************************************************************************************************** */


function App() {

  const [count, setCount] = useState(0); //This useState() will render the whole page every time it receives new value via setCount() and updates the "counter" variable on whole page.

  const increaseCount = () => {
    // setCount(count + 1); //Taking the initial value and adding 1 --> 1, it is important to note that it not taking the updated value, again & again it is taking the initial value.
    // setCount(count + 1); //Taking the initial value and adding 1 --> 1
    // setCount(count + 1); //Taking the initial value and adding 1 --> 1
    // setCount(count + 1); //Taking the initial value and adding 1 --> 1

    // setCount((prev) => { return prev + 1 })
    // setCount((prev) => { return prev + 1 })
    // setCount((prev) => { return prev + 1 })
    // setCount((prev) => { return prev + 1 })
    
    //When we have only one variable we can write like this...
    setCount(prev => prev + 1);  //Here all the counts will get into batches, fiber directly updates the latest value for optimization i.e from 0 to 4.
    setCount(prev => prev + 1);  //Instead of prev we can write anything it's just a variable.
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>count: { count }</h1>
      <button onClick={increaseCount}>increment by 4</button>
      <button onClick={decreaseCount}>decrement</button>
    </>
  );
}


export default App;




















































/**What is the Spread Operator (...)
The spread operator expands (spreads) elements of an array or properties of an object into another array/object.
It’s written as three dots: ...

🧠 In objects, it copies key–value pairs:
const car = { brand: "Ferrari", color: "Red" };
const newCar = { ...car, color: "Blue" };

console.log(newCar);
// Output: { brand: "Ferrari", color: "Blue" }


✅ What happened here:
{ ...car } copied all keys from car → { brand: "Ferrari", color: "Red" }
Then color: "Blue" overwrote the existing color

🧠 In arrays, it copies elements:
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);
// Output: [1, 2, 3, 4, 5]

🔥 Why We Use ... in React
When updating a state object, React does not merge objects automatically — it replaces them.
So, if you write:
setCar({ color: "Blue" });


React throws away everything else and keeps only:
{ color: "Blue" }


✅ Correct way (with spread operator):
setCar(prevCar => ({ ...prevCar, color: "Blue" }));


Explanation:
prevCar → old state ({ brand, model, year, color })
{ ...prevCar } → copy all previous properties
color: "Blue" → update only the color property

So the new state becomes:
{ brand: "Ferrari", model: "Roma", year: "2023", color: "Blue" }

💡 Summary Table
Without Spread	With Spread
setCar({ color: "Blue" }) → other keys lost	setCar(prev => ({ ...prev, color: "Blue" })) → all keys kept
Replaces the whole object	Merges with old values */