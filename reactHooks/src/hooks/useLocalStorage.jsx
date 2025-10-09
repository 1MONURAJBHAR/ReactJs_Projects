import React ,{ useEffect,  useState } from 'react'

const useLocalStorage = (key,initialValue) => {

  const [name, setName] = useState(
    localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
  );

  //This useEffect will update the name in localStorage after rendering the whole UI, with key-name as username.
  useEffect(() => {   //key=username, value=name, "key:value--> username:name"<-- stored in localstorage
      localStorage.setItem(key, name);
  }, [name,key]);

    return [name, setName]
}

export default useLocalStorage