import React from 'react'
import './TopSection.scss'
import { CiCircleCheck } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

function TopSection() {
  return (
    <>
        <div className="top-section">
            <h1>Best Website builders in the US</h1>
            <div className="content">
                <span>
                    <CiCircleCheck className='icon'/>
                    Last Updated  -  Feb  22,  2020
                </span>
                <span>
                    <AiOutlineExclamationCircle className='icon'/>
                    Advertising  Disclosure
                </span>
                <span>
                    Top relevant
                    <FiChevronDown className='icon'/>
                </span>
            </div>
            
            <div className="border"></div>
            <div className="features">
                <button>Tools</button>
                <button>AWS Builders</button>
                <button>Start Build</button>
                <button>Build Supplies</button>
                <button>Tooling</button>
                <button>Blue Hosting</button>
            </div>

            <div className="route">
                <span>
                    Home
                    <FiChevronRight className='icon'/>
                </span>
                <span>
                    Hosting for all
                    <FiChevronRight className='icon'/>
                </span>
                <span>
                    Hosting
                    <FiChevronRight className='icon'/>
                </span>
                <span>
                    Hosting6
                    <FiChevronRight className='icon'/>
                </span>
                <span>Hosting5 </span>
            </div>
        </div>
    </>
  )
}

export default TopSection