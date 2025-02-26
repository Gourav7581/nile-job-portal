import React from 'react'
import Navbar from '../component/Navbar'
import Uc1 from "../image/Uc1.jpg"
import Ucg1 from '../image/Ucg1.png'
import Ucg2 from '../image/Ucg2.jpg'
import Ucg3 from '../image/Ucg3.jpeg'
import Ucg4 from '../image/Wimg5.jpg'
import Ucg5 from '../image/Ucg5.jpg'
import Ucg6 from '../image/Ucg6.jpg'
const Uchotels = () => {
  return (
    
    <div>
      <Navbar/>
      <div className='ucbody'>
        <img src={Uc1} alt='ucbody' className='ucbodyimg'/>
      </div>


      <div className='containter-fluide  ucgallerymaindiv'>

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

               <div className='col-4 mx-2 my-2 ucgallerydivimg'>
                <img src={Ucg1} alt='ucg1' className='ucgalleryimg'/>
               </div>
               <div className='col-4 mx-2 my-2 ucgallerydivimg'>
               <img src={Ucg2} alt='ucg2' className='ucgalleryimg'/>

               </div>
               <div className='col-4 mx-2  my-2 ucgallerydivimg'>
               <img src={Ucg3} alt='ucg3' className='ucgalleryimg'/>

               </div>
               
               <div className='col-4 mx-2 ucgallerydivimg'>
               <img src={Ucg4} alt='ucg1' className='ucgalleryimg'/>

               </div>
               <div className='col-4 mx-2 ucgallerydivimg'>
               <img src={Ucg5} alt='ucg1' className='ucgalleryimg'/>

               </div>
               <div className='col-4 mx-2 ucgallerydivimg'>
               <img src={Ucg6} alt='ucg1' className='ucgalleryimg'/>

               </div>
              

               </div>
           </div>


          </div>
      </div>
      
    </div>
  )
}

export default Uchotels
