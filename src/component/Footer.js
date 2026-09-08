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
                <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%3A%2F%2Fcareersatnile.com%2Fjobshare.php%2Fguest-service-associate--radisson-hotel-kandla-2974" className="icons linkdin" target="_self">
                  <FaLinkedinIn
                    className="icon" />
                </a>

                <a href="https://www.facebook.com/login.php?skip_api_login=1&amp;api_key=966242223397117&amp;signed_next=1&amp;next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%3A%2F%2Fcareersatnile.com%2Fjobshare.php%2Fguest-service-associate--radisson-hotel-kandla-2974&amp;cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&amp;display=popup&amp;locale=en_GB" className="icons facebook">
                  <FaFacebookF className="icon mx-3" />
                </a>


                <a href="https://instagram.com/nilehospitality/" rel="noreferrer" target="_blank" title="Instagram">
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
