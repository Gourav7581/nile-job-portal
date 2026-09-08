import React from 'react'
import Navbar from '../component/Navbar'
import Body from '../component/Body'
import Info from '../component/Info'
import Welcome from '../component/Welcome'
import Portfolio from '../component/Portfolio'
import Choose from '../component/Choose'
import Footer from "../component/Footer"
import Team from '../component/Team'
import { Link } from 'react-router-dom'

import HomeL1 from '../image/HomeL1.png'
import HomeL2 from '../image/HomeL2.webp'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Body/>
    <Info/>
    <Welcome/>
    <Portfolio/>

    <div className='my-5' style={{backgroundColor:"#efefef"}}>
    <Choose/>
    </div>
    <div>
      <Team/>
    </div>
    
    <div className='homesecondlastsection'>
      <div className='homesecondlastsection1'>
        <img src={HomeL1} alt='homsl1'/>
      </div>

      <div className='homesecondlastsection2'>
      <div className="div1"> Unveil Your Potential in Hospitality Leadership </div>
      <div className="div2"> Elevate Guest Experiences Along the NILE Hotel Management. Careers at Our Renowned Hotel Management Company. </div>
      <Link to="/careeradvice" className="home-career-link">GET CAREER HELP</Link>
      </div>
      
      
      <div className='homesecondlastsection3 '>
      <img src={HomeL2} alt='homsl1'/>
      </div>
      

    </div>
    <Footer/>
    </>
  )
}

export default Home
