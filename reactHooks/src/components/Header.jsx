import React from 'react'

const Header = (props) => {
    console.log(props);
    
    console.log("Header Rendered");
    
    return (
        <div>
         <h2>Header</h2>
        </div>
    )
}

export default React.memo(Header);