import React from 'react'
import './Footer.scss'
import { FiChevronDown } from "react-icons/fi";

function Footer() {
  return (
    <>
    
        <footer>
            <div className="footer">
                <div className="categories">
                    <li><a href="/category" className='child1'>CATEGORIES</a></li>
                    <li><a href="/web">Web Builder</a></li>
                    <li><a href="/hosting">Hosting</a></li>
                    <li><a href="/data">Data Center</a></li>
                    <li><a href="/robotic">Robotic-Automation</a></li>
                </div>
                <div className="categories">
                    <li><a href="/contact" className='child1'>CONTACT</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/service">Terms of Service</a></li>
                    <li><a href="/category">Categories</a></li>
                    <li><a href="/about">About</a></li>
                </div>
                <div className="txt">United States <FiChevronDown /></div>
            </div>

        </footer>

    </>
  )
}

export default Footer