import React from 'react'
import welcome from '../image/welcome.png'
const Welcome = () => {
  return (

    <>
      <div className='container'>
        <div className='row'>

          <div className='col-6'>
            <img src={welcome} alt='welcome' className='welcomeimg'/>
          </div>

          <div className='col-6 welcomesection2'>

           <div className='welh'>
           <h2> WELCOME TO CAREERS AT NITE </h2>
           </div>
            
           <div className="welt1"> 
            At NILE, we firmly believe in the transformative power of innovation and the strength of collaboration, especially when it comes to <a style={{color:"rgb(2, 2, 48)"}}href="https://careersatnile.com/hotel-jobs/"><b>Hospitality Careers</b></a>. We invite you to join us on our inspiring journey to create a lasting and meaningful impact in the world of hospitality. 
            </div>

            <div className="welt2">
               Explore our exciting <a href="https://careersatnile.com/career-advice/" style={{color:"rgb(2, 2, 48)"}}><b>Career opportunities in the hospitality industry</b></a> , and be part of a team that’s dedicated to shaping the future of the industry through innovation and teamwork. Your journey towards a fulfilling career starts here at NILE, where we value your passion for successful careers in hospitality, and we’re committed to helping you achieve your professional aspirations.
             </div>

             <div className="welt2"> Our commitment to excellence starts with our people, and we are always on the lookout for talented individuals who share our passion for innovation. 
             </div>
                
             <div className="welb mt-5 ">
               <a  href="https://careersatnile.com/hotel-jobs/">
                <span className="welb2">
                   <span >START HERE</span>
                    </span> 
                    </a> 
                    </div>

          </div>
        </div>
      </div>
      

    </>
  )
}

export default Welcome
