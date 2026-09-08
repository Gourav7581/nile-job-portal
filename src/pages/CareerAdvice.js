import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import CarAd1 from '../image/CADAC1.png'
import CarAd2 from '../image/CADC2.png'
import Footer from '../component/Footer'

import Navbar from '../component/Navbar'
import CarAd3 from '../image/CarAd3.png'
import CarAd4 from '../image/CarAd4.png'
import CarAd5 from '../image/CarAd5.png'
import CarAd6 from '../image/CarAd6.png'
import CarAd10 from '../image/CarAd10.webp'
import CarAdsvg from '../image/CarAdsvg.png'

const CareerAdvice = () => {
  const NextArrow = (props) => {
              const { onClick } = props;
              return (
                <div className="Awardcustom-arrow cARAwardnext-arrow" onClick={onClick}>
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
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              arrows: true,
              nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
            };
  return (
    <>
      <Navbar/>
      <div className='careerbody'>
       <div className='careerbody1'>
        <div className='careerbody2'>
       <div className="div1">NAVIGATE. INNOVATE. LEAD. EVOLVE</div>

       <div class="div2">Unlock Your Potential at NILE: a Purpose-Driven Environment Are you ready to embark on a career journey that transcends the ordinary? Look no further than NILE – a place of innovation, inclusivity, and unyielding commitment to doing things well. </div>
       </div>
       </div>
      </div>

    <div className='container  text-center'>

       <div className='careerpart2'>
       <h1>LEADERSHIP DEVELOPMENT PROGRAM/ MANAGEMENT TRAINING PROGRAM </h1>
       </div>

       <div class="careerpart3">  Welcome to NILE-Edge – Nurturing Individuals for Leadership Excellence – Executive Development and Growth Experience Program. Our elite 24-month management training program is designed to ignite your leadership prowess and elevate your career trajectory. This experience offers a dynamic blend of mentorship, strategic insight, and hands-on learning, enabling you to grow into a future corporate trailblazer. </div>

       <div className='careerboxpart3'>

         <div className='careerbox1'>
          <img src={CarAd3} alt='carad1'/>

          <div className='careerboxdiv'> <span class="elementor-heading-title elementor-size-default">Skill Development </span> </div>

          <div class="careerboxdiv2"> Over the span of 24 months, you’ll delve into comprehensive modules meticulously crafted to nurture your strategic thinking, decision-making prowess, and people management skills. </div>




         </div>

         <div className=' careerbox1 careerbox2'>
          <img src={CarAd5} alt='carad1'/>

          <div className='careerboxdiv'> <span class="elementor-heading-title elementor-size-default">Areas of expertise: </span> </div>

          <div class="careerboxdiv2">Explore Accounting & Finance, Culinary Arts, Engineering, Event Coordination, Food & Beverage, Human Resources, Revenue Management, Sales, Marketing and Rooms Operations through Training </div>




         </div>


         <div className=' careerbox1 careerbox2 careerbox3'>
          <img src={CarAd6} alt='carad1'/>

          <div className='careerboxdiv'> <span class="elementor-heading-title elementor-size-default">Crafting Future Leaders </span> </div>

          <div class="careerboxdiv2">NILE-EDGE isn’t just a program; it’s a transformational journey. Graduating from this program signifies not only a personal accomplishment but also the dawn of a new era in your professional life.</div>




         </div>

        <div className='careerbox1 careerbox4'>
          <img src={CarAd4} alt='carad1'/>

          <div className='careerboxdiv'> <span class="elementor-heading-title elementor-size-default">Guided by Experts </span> </div>

          <div class="careerboxdiv2"> Benefit from personalized guidance by industry experts, and seasoned leaders who have navigated the corporate landscape with finesse. They’ll impart invaluable wisdom, share battle-tested strategies, and provide one-on-one mentorship to shape you into a leader capable of steering teams toward success. </div>




         </div>


       </div>



    </div>

<div className='careerBody3main'>
    <div className='careerBody3'>
 <div className='careerBody3part3 '>
    <h3>OUR DOORS ARE OPEN </h3>
    <div className='div1'> NILE Hospitality stands as a pre-eminent <b>hotel management</b> and development enterprise in South Asia, orchestrating the seamless operation of 10+ established hotels and poised to unveil the brilliance of 12+ additional hotels in our dynamic pipeline.  </div>

    <h3>SET YOUR PATH </h3>
    <div className='div1'> Shape Strive for excellence, embark on your purposeful journey, and evolve into your finest self.  </div>
    </div>
    </div>
    <div className='careerBody4'>
      <div className='div1'>
         <img src={CarAd10} alt='CArad10'/>
         <h3>STUDENTS &amp; GRADUATES</h3>
         <hr/>
         <button>START HERE</button>
      </div>
      <div className='div1'>
         <img src={CarAd10} alt='CArad10'/>
         <h3>CORPORATE</h3>
         <hr/>
         <button>START HERE</button>
      </div>
      <div className='div1'>
         <img src={CarAd10} alt='CArad10'/>
         <h3>OPERATIONS</h3>
         <hr/>
         <button>START HERE</button>
      </div>

    </div>

    </div>

    <div className="CAdvice">
     <img src={CarAdsvg} alt='caradsvg'/>
     <div className='div1'>

      <div className='div2'>
     <h2>INTERNSHIP PROGRAM </h2>
     <div className='div3'> Embark on a Transformative 6-Month Internship Journey with NILE </div>

     <div class="div4"> Unlock the gateway to hands-on learning and professional growth through the <a href="https://careersatnile.com/hotel-jobs/" style={{color:'rgb(4, 92, 192)'}}><b>6-month Internship Program</b></a> at NILE. Aspiring to mold the leaders of tomorrow, our program is meticulously designed to provide you with real-world experience and mentorship, setting you on a trajectory toward excellence. </div>
     </div>

     <div className='div1part2'>
              <button>START HERE</button>
     </div>

     

     </div>
    </div>

 <div className='CAdive10'>
 <h2>HEAR THE STORIES</h2>
 </div>
    {/* carousal */}

    <div className="container-fluide awc1 aw5 ">
        <div className="row  Awclrow Awclrow3 ">
          <div className="col-lg-12 AWLCAward ">
            <Slider {...settings}>
              {/* Item 1 */}
              <div className="item Cadvice1">
                <div className="thumb   ">
                 
                  <img src={CarAd1} alt="New Green Jacket"  className="" />
                </div>
               
              </div>

              {/* Item 2 */}
              <div className="item Cadvice1 ">
                <div className="thumb  ">
                  
                  <img src={CarAd2} alt="Classic Dress"  className=" "/>
                </div>
               
              </div>

           

              
            </Slider>
          </div>
        </div>
      </div>


<div className='mt-5'>
  <Footer/>
</div>



    </>
  )
}

export default CareerAdvice
