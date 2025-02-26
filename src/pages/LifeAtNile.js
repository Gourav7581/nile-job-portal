import React from 'react'
import Navbar from '../component/Navbar'
import Uc1 from "../image/Uc1.jpg"
const LifeAtNile = () => {
  return (
    <>
      <Navbar/>

     <div className='lifebody bg-primary'>
        <img src={Uc1} alt="life1" className='lifebodyimg'/>
     </div>
    </>
  )
}

export default LifeAtNile
