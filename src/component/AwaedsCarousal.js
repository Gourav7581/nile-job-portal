import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";

import Awc1 from '../image/Awc1.jpg';
import Awc2 from '../image/Awc2.jpeg';
import Awc3 from '../image/Awc3.jpeg';
import Awc4 from '../image/Awc4.jpeg';
import Awc5 from '../image/Awc5.jpg';
import Awc6 from '../image/Awc6.jpeg';
import Awc7 from '../image/Awc7.jpeg';
import Awc8 from '../image/Awc8.jpeg';
import Awc9 from '../image/Awc9.jpeg';
import Awc10 from '../image/Awc10.jpeg';
import Awc11 from '../image/Awc11.jpeg';
import Awc12 from '../image/Awc12.jpeg';

const AwaedsCarousal = () => {
    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow next-arrow" onClick={onClick}>
            <MdKeyboardArrowRight />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev-arrow" onClick={onClick}>
            <FaChevronLeft />
        </div>
    );

    const responsiveSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='awcarousal'>
            <div className="awcarousal1">
                LEADING THE WAY IN HOSPITALITY EXCELLENCE: NILE HOTEL MANAGEMENT AWARDS
            </div>
            <div className="awcarousal2">
                <h2>Awards Program</h2>
            </div>

            <div className="container-fluide awc1">
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...responsiveSettings}>
                            {[Awc1, Awc2, Awc3, Awc4, Awc5, Awc6].map((img, index) => (
                                <div key={index} className="item">
                                    <div className="thumb Awcimg1div">
                                        <img src={img} alt={`Award ${index + 1}`} className="Awcimg1" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="container-fluide awc1 awc2">
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...responsiveSettings}>
                            {[Awc7, Awc8, Awc9, Awc10, Awc11, Awc12].map((img, index) => (
                                <div key={index} className="item">
                                    <div className="thumb Awcimg1div">
                                        <img src={img} alt={`Award ${index + 7}`} className="Awcimg1" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwaedsCarousal;
