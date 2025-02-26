import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import car1 from '../image/car1.png';
import car2 from '../image/car2.png';
import car3 from '../image/car3.png';
import car4 from '../image/car4.png';

const Body = () => {
  useEffect(() => {
    // Check if Bootstrap is already loaded
    if (!window.bootstrap) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
      script.async = true;
      script.onload = () => {
        // console.log("Bootstrap loaded successfully");
        initializeCarousel();
      };
      document.body.appendChild(script);
    } else {
      initializeCarousel();
    }
  }, []);

  const initializeCarousel = () => {
    const myCarousel = document.querySelector("#demo");
    if (myCarousel) {
      new window.bootstrap.Carousel(myCarousel, {
        interval: 2000,
        ride: "carousel",
        wrap: true,
      });
    }
  };

  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        </div> */}

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={car1} alt="Hotel1" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={car2} alt="Hotel2" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={car3} alt="Hotel3" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={car4} alt="Hotel4" className="d-block w-100" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Body;
