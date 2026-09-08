import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Foot1 from "../image/Foot1.jpg";
import Foot2 from "../image/Foot2.png";
import Foot3 from "../image/Foot3.png";
import Foot4 from "../image/Foot4.png";
import Foot5 from "../image/Foot5.jpg";
import Foot6 from "../image/Foot6.jpg";
import Foot7 from "../image/Foot7.png";
import Foot8 from "../image/Foot8.jpg";

const brands = [Foot1, Foot2, Foot3, Foot4, Foot5, Foot6, Foot7, Foot8];

export default function FooterCarousel() {
  const settings = {
    arrows: false, dots: false, infinite: true, autoplay: true,
    autoplaySpeed: 1800, speed: 650, slidesToShow: 6, slidesToScroll: 1, pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };
  return <div className="footer-brand-slider"><Slider {...settings}>{brands.map((brand, index) => <div className="footer-brand-slide" key={index}><img src={brand} alt={`Partner brand ${index + 1}`} /></div>)}</Slider></div>;
}
