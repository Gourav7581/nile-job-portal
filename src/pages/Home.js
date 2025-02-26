import React from 'react'
import Navbar from '../component/Navbar'
import Body from '../component/Body'
import Info from '../component/Info'
import Welcome from '../component/Welcome'
import Portfolio from '../component/Portfolio'
import Choose from '../component/Choose'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Body/>
    <Info/>
    <Welcome/>
    <Portfolio/>
    <Choose/>
    </>
  )
}

export default Home
