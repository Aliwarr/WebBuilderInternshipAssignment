import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import TopSection from './components/TopSection/TopSection'
import Hero from './components/Hero/Hero'
import { IoDiamondOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import Card from './components/Card/Card'
import MainCard from './components/MainCard/MainCard'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <TopSection />

      <Hero n={1} rating={9.8} remark={{words :"Exceptional", advice:"Best Value"}} icon={<IoDiamondOutline className='icon'/>}/>

      <Hero n={2} rating={9.5} remark={{words :"Excellent", advice:"Best Choice"}} icon={<TfiCup className='icon'/>}/>

      <Hero n={3} rating={9.3} remark={{words :"Exceptional", advice:"Best Value"}} icon={<IoDiamondOutline className='icon'/>}/>

      <Hero n={4} rating={9.1} remark={{words :"Very Good", advice:"Best Choice"}} icon={<TfiCup className='icon'/>}/>

      <div className="txt">
        <h3>Related deals you might like for</h3>
      </div>

      <MainCard />

      <div className="bottom">
        <div className="box1">
          <span>Signup and get exclusive special deals</span>
        </div>
        <div className="box2">
          <input type="text" />
          <button>Sign Up</button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
