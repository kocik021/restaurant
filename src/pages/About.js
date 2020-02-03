import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <img
        className="about-img"
        src="https://cdn.pixabay.com/photo/2017/08/05/21/34/chef-2585791_960_720.jpg"
        alt=""
      />
      <div className="about-wrap">
        <h2 className="about-us">About us</h2>
        <p className="about-text">
          All dishes are like short stories. People, journeys, memories,
          flavours of childhood.. These are the key ingredients that make each
          recipe come together. It's an honour and great pleasure to share these
          stories with you.
        </p>
      </div>
    </div>
  );
};

export default About;
