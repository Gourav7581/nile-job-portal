import React from 'react'
import Navbar from '../component/Navbar'
import Uc1 from "../image/Uc1.jpg"
import Ucg1 from '../image/Ucg1.png'
import Ucg2 from '../image/Ucg2.jpg'
import Ucg3 from '../image/Ucg3.jpeg'
import Ucg4 from '../image/Wimg5.jpg'
import Ucg5 from '../image/Ucg5.jpg'
import Ucg6 from '../image/Ucg6.jpg'
import Footer from '../component/Footer'
const Uchotels = () => {
  return (
    
    <div>
      <Navbar/>
      <div className='ucbody'>
        <img src={Uc1} alt='ucbody' className='ucbodyimg'/>
      </div>


      <main className='ucgallerymaindiv'>

        <div className=' ucgallerydiv'>

            <div className='ucgallerydivhead'>
                <h2> UPCOMING HOTELS
                </h2>
            </div>

            <div className='ucgallerydivtext'>
            Get ready to experience comfort redefined at our upcoming hotels. Nestled in some of the most sought-after destinations, our new hotels are poised to offer an unforgettable blend of opulence, comfort, and exceptional service.
            </div>

           <div className='container-fluide  ucgallery'>
            <div className='row ucgalleryrow'>

               <div className='ucgallerydivimg'>
                <img src={Ucg1} alt='Upcoming NILE hotel room' className='ucgalleryimg'/>
               </div>
               <div className='ucgallerydivimg'>
               <img src={Ucg2} alt='Upcoming NILE hotel exterior' className='ucgalleryimg'/>

               </div>
               <div className='ucgallerydivimg'>
               <img src={Ucg3} alt='Upcoming NILE hotel interior' className='ucgalleryimg'/>

               </div>
               
               <div className='ucgallerydivimg'>
               <img src={Ucg4} alt='Upcoming NILE hotel property' className='ucgalleryimg'/>

               </div>
               <div className='ucgallerydivimg'>
               <img src={Ucg5} alt='Upcoming NILE hotel suite' className='ucgalleryimg'/>

               </div>
               <div className='ucgallerydivimg'>
               <img src={Ucg6} alt='Upcoming NILE hotel accommodation' className='ucgalleryimg'/>

               </div>
              

               </div>
           </div>


          </div>
      </main>
      
      <Footer/>
    </div>
  )
}

export default Uchotels
