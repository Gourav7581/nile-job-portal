import React from 'react'
import Awardlogo from "../image/Awardlogo.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";

// carousal1
import ALC1 from '../image/ALC1.jpg'
import Foot7 from "../image/Foot7.png"
import Foot8 from "../image/Foot8.jpg"
import ALC2 from '../image/ALC2.jpg'

// carousal2
import Foot3 from "../image/Foot3.png"
import Foot6 from "../image/Foot6.jpg"
import ALC3 from '../image/ALC3.png'
import ALC4 from '../image/ALC4.png'
import ALC5 from '../image/ALC5.jpg'

//carousal3
import ALC6 from '../image/ALC6.png'
import ALC7 from '../image/ALC7.png'
import ALC8 from '../image/ALC8.png'
import ALC9 from '../image/ALC9.png'
import ALC10 from '../image/ALC10.jpg'

//carousal4
import Foot4 from "../image/Foot4.png"
import Foot5 from "../image/Foot5.jpg"
import ALC11 from '../image/ALC11.png'

const AwardLogoCarousal = () => {
    
          const NextArrow = (props) => {
            const { onClick } = props;
            return (
              <div className="Awardcustom-arrow Awardnext-arrow" onClick={onClick}>
                < MdKeyboardArrowRight/>
              </div>
            );
          };
          
          // Custom Prev Arrow Component
          const PrevArrow = (props) => {
            const { onClick } = props;
            return (
              <div className="Awardcustom-arrow Awardprev-arrow" onClick={onClick}>
    <FaChevronLeft />
    </div>
            );
          };
    
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
              { breakpoint: 992, settings: { slidesToShow: 4 } },
              { breakpoint: 768, settings: { slidesToShow: 3 } },
              { breakpoint: 480, settings: { slidesToShow: 2 } },
            ],
          };

          const settings4 = {
            dots: true,
            infinite: true,
            speed: 500,
            
            slidesToShow: 3,

            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } },
            ],
          };
          
  return (
    <>
      <div className='container Awcconatiner'>

         <div className='Awcconatinerimgdiv '>
              <img src={Awardlogo} alt='awardlogo' />
         </div>
         
         <div className='Awcdivide'>
            <div className='Awcdividediv'></div>
            <div class="Awcdivide1 mx-3"> International Brands </div>
            <div className='Awcdividediv'></div>
         </div>

         {/* caroual1 */}

         <div className="container-fluide awc1 ">
        <div className="row  Awclrow">
          <div className="col-lg-12 AWLCAward">
            <Slider {...settings}>
              {/* Item 1 */}
              <div className="item">
                <div className="thumb Awcimg1div ">
                 
                  <img src={ALC1} alt="New Green Jacket"  className="Awclimg1" />
                </div>
               
              </div>

              {/* Item 2 */}
              <div className="item">
                <div className="thumb  Awcimg1div">
                  
                  <img src={Foot7} alt="Classic Dress"  className="Awclimg1 "/>
                </div>
               
              </div>

              {/* Item 3 */}
              <div className="item">
                <div className="thumb Awcimg1div">
                 
                  <img src={Foot8} alt="Spring Collection"  className="Awclimg1"/>
                </div>
                
              </div>

              {/* Item 4 */}
              <div className="item">
                <div className="thumb Awcimg1div">
                 
                  <img src={ALC1} alt="Spring Collection"  className="Awclimg1"/>
                </div>
                
              </div>

              {/* Item 5 */}
              <div className="item">
                <div className="thumb Awcimg1div">
                 
                  <img src={ALC2} alt="Spring Collection"  className="Awclimg1"/>
                </div>   
              </div>

              

              
            </Slider>
          </div>
        </div>
      </div>
     
      <div className='Awcdivide mt-3'>
            <div className='Awcdividediv1 '></div>
            <div class="Awcdivide1 mx-3"> International Branded Properties  </div>
            <div className='Awcdividediv1'></div>
         </div>

          {/* carousal 2 */}

     
          <div className="container-fluide awc1 ">
        <div className="row  Awclrow">
          <div className="col-lg-12 AWLCAward">
            <Slider {...settings}>
              {/* Item 1 */}
              <div className="item">
                <div className="thumb Awcimg1div ">
                 
                  <img src={ALC5} alt="New Green Jacket"  className="Awclimg1" />
                </div>
               
              </div>

              {/* Item 2 */}
              <div className="item">
                <div className="thumb  Awcimg1div">
                  
                  <img src={Foot3} alt="Classic Dress"  className="Awclimg1 "/>
                </div>
               
              </div>

              {/* Item 3 */}
              <div className="item">
                <div className="thumb Awcimg1div">
                 
                  <img src={Foot6} alt="Spring Collection"  className="Awclimg1"/>
                </div>
                
              </div>

              {/* Item 4 */}
              <div className="item">
                <div className="thumb Awcimg1div">
                 
                  <img src={ALC3} alt="Spring Collection"  className="Awclimg1"/>
                </div>
                
              </div>

              {/* Item 5 */}
              <div className="item">
                <div className="thumb Awcimg1div">
                 
                  <img src={ALC4} alt="Spring Collection"  className="Awclimg1"/>
                </div>   
              </div>

              

              
            </Slider>
          </div>
        </div>
      </div>

      {/* carousal3 */}
      <div className="container-fluide awc1 ">
        <div className="row  Awclrow">
          <div className="col-lg-12 AWLCAward">
            <Slider {...settings}>
              {/* Item 1 */}
              <div className="item">
                <div className="thumb Awcimg1div ">
                 
                  <img src={ALC6} alt="New Green Jacket"  className="Awclimg1" />
                </div>
               
              </div>

              {/* Item 2 */}
              <div className="item">
                <div className="thumb  Awcimg1div">
                  
                  <img src={ALC7} alt="Classic Dress"  className="Awclimg1 "/>
                </div>
               
              </div>

              {/* Item 3 */}
              <div className="item">
                <div className="thumb Awcimg1div">
                 
                  <img src={ALC8} alt="Spring Collection"  className="Awclimg1"/>
                </div>
                
              </div>

              {/* Item 4 */}
              <div className="item">
                <div className="thumb Awcimg1div">
                 
                  <img src={ALC9} alt="Spring Collection"  className="Awclimg1"/>
                </div>
                
              </div>

              {/* Item 5 */}
              <div className="item">
                <div className="thumb Awcimg1div">
                 
                  <img src={ALC10} alt="Spring Collection"  className="Awclimg1"/>
                </div>   
              </div>

              

              
            </Slider>
          </div>
        </div>
      </div>

      <div className='Awcdivide mt-3'>
            <div className='Awcdividediv1 '></div>
            <div class="Awcdivide1 mx-5"> Owner Branded Properties  </div>
            <div className='Awcdividediv1'></div>
         </div>
 {/* carousal4 */}

 <div className="container-fluide awc1  ">
        <div className="row  Awclrow Awclrow2 ">
          <div className="col-lg-12 AWLCAward ">
            <Slider {...settings4}>
              {/* Item 1 */}
              <div className="item">
                <div className="thumb Awcimg1div  ">
                 
                  <img src={ALC11} alt="New Green Jacket"  className="Awclimg1" />
                </div>
               
              </div>

              {/* Item 2 */}
              <div className="item">
                <div className="thumb  Awcimg1div">
                  
                  <img src={Foot4} alt="Classic Dress"  className="Awclimg1 "/>
                </div>
               
              </div>

              {/* Item 3 */}
              <div className="item">
                <div className="thumb Awcimg1div">
                 
                  <img src={Foot5} alt="Spring Collection"  className="Awclimg1"/>
                </div>
                
              </div> 

              
            </Slider>
          </div>
        </div>
      </div>










      </div>

      <div className='Awcdivide mt-3'>
            <div className=' Awcdividedivend '></div>
         </div>
    </>
  )
}

export default AwardLogoCarousal
