import React from 'react'
import './Navbar.scss'
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <>
        <nav>
            <div className="input">
                <CiSearch className='logo'/>
                <input type="text"  />
            </div>
            <div className="links">
                <a href="/category">Categories</a>
                <a href="/builder">Website Builders</a>
                <a href="/deals">Today's deals</a>
            </div>
        </nav>
        <div className="hamburger"><RxHamburgerMenu /></div>
    </>
  )
}

export default Navbar