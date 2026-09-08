import React from 'react'
import Navbar from "../component/Navbar"
import Awardlogo from "../image/Awardlogo.png"
import AwaedsCarousal from '../component/AwaedsCarousal'
import Awardmen from '../image/Awardmen.png'
import AwardLogoCarousal from '../component/AwardLogoCarousal'
import Footer from '../component/Footer'
const Awards = () => {
    return (
        <>
            <div className='awnavbar'>
                <Navbar />
            </div>
            <div className='Awbody '>
                <div className='Awbodydiv '>
                    <div className='Awbodydivpart3 '>
                        <div className='Awbodydivpart1'>
                            <h1 >Learn from the Experts</h1>
                            <div className='Awbodydivpart2 '> LEADING THE WAY IN HOSPITALITY EXCELLENCE: NILE HOTEL MANAGEMENT AWARDS </div>
                        </div>
                    </div>
                    
                
                </div>
      <div className='Awbodypart4'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    style={{ transform: "rotate(180deg)", fill: "white" }}
                >
                    <path d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"></path>
                </svg>
                </div>

            </div>

            <div className='Award2'>
               <div className='Award2left'>
                 <h2>OUR PEOPLE, OUR PRIDE</h2> 
                 <div className="Award2leftpart1"> At <b><a href="https://nilehospitality.com/" style={{color:"rgb(8, 103, 199)"}}>NILE</a></b>, our people are not just employees, they are the heart and soul of our organization. We believe in the power of recognizing and celebrating the incredible hard work, dedication, and success that each member of our team brings to the table. Our commitment to honoring our people runs deep, and it’s embedded in every facet of our company culture. </div>
               </div>



               <div className='Award2right  '>
                <div className='Award2rightpart1'>
                     <img src={Awardlogo} alt='awardlogo' className='Award2rightpart1img'/>
                </div>
               </div>
            </div>
  
            
            <div>
                <AwaedsCarousal/>
            </div>

            <div className='Award3'></div>

            <div className='Award3main'>  
              <div className=' Award3left'>
              <div class="elementor-widget-wrap elementor-element-populated "> <div class="elementor-element elementor-element-e5cfca2 jltma-glass-effect-no elementor-widget elementor-widget-text-editor" data-id="e5cfca2" data-element_type="widget" data-widget_type="text-editor.default"> <div class="elementor-widget-container Award3leftpart1"> From day one, we set out to create an environment where every employee feels valued, appreciated, and inspired. We understand that it’s the collective experience, passion, and expertise of our team that drives our success. That’s why we make it a point to celebrate not only the milestones and achievements but also the journey and growth of our employees within the company. </div> </div>
               <div class="elementor-element elementor-element-e513bee jltma-glass-effect-no elementor-widget elementor-widget-text-editor" data-id="e513bee" data-element_type="widget" data-widget_type="text-editor.default"> <div class="elementor-widget-container Award3leftpart1"> Whether it’s through regular appreciation events, performance recognition programs, or career development opportunities, we are dedicated to nurturing the talents and potential of our workforce. We encourage our people to thrive, to learn, and to excel because we know that their success is our success. </div> </div> 
               <div class="elementor-element elementor-element-3524034 jltma-glass-effect-no elementor-widget elementor-widget-text-editor" data-id="3524034" data-element_type="widget" data-widget_type="text-editor.default "> <div class="elementor-widget-container Award3leftpart1"> Our belief in ‘Our People, Our Pride’ isn’t just a tagline, it’s a philosophy that guides us every day. We are proud of the diverse backgrounds, skills, and experiences that make up our team, and we take great joy in witnessing the remarkable stories of personal and professional growth within our organization. </div> </div> </div>
              </div>

              <div className='Award3right'>
                <img src={Awardmen} alt='awdmwn' className='Award3rightimg'/>
              </div>

              </div>


              <div className='Award4'>
                  <AwardLogoCarousal/>
              </div>

 <div>
    <Footer/>
 </div>










            
        </>
    )
}

export default Awards
