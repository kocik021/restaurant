import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
  margin: "50px auto",
  width: "60vw"
};

function Gallery() {
  return (
    <div style={styles} id="gallery">
      <h2 className="tag">Gallery</h2>
      <Carousel>
        <div className="wrapson">
          <img
            src="https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_960_720.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397_960_720.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_960_720.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397_960_720.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
