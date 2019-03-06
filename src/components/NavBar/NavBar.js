import React from 'react'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='navBar__container'>
            <div className="navBar__logo">Amazing App</div>  
        </div>  
    )
}

export default React.memo(NavBar)