import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "../index.css";

function Carousel() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="Kitten 1" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="Kitten 2" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="Kitten 3" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="Kitten 4" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
