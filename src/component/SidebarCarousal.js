import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Fjvc1 from '../image/Fjvc1.jpg';  
import Fjvc2 from '../image/Fjvc2.jpg';  
import Fjvc3 from '../image/Fjvc3.jpg';  
import Fjvc4 from '../image/Fjvc4.jpg';  
import Fjvc5 from '../image/Fjvc5.jpg';  

const SidebarCarousel = () => {
  return (
    <div className="sidebar-carousel">
      <Swiper
        direction="horizontal"
        slidesPerView={1.15}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 2400, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{
          576: { slidesPerView: 2.2, spaceBetween: 14 },
          992: { direction: "vertical", slidesPerView: 6, spaceBetween: 10 },
        }}
        modules={[Autoplay]}
        className="fjvertical"
      >
        <SwiperSlide><img src={Fjvc1} alt="NILE hotel interior 1" className="fjverticalimg" /></SwiperSlide>
        <SwiperSlide><img src={Fjvc2} alt="NILE hotel interior 2" className="fjverticalimg" /></SwiperSlide>
        <SwiperSlide><img src={Fjvc3} alt="NILE hotel interior 3" className="fjverticalimg" /></SwiperSlide>
        <SwiperSlide><img src={Fjvc4} alt="NILE hotel interior 4" className="fjverticalimg" /></SwiperSlide>
        <SwiperSlide><img src={Fjvc5} alt="NILE hotel interior 5" className="fjverticalimg" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SidebarCarousel;
