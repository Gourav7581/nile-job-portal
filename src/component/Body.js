import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import car1 from '../image/car1.png';
import car2 from '../image/car2.png';
import car3 from '../image/car3.png';
import car4 from '../image/car4.png';

const Body = () => {
  return (
    <div className="container-fluid px-0 Bodycarousalsection">
      <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000" data-bs-touch="true">
        <div className="carousel-indicators">
          {[0, 1, 2, 3].map((slide) => (
            <button key={slide} type="button" data-bs-target="#hero-carousel" data-bs-slide-to={slide} className={slide === 0 ? "active" : ""} aria-label={`Slide ${slide + 1}`} />
          ))}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={car1} alt="Hotel1" className="d-block w-100 img-fluid" />
          </div>
          <div className="carousel-item">
            <img src={car2} alt="Hotel2" className="d-block w-100 img-fluid" />
          </div>
          <div className="carousel-item">
            <img src={car3} alt="Hotel3" className="d-block w-100 img-fluid" />
          </div>
          <div className="carousel-item">
            <img src={car4} alt="Hotel4" className="d-block w-100 img-fluid" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev" aria-label="Previous slide">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next" aria-label="Next slide">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Body;
