import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
    return (
      <div className="carousel-wrapper">
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
            <div>
                <img src="../images/img-1.jpg" />
            </div>
            <div>
                <img src="../images/img-3.jpg" />
            </div>
            <div>
                <img src="../images/img-2.jpg" />
            </div>
        </Carousel>
      </div>
    );
}

export default CarouselComponent;