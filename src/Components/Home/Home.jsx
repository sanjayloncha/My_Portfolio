import React from "react";
import "./Home.css";
import hero_img from "./hero_img.JPG";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  let tStyle = {
    letterSpacing: "2px",
  };

  return (
    <div id="home">
      <div className="container mx-auto home__bg d-flex ">
        <div className="row d-flex align-items-center">
          <div className="col-11  col-md-7  mx-auto order-2 ">
            <h1>
              Hi, I'm{" "}
              <span className="hero_name">
                <TypeAnimation
                  sequence={[
                    "Developer",
                    1200,
                    "Programmer",
                    1200,
                    "Coder",
                    1200,
                  ]}
                  style={tStyle}
                  speed={5}
                  deletionSpeed={30}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="fs-5 w-75 m-auto my-4">
              My name is Sanjay Loncha. I am Front End Developer living in
              Gujarat, India.
            </p>
            <a
              href="https://drive.google.com/file/d/1PG8ztq2evHMEoK63lGM2NX8ksy8RdMs8/view?usp=sharing"
              target="blank"
              className="btn btn-dark fs-5 "
            >
              Download cv <i class="fa-regular fa-circle-down mx-2 m-0"></i>
            </a>
          </div>
          <div className="col-11  col-md-5  mx-auto my-3 order-1 ">
            <div className="img__container  mx-auto ">
              <img
                src={hero_img}
                alt="hero-image"
                className=" img-fluid"
                id="hero_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
