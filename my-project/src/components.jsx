

//props maks components reusable,with the help of props we can modify the components. The value of props is send from App.jsx, here we are only destructurig its value and using it.
function Card({username, someObj, hello, btnText="visit me"}) {  //destructuring the props here like--> {username, btnText="visit me"} = props, default value of btnText is "visit me"
    console.log(username);
    console.log(btnText);
    console.log(someObj); //This will be undefined for card 2 username = "Rajbhar", see in console of browser
    console.log(hello);  //This will be undefined for card 1 username = "Monu Rajbhar", see in console of browser

    return (


    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 ">
      <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" 
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{ username }</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
         {btnText }
        </button>
      </div>
    </div>
 

    )
}

export default Card