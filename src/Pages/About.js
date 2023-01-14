import React from "react";
import "../styles/About.css"
import AboutImage from "../assets/photo.jpeg"

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage:`url(${AboutImage})`}}></div>
      <div className="aboutBottem">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          temporibus, quod maxime magni rerum adipisci tempore iure maiores
          architecto soluta quibusdam esse saepe dignissimos consequatur
          voluptates? Beatae animi, eos, fugiat, voluptatem sunt amet
          reprehenderit recusandae quam odio illum nisi! Ut neque dignissimos
          laborum rem optio possimus recusandae nemo quae nesciunt, id maiores
          hic debitis quidem voluptate deserunt magnam sapiente perspiciatis
          soluta fugit! Similique, sit?
        </p>
      </div>
    </div>
  );
}

export default About;
