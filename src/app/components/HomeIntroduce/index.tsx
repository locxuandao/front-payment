import classNames from "classnames/bind";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./HomeIntroduce.module.scss";
import slide1 from "assets/images/slide 1.jpg";
import slide2 from "assets/images/slide 2.jpg";
import slide3 from "assets/images/slide3.jpg";
import slide4 from "assets/images/slide4.jpg";

const cx = classNames.bind(styles);

const images = [slide1, slide2, slide3, slide4];

export const HomeIntroduce = () => {
  return (
    <div className={cx("container")}>
      <div className="slideshow-container">
        <Carousel
          autoPlay={true}
          interval={1500}
          infiniteLoop={true}
          showThumbs={false}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} className={cx("img")} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
