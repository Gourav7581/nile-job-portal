import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import FooterCarousal from './FooterCarousal';


const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container footercontainer'>
          <div className='row '>

            <div className='col-4 bg-a'>
              <div className=" footerlogo">
                {/* <img src={applylogo} alt="Logo" className="applylogo " /> */}.
                <img width="207" height="116" alt="Nile Hotel Management Company" nitro-lazy-src="https://cdn-ilcmbof.nitrocdn.com/KfaNXehBtwvEwswAeheRDHKCJZuSfiKZ/assets/images/optimized/careersatnile.com/wp-content/uploads/2023/11/footer-logo-1.png" className="attachment-full size-full wp-image-5334 lazyloaded" decoding="async" nitro-lazy-empty="" id="MjEzNzoyMDA=-1" src="https://cdn-ilcmbof.nitrocdn.com/KfaNXehBtwvEwswAeheRDHKCJZuSfiKZ/assets/images/optimized/careersatnile.com/wp-content/uploads/2023/11/footer-logo-1.png" class='footerlogo1' />
              </div>


              <div class="elementor-widget-container footerpart1 ">
                <p class="elementor-heading-title elementor-size-default">
                  NILE Hospitality is renowned for delivering exceptional and genuine experiential hospitality in some of the most vibrant cities. Within our dynamic and nurturing work environment, you'll have the opportunity to explore exciting Hospitality Careers and Hotel jobs

                </p>
              </div>




            </div>

            <div className='col-4 footersection2'>
              <h3>Quick Links</h3>
              <div>
                <ul>
                  <li><a href="https://nilehospitality.com/" class="menu-link">About Us</a></li>
                  <hr />
                  <li><a href="https://nilehospitality.com/portfolio/" class="menu-link">Portfolio</a></li>
                  <hr />
                  <li><a href="https://nilehospitality.com/our-services/" class="menu-link">Services</a></li>
                  <hr />
                  <li><a href="https://nilehospitality.com/media/" class="menu-link">Media</a></li>
                  <hr />
                  <li><a href="https://nilehospitality.com/contact-us/" class="menu-link">Contact Us</a></li>
                </ul>
              </div>
            </div>

            <div className='col-4 footersection2'>
              <h3>Share Your Resume</h3>
              <div class="elementor-widget-container">
                <h4 class="elementor-heading-title elementor-size-default"><a href="mailto:info@careersatnile.com">info@careersatnile.com</a></h4>
              </div>

              <div class="elementor-element elementor-element-c5b3501 jltma-glass-effect-no elementor-widget elementor-widget-heading" data-id="c5b3501" data-element_type="widget" data-widget_type="heading.default"> <div class="elementor-widget-container"> <h4 class="elementor-heading-title elementor-size-default"><a href="mailto:careers@nilehospitality.com​">careers@nilehospitality.com<wbr /></a></h4> </div> </div>

              <div class="elementor-widget-container fontsection3"> <h3 class="elementor-heading-title elementor-size-default">Connect With Us</h3> </div>

              <div className="social-icons footericon" style={{ fontSize: "1.8rem", display: "flex", gap: "10px" }}>
                <a href="https://www.linkedin.com/in/gourav-rathi-3bb29328b?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="icons linkdin" target="_self">
                  <FaLinkedinIn
                    className="icon" />
                </a>

                <a href="https://www.facebook.com/gourav.rathi.1253" className="icons facebook">
                  <FaFacebookF className="icon mx-3" />
                </a>


                <a href="https://www.instagram.com/gouravrathi53?stkn=MXIzMnUwNGJucTlxbA==" rel="noreferrer" target="_blank" title="Instagram">
                  <FaInstagram className="icon" />

                </a>
              </div>

            </div>




          </div>
          <hr />
          <div className='footerendpart'>
            <h3 class="footerendparttitle">Our Brands</h3>
            <div className='footercarousal'>
              <FooterCarousal />
            </div>
          </div>



        </div>
      </div>


    </>
  )
}

export default Footer
