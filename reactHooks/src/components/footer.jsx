import React,{useContext} from 'react'
import { AppContext } from '../context/appcontext';


const Footer = () => {

    const {phone} = useContext(AppContext)

    return (
      <div>
        <h2>Footer</h2>
        <h3>Phone No:{phone}</h3>
      </div>
    );
}

export default Footer