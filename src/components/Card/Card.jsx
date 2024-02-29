import React from 'react'
import './Card.scss'

function Card() {
  return (
    <>
        <div className="card">
                <div className="img">
                    <img src="images/image.png" alt="" />
                </div>
                <div className="content">
                    <button>20% off</button>
                    <button>Limited Time</button>
                    <h3>Webbuilder 1</h3>
                    <h4>Computer Modern Classic with mixed support</h4>
                    <h2><span className='one'> $39.96</span> <span className='two'> $49.96</span> <span className='three'>(20% off)</span></h2>
                </div>
                <div className="btn">
                    <button>View Deal</button>
                </div>
        </div>
    </>
  )
}

export default Card