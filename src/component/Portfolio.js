import React, { useState } from 'react';
import Rimg1 from "../image/car3.png";
import Rimg2 from '../image/car4.png';
import Rimg3 from '../image/Rimg3.jpg';
import Himg1 from '../image/Himg1.jpg';
import Himg2 from '../image/Himg2.jpg';
import Wimg1 from '../image/Wimg1.jpg';
import Wimg2 from '../image/Wimg2.jpg';
import Wimg3 from '../image/Wimg3.jpg';
import Wimg4 from '../image/car2.png';
import Wimg5 from '../image/Wimg5.jpg';
import Wimg6 from '../image/Wimg6.jpg';
import Oimg1 from "../image/Oimg1.jpg";
import Oimg2 from "../image/Oimg2.jpg";
import Oimg3 from "../image/car1.png";
import Oimg4 from "../image/Oimg4.jpg";

const Portfolio = () => {
    const [activeGallery, setActiveGallery] = useState('pimg1'); // Default gallery

    return (
        <>
            <div className='container pmain'>

                <div className='col-12 porth'>
                    <h2>OUR PORTFOLIO</h2>
                </div>

                <div className='container px-4 gallerydiv'>
                    <div className='row'>
                        <div className='container '>
                            <div className='row'>
                                <div className='col-2'></div>

                                <div className="col-8 ghead">
                                    <span onClick={() => setActiveGallery('pimg1')} className={activeGallery === "pimg1" ? 'activegellerycss' : ''}>Radisson Hotels</span>
                                    <span onClick={() => setActiveGallery('pimg2')} className={activeGallery === "pimg2" ? 'activegellerycss' : ''}>Hyatt Hotels</span>
                                    <span onClick={() => setActiveGallery('pimg3')} className={activeGallery === "pimg3" ? 'activegellerycss' : ''}>Wyndham Hotels</span>
                                    <span onClick={() => setActiveGallery('pimg4')} className={activeGallery === "pimg4" ? 'activegellerycss' : ''}>Other Hotels</span>

                                </div>
                                <div className='col-2'></div>
                            </div>
                        </div>

                        {/* Radisson Hotels Gallery */}
                        {activeGallery === 'pimg1' && (
                            <div className='container pimg'>
                                <div className='row'>
                                    <div className='col-4 imgc'>
                                        <img src={Rimg1} alt='Radisson Hotels1' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>Radisson Hotel Kandla</div>
                                        </div>
                                    </div>
                                    <div className='col-4 imgc'>
                                        <img src={Rimg2} alt='Radisson Hotels1' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>Uday Palace Navsari, a member of Radisson Individuals</div>
                                        </div>
                                    </div>
                                    <div className='col-4 imgc'>
                                        <img src={Rimg3} alt='Radisson Hotels1' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>Gift City Club, a member of Radisson Individuals</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Hyatt Hotels Gallery */}
                        {activeGallery === 'pimg2' && (
                            <div className='container pimg pimg2'>
                                <div className='row'>
                                    <div className='col-4 imgc'>
                                        <img src={Himg1} alt='Hyatt Hotels1' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>Hyatt Place Haridwar</div>
                                        </div>
                                    </div>
                                    <div className='col-4 imgc'>
                                        <img src={Himg2} alt='Hyatt Hotels2' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>Hyatt Place Vijayawada</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Wyndham Hotels Gallery */}
                        {activeGallery === 'pimg3' && (
                            <div className='container pimg pimg3'>
                                <div className='row'>
                                    <div className='col-4 imgc'>
                                        <img src={Wimg1} alt='Wyndham Hotels1' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>Ramada Encore By Wyndham Amritsar</div>
                                        </div>
                                    </div>
                                    <div className='col-4 imgc'>
                                        <img src={Wimg2} alt='Wyndham Hotels2' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>Ramada Encore By Wyndham Indore</div>
                                        </div>
                                    </div>
                                    <div className='col-4 imgc'>
                                        <img src={Wimg3} alt='Wyndham Hotels3' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>The Earth Trademark By Wyndham Amritsar</div>
                                        </div>
                                    </div>
                                    <div className='col-4 imgc'>
                                        <img src={Wimg4} alt='Wyndham Hotels4' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>Hawthorn Suites By Wyndham Dwarka</div>
                                        </div>
                                    </div>
                                    <div className='col-4 imgc'>
                                        <img src={Wimg5} alt='Wyndham Hotels4' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'> Ramada Encore By Wyndham<br /> Udaipur  </div>
                                        </div>
                                    </div>
                                    <div className='col-4 imgc'>
                                        <img src={Wimg6} alt='Wyndham Hotels4' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>Howard Johnson By Wyndham <br /> Udaipur</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Other Hotels Gallery */}
                        {activeGallery === 'pimg4' && (
                            <div className='container pimg pimg4'>
                                <div className='row'>
                                    <div className='col-4 imgc'>
                                        <img src={Oimg1} alt='Other Hotels1' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>Bhairavgarh Palace Udaipur</div>
                                        </div>
                                    </div>
                                    <div className='col-4 imgc'>
                                        <img src={Oimg2} alt='Other Hotels2' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>The Neemaya</div>
                                        </div>
                                    </div>
                                    <div className='col-4 imgc'>
                                        <img src={Oimg3} alt='Other Hotels3' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>Time Square Resort & Spa</div>
                                        </div>
                                    </div>
                                    <div className='col-4 imgc'>
                                        <img src={Oimg4} alt='Other Hotels4' className='RadissonHotels1' />
                                        <div className='Rimghover'>
                                            <div className='igtext'>The Chinar Resort Pahalgam, Kashmir</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Portfolio;
