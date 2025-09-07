import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



import slider1 from "../assets/home/01.jpg";
import slider2 from "../assets/home/02.jpg";
import slider3 from '../assets/home/03.png';
import slider4 from '../assets/home/04.jpg';
import slider5 from '../assets/home/03.png';
import slider6 from '../assets/home/04.jpg';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img className="h-full" src={slider1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img className="h-full" src={slider2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img className="h-full" src={slider3} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img className="h-full" src={slider4} />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img className="h-full" src={slider5} />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img className="h-full" src={slider6} />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
