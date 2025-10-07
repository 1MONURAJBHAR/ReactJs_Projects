import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  // const convertToRed = () => {
  //   setColor("red")
  // }



  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-warp justify-center bottom-12 inset-x-0 px-2 /*bg-orange-100*/">
        <div
          className="flex flex-warp justify-center
        gap-3  shadow-lg bg-white px-3 py-2 rounded-2xl"
        >
          <button
            onClick={() => setColor("red")}   //Here onClick() only accepts a function, it did not accept any string ,number etc.., thats why we are providing a callback function to it.
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>

          <button
            onClick={() => setColor("magenta")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "magenta" }}
          >
            magenta
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
