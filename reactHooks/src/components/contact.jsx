import React,{useContext} from 'react'
import { AppContext } from '../context/appcontext'

const Contact = () => {
    
   const {phone,name} = useContext(AppContext)
   
    return (
        <div>
            <h2>Contact</h2>
            <h3>Phone No:{phone}</h3>
            <h3>Name:{name}</h3>
       </div>
    )
}

export default Contact