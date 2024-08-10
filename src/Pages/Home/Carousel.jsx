import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../../assets/pic6.jpg";
import slider2 from "../../assets/pic10.jpg";
import slider3 from "../../assets/pic18.jpg";
import slider4 from "../../assets/pic32.jpg";
import slider5 from "../../assets/pic12.jpg";

import "./Home.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="Carousel">
      <p>Elegance Snippets</p>
      <Slider {...settings} className="root">
        <div>
          <img src={slider1} alt="Slide 1" />
        </div>
        <div>
          <img src={slider2} alt="Slide 2" />
        </div>
        <div>
          <img src={slider3} alt="Slide 3" />
        </div>
        <div>
          <img src={slider4} alt="Slide 4" />
        </div>
        <div>
          <img src={slider5} alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
